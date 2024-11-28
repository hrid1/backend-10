import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex items-center justify-center mb-6">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-gray-500 font-bold" : ""} mx-4 font-semibold`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-gray-500 font-bold" : ""} mx-4 font-semibold`
          }
          to="/add-student"
        >
          Add Student
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "text-gray-500 font-bold" : ""} mx-4 font-semibold`
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default App;
