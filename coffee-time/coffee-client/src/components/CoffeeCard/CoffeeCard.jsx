import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, price, photo } = coffee;

  const handleView = () => alert("Viewing details of " + name);
  const handleEdit = () => alert("Editing " + name);
  const handleDelete = (id) => {
    const isConfirm = confirm(`Are You sure to delete ? ${id}`);
    if (isConfirm) {
      fetch(`https://coffee-server-bay-two.vercel.app/coffee/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const filterCoffees = coffees.filter((cofe) => cofe._id !== id);
            setCoffees(filterCoffees);
            alert("Deleted Succesfully");
          }
        });
    }
  };

  return (
    <div className="card card-side bg-base-200 shadow-md flex items-center p-4">
      {/* Coffee Image */}
      <figure>
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 object-cover rounded-md"
        />
      </figure>

      {/* Coffee Details */}
      <div className="flex-grow px-4">
        <h2 className="font-bold text-lg">Name: {name}</h2>
        <p className="text-gray-600">Quantity: {quantity}</p>
        <p className="text-gray-600">Price: {price} Taka</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-x-2">
        <button
          className="btn btn-ghost text-teal-500 hover:bg-teal-100"
          onClick={handleView}
        >
          <FaEye />
        </button>
        <Link to={`update-cofe/${_id}`}>
          <button
            className="btn btn-ghost text-yellow-500 hover:bg-yellow-100"
            onClick={handleEdit}
          >
            <FaEdit />
          </button>
        </Link>
        <button
          className="btn btn-ghost text-red-500 hover:bg-red-100"
          onClick={() => handleDelete(_id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
