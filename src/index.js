import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/login/signIn";
import Home from "./pages/home/home";
import Friends from "./pages/friends/friends";
import Groups from "./pages/groups/groups";
import MyActivities from "./pages/myActivities/myActivities";
import ActivitiesList from "./pages/activitiesList/activitesList";
import ErrorPage from "./pages/error/errorPage";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/my-activities",
        element: <MyActivities />,
      },
      {
        path: "/activities-list",
        element: <ActivitiesList />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
