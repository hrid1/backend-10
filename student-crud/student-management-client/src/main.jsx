import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import AddStudent from "./components/AddStudent.jsx";
import UpdateForm from "./components/UpdateForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/students"),
      },
      {
        path: "/add-student",
        element: <AddStudent />,
      },
      {
        path: "/update/:id",
        element: <UpdateForm />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/students/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
