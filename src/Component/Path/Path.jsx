import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("12data.json"),
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch("20data.json"),
      },
    ],
  },
]);
