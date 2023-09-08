import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import Authentification from "./pages/Authentification";
import CreareCont from "./pages/CreareCont";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "authentification",
          children: [
            { index: true, element: <Authentification /> },
            { path: "creare-cont", element: <CreareCont /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
