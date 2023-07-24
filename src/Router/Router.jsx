import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Profile from "../Pages/Shared/Profile/Profile";
import SinglePage from "../Pages/Home/SearchCard/SinglePage";
import College from "../Pages/College/College";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/sign-up",
                element:<Register />
            },{
                path:'/profile',
                element:<Profile />
            },
            {
                path:'/details/:id',
                element:<SinglePage />
            },
            {
                path:'/college',
                element:<College />
            },
            {
                path:'/admission',
                element:<Admission />
            },
            {
                path:'/my-booking',
                element:<MyCollege />
            },
        ]
    }
])

export default router;