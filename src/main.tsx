import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import MoviesPage from "./Pages/MoviesPage";
import MoviePage from "./Pages/MoviePage";

import GuestOnly from "./components/GuestOnly";
import AuthOnly from "./components/AuthOnly";
import { ThemeProvider } from "./ThemeProvider";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login",
    element: (
      <GuestOnly>
        <LoginPage />
      </GuestOnly>
    ),
  },
  {
    path: "movies",
    element: (
      <AuthOnly>
        <MoviesPage />
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
