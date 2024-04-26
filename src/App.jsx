import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import AdvertismentDetailsPage from "./pages/AdvertismentDetailsPage";
import RequestsPage from "./pages/RequestsPage";
import CreateRequestPage from "./pages/CreateRequestPage";
import ErrorPage from "./pages/ErrorPage";
import StartPage from "./pages/StartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
    errorElement: <ErrorPage />,
  },
  { path: "/home", element: <HomePage /> },
  { path: "/home/advId", element: <AdvertismentDetailsPage /> },
  { path: "/requests", element: <RequestsPage /> },
  { path: "/requests/create-request", element: <CreateRequestPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
