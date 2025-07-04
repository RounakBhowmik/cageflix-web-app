import { BrowserRouter, Route, Routes } from "react-router";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import DetailsPage from "../pages/detailsShow/DetailsPage";

const AppRoutes = () => {
  const routes = [
    // {
    //   name: "Signin",
    //   path: "/signin",
    //   element: <Signin />,
    // },
    // {
    //   name: "Signup",
    //   path: "/signup",
    //   element: <Signup />,
    // },
    {
      name: "Home",
      path: "/",
      element: <Home />,
    },
    {
      name: "DetailsPage",
      path: "/details/:movieId",
      element: <DetailsPage />,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((ele, key) => (
          <Route
            path={ele.path}
            element={<Layout>{ele.element}</Layout>}
            key={key}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
