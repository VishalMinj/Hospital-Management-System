import { Outlet } from "react-router-dom";
import { Sidebar } from "../Components/index.js";

export default function ReceptionistDashboard() {
  return (
    <>
        <div className="flex min-h-[84.3dvh] md:min-h-[81.5dvh]">
          <Sidebar />
          <Outlet/>
        </div>
    </>
  );
}
