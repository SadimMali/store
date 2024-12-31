import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import Layout from "./components/page/Layout";
import AuthLayout from "./components/page/AuthLayout";
import Loginpage from "./pages/auth/Loginpage";
import SignUpPage from "./pages/auth/SignUpPage";
import VerifyPage from "./pages/auth/VerifyPage";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <Loginpage />,
        },
        {
          path: "/sign-up",
          element: <SignUpPage />,
        },
        {
          path: "/verify/:id",
          element: <VerifyPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
