import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import Main from "../component/layout/Main";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import ManageProducts from "../pages/ManageProducts/ManageProducts";
import NotFound from "../pages/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "all-products/:category",
        element: <AllProducts />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "manage-product",
        element: <ManageProducts />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
