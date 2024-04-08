
import {createBrowserRouter,} from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../component/Login";
import Register from "../component/Register";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";
import EstateDetails from "../component/EstateDetails";

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
        },
        {
          path: '/update',
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path: '/userprofile',
          element: <UserProfile></UserProfile>
        },
        {
          path:'/details',
          element: <EstateDetails></EstateDetails>
        }
      ]
    },
  ]);

export default router;