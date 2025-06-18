import { createBrowserRouter } from "react-router";
import Layout from "../src/Layout/Layout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Programs from "../src/pages/Programs";
import Coaches from "../src/pages/Coaches";
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
      {
        path: "/team",
        element: <Coaches />,
      },
    ],
  },
]);

export default routes;
