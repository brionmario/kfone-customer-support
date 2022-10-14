import { RouteObject } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import CustomerInfo from "../pages/customerInfo";
import Cases from "../pages/cases";
import Marketing from "../pages/marketing";
import Error from "../pages/error";

export const config: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />
  },
  {
    path: "/cases",
    element: <Cases />,
  },
  {
    path: "/customers",
    element: <CustomerInfo />,
  },
  {
    path: "/marketing",
    element: <Marketing />,
  },
  {
    path: "*",
    element: <Error />,
  }
];
