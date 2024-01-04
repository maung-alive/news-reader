import React from 'react'
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import News from './pages/News';
import Category from './pages/Category';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/news/:title",
        element: <News />
    },
    {
        path: "/category/:name",
        element: <Category />
    }
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
