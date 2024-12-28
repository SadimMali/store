import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import Layout from "./components/page/Layout";

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
  ]);
  return <RouterProvider router={router} />;
}
