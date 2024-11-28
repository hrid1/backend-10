import { useLoaderData } from "react-router-dom";

const UpdateForm = () => {
  const data = useLoaderData();
  console.log(data);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const dept = form.dept.value;
    // console.log(name, dept);
    const student = { name, department:dept };
    fetch(`http://localhost:3000/students/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) alert("Update Succesful");
      });
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold">Update Form</h2>
      <form onSubmit={handleUpdate}>
        <div className="flex gap-4 justify-center items-center mt-2">
          <label>Name</label>
          <input
            className="border-2 rounded-md p-1"
            type="text"
            name="name"
            defaultValue={data.name}
          />
        </div>
        <div className="flex gap-4 justify-center items-center mt-2">
          <label>Deprt</label>
          <input
            className="border-2 rounded-md p-1"
            type="text"
            name="dept"
            defaultValue={data.department}
          />
        </div>

        <input type="submit" className="border-2 rounded-md mt-4 p-2" />
      </form>
    </div>
  );
};

export default UpdateForm;
