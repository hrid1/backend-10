const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// connection mongodb

const uri =
  "mongodb+srv://hridoy1:OQXqcLmiD8S08veZ@cluster0.54rjrr8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const studentCollection = client.db("studentDB").collection("students");

    //----------------------------- api routes---------------------------
    // Create
    app.post("/students", async (req, res) => {
      const newStudent = req.body;
      console.log(newStudent);
      const result = await studentCollection.insertOne(newStudent);
      res.send(result);
    });

    // Read ALl
    app.get("/students", async (req, res) => {
      const students = studentCollection.find();
      const result = await students.toArray();
      res.send(result);
    });

    // Read single
    app.get("/students/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await studentCollection.findOne(query);
      res.send(result);
    });

    // Delete one
    app.delete("/students/:id", async (req, res) => {
      const sId = req.params.id;
      const query = { _id: new ObjectId(sId) };
      const result = await studentCollection.deleteOne(query);
      res.send(result);
    });

    // Update info
    app.put("/students/:id", async (req, res) => {
      const sId = req.params.id;
      const filter = { _id: new ObjectId(sId) };
      const options = { upsert: true };
      const updateStudent = req.body;

      const updateInfo = {
        $set: {
          ...updateStudent,
        },
      };
      const result = await studentCollection.updateOne(
        filter,
        updateInfo,
        options
      );

      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

// routes
app.get("/", (req, res) => {
  res.send("HI boss");
});

app.listen(port, () => {
  console.log(`server is http://localhost:3000/`);
});
