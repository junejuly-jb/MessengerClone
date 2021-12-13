import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

import { isLoggedIn } from "../features/userSlice";

const UnprotectedRoutes = () => {

     const authStatus = useSelector(isLoggedIn)
     return !authStatus ? <Outlet /> : <Navigate to="/home" />
     
}

export default UnprotectedRoutes