import React from "react";
import {
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import Search from "./Search";
import MovieDetail from "./MovieDetail";
import TVDetail from "./TVDetail";
import MovieList from "./Movielist";
import ErrorNotification from "./ErrorNotification";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProfile from "./Userprofile";
// import Errorpage from './Errorpage'

import { store } from "./store/store";
import { Provider } from "react-redux";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
        </Routes>
      </Router> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
