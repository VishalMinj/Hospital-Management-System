import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Contexts";

const HomeRouteProtection = () => {
  const {Authenticated}= useAuthContext()
    return Authenticated?<Outlet/>:<Navigate to="/Auth/Login"/>
};

export default HomeRouteProtection;
