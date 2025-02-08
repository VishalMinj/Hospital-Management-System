import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../Contexts";

const PatientRouteProtection = () => {
  const { role } = useUserContext();
  if (role === "D") return <Navigate to="/DoctorsDashboard" />;
  if (role === "DW") return <Navigate to="/Reception/Appointments" />;
  return <Outlet />;
};

export default PatientRouteProtection;
