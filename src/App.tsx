import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { Streaming, Dashboard, Login } from "./pages";

const router = createBrowserRouter([
  {
    path: "/auth/signin",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/streaming",
    element: <Streaming />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reports",
    element: <Streaming />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/settings",
    element: <Streaming />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
