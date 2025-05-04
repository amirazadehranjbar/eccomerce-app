import {lazy} from "react";

const Register = lazy(() => import("../../views/auth/Register.jsx"));
const Login = lazy(() => import("../../views/auth/Login.jsx"));
const AdminLogin = lazy(() => import("../../views/auth/adminLogin.jsx"));

const PublicRoutes = [

    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/admin/login",
        element: <AdminLogin/>
    }

];

export default PublicRoutes;