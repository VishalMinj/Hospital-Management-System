import { useState } from "react";

export default function AppointmentRequest() {
  const [appointments, setAppointments] = useState([
    { id: "APT12345", patientName: "Monu", status: "pending" },
    { id: "APT12346", patientName: "Sonu", status: "pending" },
    { id: "APT12347", patientName: "Tonu", status: "pending" },
    { id: "APT12348", patientName: "Golu", status: "pending" },
  ]);

  const handleAction = (id, status) => {
    setAppointments((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
  };

  return (
    <div className="p-4 max-w-3xl w-full mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Appointment Request</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-3 text-left font-semibold">Patient ID</th>
              <th className="px-4 py-3 text-left font-semibold">Patient Name</th>
              <th className="px-4 py-3 text-left font-semibold">Status</th>
              <th className="px-4 py-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-3 text-gray-800 font-medium">{appointment.id}</td>
                <td className="px-4 py-3 text-gray-800 font-medium">{appointment.patientName}</td>
                <td className="px-4 py-3">
                  {appointment.status === "pending" ? (
                    <span className="text-yellow-600 font-semibold">Pending</span>
                  ) : (
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        appointment.status === "accepted"
                          ? "bg-green-200 text-[#118B50]"
                          : "bg-red-200 text-red-700"
                      }`}
                    >
                      {appointment.status.charAt(0).toUpperCase() +
                        appointment.status.slice(1)}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {appointment.status === "pending" ? (
                    <div className="flex flex-wrap gap-2">
                      <button
                        className="bg-[#118B50] text-white px-[0.6rem] py-1 rounded-lg text-xs sm:px-3 sm:py-2 sm:text-sm hover:bg-green-700 transition"
                        onClick={() => handleAction(appointment.id, "accepted")}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs sm:px-3 sm:py-2 sm:text-sm hover:bg-red-600 transition"
                        onClick={() => handleAction(appointment.id, "declined")}
                      >
                        Decline
                      </button>
                    </div>
                  ) : (
                    <span className="text-gray-500">No Actions</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
