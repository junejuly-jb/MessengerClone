import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

import { isLoggedIn } from "../features/userSlice";

const ProtectedRoutes = () => {

     const authStatus = useSelector(isLoggedIn)
     return authStatus ? <Outlet /> : <Navigate to="/" />

}

export default ProtectedRoutes