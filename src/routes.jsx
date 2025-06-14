import { createBrowserRouter } from "react-router";
import Layout from "../src/Layout/Layout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Programs from "../src/pages/Programs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
    ],
  },
]);

export default routes;
