import About from "../pages/About";
import Posts from "../pages/Posts";
import Page from "../pages/Page";
import Error from "../pages/Error";
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
  { id: 1, path: "/about", component: <About /> },
  { id: 2, path: "/posts", component: <Posts /> },
  { id: 3, path: "/*", component: <Error /> },
  { id: 4, path: "/posts/:id", component: <Page /> },
];

export const publicRoutes = [
  { id: 1, path: "/login", component: <Login /> },
  { id: 2, path: "/*", component: <Navigate to="/login" /> },
];
