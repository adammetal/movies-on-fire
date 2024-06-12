import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Movies from "./Pages/Movies";

import GuestOnly from "./components/GuestOnly";
import AuthOnly from "./components/AuthOnly";
import { ThemeProvider } from "./ThemeProvider";

import "./index.css";
import MoviePage from "./Pages/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: (
      <GuestOnly>
        <Login />
      </GuestOnly>
    ),
  },
  {
    path: "movies",
    element: (
      <AuthOnly>
        <Movies />
      </AuthOnly>
    ),
  },
  {
    path: "movie/:id",
    element: (
      <AuthOnly>
        <MoviePage />
      </AuthOnly>
    )
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
