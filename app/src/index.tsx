import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Authorization, Error, Home, Fields, Teacher } from "./pages";
import { DataProvider } from "./contexts/data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
  },
  {
    path: "/fields",
    element: <Fields />,
  },
  {
    path: "/authorization",
    element: <Authorization />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </>
);
