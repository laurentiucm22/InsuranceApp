import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import AuthentificationPage from "./pages/AuthentificationPage";
import AccountPage from "./pages/AccountPage";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SingupPage";
import CreazaOfertaPage from "./pages/CreazaOfertaPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: ":userName", element: <AccountPage /> },
        { path: ":userName/creaza-oferta", element: <CreazaOfertaPage /> },

        {
          path: "authentification",
          children: [
            { index: true, element: <AuthentificationPage /> },
            { path: "creare-cont", element: <SignupPage /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
