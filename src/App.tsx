import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import GuestRoutes from "./routes/GuestRoutes";
import LoggedInUser from "./routes/LoggedInUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  const application = [...GuestRoutes, ...LoggedInUser];

  const router = createBrowserRouter(application);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
