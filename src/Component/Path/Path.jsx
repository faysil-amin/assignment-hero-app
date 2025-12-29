import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AppsAbout from "../Pages/AppsAbout/AppsAbout";
import Installation from "../Pages/Installation/Installation";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("../12data.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("../20data.json"),
        Component: Apps,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
      {
        path: "/apps/:id",
        Component: AppsAbout,
        loader: () => fetch("../20data.json"),
      },
      {
        path: "/installation",
        Component: Installation,
        loader: () => fetch("../20data.json"),
      },
    ],
  },
]);
