const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

const app = express();

// midllewares
app.use(cors());
app.use(express.json());

// main function
const uri =
  "mongodb+srv://gym-user:TAwvRZlbfkqdOxqa@cluster0.54rjrr8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
    // DB
    const gymSchedule = client.db("gym-schedule").collection("schedule");

    // routes

    app.post("/schedule", async (req, res) => {
      const data = req.body;

      const result = await gymSchedule.insertOne(data);
      
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Gym Vai");
});

app.listen(port, () => {
  console.log("Server is Running on ", port);
});