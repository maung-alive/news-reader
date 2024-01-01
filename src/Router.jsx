import React from 'react'
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
