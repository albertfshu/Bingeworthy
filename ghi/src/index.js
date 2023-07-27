import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { Provider } from "react-redux";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import TVDetail from "./TVDetail";
import ErrorNotification from "./ErrorNotification";
import App from "./App";
import UserProfile from "./Userprofile";
import Ratinglist from "./Ratinglist";
import Watchlist from "./Watchlist";

const domain = /https:\/\/[^/]+/;
const basename = process.env.PUBLIC_URL.replace(domain, "");

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorNotification />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:searchParam",
        element: <Home />,
      },
      {
        path: "/movie/:movie_id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:tv_id",
        element: <TVDetail />,
      },
      {
        path: "/profile/:userId",
        element: <UserProfile />,
      },
      {
        path: "/profile/:userId/watchlist",
        element: <Watchlist />,
      },
      {
        path: "/profile/:userId/ratings",
        element: <Ratinglist />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
