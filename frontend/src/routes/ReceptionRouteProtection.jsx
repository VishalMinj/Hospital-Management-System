import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../Contexts";

const ReceptionRouteProtection = () => {
  const { role } = useUserContext();
  if (role === "D") return <Navigate to="/DoctorsDashboard" />;
  if (role === "P") return <Navigate to="/Home" />;
  return <Outlet />;
};

export default ReceptionRouteProtection;
