import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import AdvertismentDetailsPage from "./pages/AdvertismentDetailsPage";
import RequestsPage from "./pages/RequestsPage";
import CreateRequestPage from "./pages/CreateRequestPage";
import ErrorPage from "./pages/ErrorPage";
import StartPage from "./pages/StartPage";
import LogInPage from "./pages/LogInPage";
import FirstStepPage from "./pages/FirstStepPage";
import ProfilePage from "./pages/ProfilePage";
import RequestFilterPage from "./pages/RequestFilterPage";

import { action as registerNewUser } from "./pages/SignUpPage";
import { action as loginUser } from "./pages/LogInPage";

import { loader as fetchRequests } from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
    errorElement: <ErrorPage />,
  },
  { path: "/first-step", element: <FirstStepPage /> },
  {
    path: "/first-step/sign-up",
    element: <SignUpPage />,
    action: registerNewUser,
  },
  { path: "/log-in", element: <LogInPage />, action: loginUser },
  { path: "/home", element: <HomePage /> },
  { path: "/home/advId", element: <AdvertismentDetailsPage /> },
  { path: "/requests", element: <RequestsPage /> },
  { path: "/requests/create-request", element: <CreateRequestPage /> },
  { path: "/requests/filter", element: <RequestFilterPage /> },
  { path: "/profile", element: <ProfilePage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
