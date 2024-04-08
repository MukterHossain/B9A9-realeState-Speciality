
import {createBrowserRouter,} from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../component/Login";
import Register from "../component/Register";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router;