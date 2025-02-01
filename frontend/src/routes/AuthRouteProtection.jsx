import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Contexts";

const AuthRouteProtection = () => {
  const { Authenticated } = useAuthContext();

  return Authenticated ? <Navigate to="/Home" /> : <Outlet />;
};

export default AuthRouteProtection;
