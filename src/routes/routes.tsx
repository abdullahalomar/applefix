import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About/About";
import Home from "@/pages/Home/Home";
import AddService from "@/pages/admin/AddService";
import Dashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard"></Navigate>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "service-list",
        element: <ServiceList></ServiceList>,
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
    ],
  },
]);

export default router;
