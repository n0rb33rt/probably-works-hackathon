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
import ProfileSettingsPage from "./pages/ProfileSettingsPage";

import { action as registerNewUser } from "./pages/SignUpPage";
import { action as loginUser } from "./pages/LogInPage";
import { action as createNewRequest } from "./pages/CreateRequestPage";

import { loader as fetchRequestsHome } from "./pages/HomePage";
import { loader as fetchUserData } from "./pages/ProfilePage";
import { loader as fetchRequests } from "./pages/RequestsPage";
import { loader as fetchSingleRequest } from "./pages/AdvertismentDetailsPage";

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
  {
    path: "/home",
    element: <HomePage />,
    loader: fetchRequestsHome,
  },
  {
    path: "/requests",
    element: <RequestsPage />,
    loader: fetchRequests,
  },
  {
    path: "/requests/:category",
    element: <RequestsPage />,
    loader: fetchRequests,
  },
  {
    path: "/requests/create-request",
    element: <CreateRequestPage />,
    action: createNewRequest,
  },
  {
    path: "/requests/:requestId",
    element: <AdvertismentDetailsPage />,
    loader: fetchSingleRequest,
  },

  { path: "/requests/filter", element: <RequestFilterPage /> },
  { path: "/profile", element: <ProfilePage />, loader: fetchUserData },
  {
    path: "/profile/settings",
    element: <ProfileSettingsPage />,
    loader: fetchUserData,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
