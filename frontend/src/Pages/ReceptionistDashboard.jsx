import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppointmentRequest, BedAllotment, DoctorsList } from "./index.js";
import { Sidebar } from "../Components/index.js";

export default function ReceptionistDashboard() {
  return (
    <>
      <Router>
        <div className="flex min-h-[84.3dvh] md:min-h-[81.5dvh]">
          <Sidebar />
          <Routes>
            <Route path="/" element={<AppointmentRequest />} />
            <Route path="/Bedallotment" element={<BedAllotment />} />
            <Route path="/doctorsList" element={<DoctorsList />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
