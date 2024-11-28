import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const loadStudents = useLoaderData();

  const [students, setStudents] = useState(loadStudents);

  // handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(id);
        if (data.deletedCount) {
          const updateStudents = students.filter(
            (student) => student._id !== id
          );
          setStudents(updateStudents);
          alert("Student Removed Successfully!");
        }
      });
  };
  return (
    <div>
      <h1 className=" text-red-900 font-semibold text-2xl mb-6">
        Welcome to Student Management System
      </h1>

      <section>
        <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Name
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Dept.
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Update
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Delete
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {student?.name}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {student?.department}
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Link
                      to={`/update/${student._id}`}
                      className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 ">
                    <button
                      onClick={() => handleDelete(student._id)}
                      className="ml-2 border-2 rounded-md p-2 block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Home;
