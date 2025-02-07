import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const SidebarLink = ({ to, label }) => (
    <button
      onClick={() => {
        navigate(to);
        setIsOpen(false);
      }}
      className="py-2 px-4 rounded-md hover:bg-gray-700 transition"
    >
      {label}
    </button>
  );

  return (
    <>
      <div className="flex relative">
        <aside className="hidden md:flex flex-col w-60 bg-gray-800 p-6 text-white h-[calc(100vh-10dvh-5dvh)]">
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>
          <nav className="space-y-2 flex flex-col">
            <SidebarLink to="/" label="Appointment Request" />
            <SidebarLink to="/bedAllotment" label="Room/Bed Allotment" />
            <SidebarLink to="/doctorsList" label="Doctor List" />
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
              <SidebarLink to="/" label="Home" />
              <SidebarLink to="/appointments" label="Appointments" />
              <SidebarLink to="/doctorsList" label="Doctor List" />
            </nav>
          </aside>
        </div>
      </div>
    </>
  );
}
