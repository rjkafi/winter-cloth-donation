import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";
import Compaign from "../pages/Compaign";
import Help from "../pages/Help";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/UpdateProfile";
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
                path:'/donationcompaign',
                element:<Compaign></Compaign>,
                loader: () => fetch("../compaign.json")
            },{
                path:'/help',
                element:<Help></Help>
            },{
                path:'/dashboard',
                element:<PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>,
            
            }
        ]
    },{
        path:"/compaign/:id",
        element:<PrivateRoute>
            <Details></Details>
        </PrivateRoute>,
        loader: ({params}) => fetch("../compaign.json")
    
    },{
        path:'auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            },
            {
                path:'/auth/updateprofile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path: '/auth/forgetpassword',
                element: <ForgetPassword></ForgetPassword>
            },
        ]
    },{
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
  
]);

export default router;