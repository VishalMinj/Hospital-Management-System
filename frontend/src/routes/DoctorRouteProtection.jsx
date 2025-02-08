import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../Contexts";

const DoctorRouteProtection = () => {
  const { role } = useUserContext();
  if (role === "DW") return <Navigate to="/Reception/Appointments" />;
  if (role === "P") return <Navigate to="/Home" />;
  return <Outlet />;
};

export default DoctorRouteProtection;
