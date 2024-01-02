import React from 'react'
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import News from './pages/News';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/news/:title",
        element: <News />
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
