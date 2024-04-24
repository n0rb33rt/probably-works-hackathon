import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StartPage from "./pages/StartPage";

const router = createBrowserRouter([{ path: "/", element: <StartPage /> }]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
