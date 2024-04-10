
import {createBrowserRouter,} from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Login from "../component/Login";
import Register from "../component/Register";
import UpdateProfile from "../Pages/UpdateProfile";
import EstateDetails from "../component/EstateDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateProfile from "../PrivateProfile/PrivateProfile";
import Location from "../component/Location";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () =>fetch('/landData.json')
        },
        {
          path:'/data/:id',
          element: <PrivateProfile>
            <EstateDetails></EstateDetails>
            </PrivateProfile>,
           loader: () =>fetch('/landData.json')
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
          element: <PrivateProfile><UpdateProfile></UpdateProfile></PrivateProfile>
        },
        {
          path: 'location',
          element: <PrivateProfile><Location></Location></PrivateProfile>
        }
 
      ]
    },
  ]);

export default router;