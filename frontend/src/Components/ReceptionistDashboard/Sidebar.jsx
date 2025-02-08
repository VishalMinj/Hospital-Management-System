import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <>
      <div className="flex relative">
        <aside className="hidden md:flex flex-col w-60 bg-gray-800 p-6 text-white h-[calc(100vh-10dvh-5dvh)]">
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>
          <nav className="space-y-2 flex flex-col">
            <Link to="Appointments" >
              Appointment Request
            </Link>
            <Link to="Bedallotment">
              Room/Bed Allotment
            </Link>
            <Link to="DoctorsList">
              Doctor List
            </Link>
          </nav>
        </aside>

        <div className="md:hidden relative">
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="text-[#118B50] m-4"
              aria-label="Open Sidebar"
            >
              <Menu size={36} />
            </button>
          )}
          <aside
            className={`absolute top-0 left-0 h-[calc(100vh-10dvh-5.6dvh)] w-60 bg-gray-900 text-white p-6 transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6.5 right-4 text-white"
              aria-label="Close Sidebar"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold mb-6">Dashboard</h2>
            <nav className="space-y-2 flex flex-col">
              <Link to="/" >
                Home
              </Link>
              <Link to="/appointments" label="Appointments" />
              <Link to="/doctorsList" label="Doctor List" />
            </nav>
          </aside>
        </div>
      </div>
    </>
  );
}
