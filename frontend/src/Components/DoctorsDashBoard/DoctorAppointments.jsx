import { useState } from "react";
import { Clock, User } from "lucide-react";

export default function DoctorAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Yugank Kushwaha",
      time: "10:00 AM",
      status: "Scheduled",
    },
    { id: 2, patient: "Vishal Minj", time: "11:30 AM", status: "Scheduled" },
    { id: 3, patient: "Vivek Sharma", time: "02:00 PM", status: "Scheduled" },
  ]);

  const handlePostpone = (id) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "Postponed" }
          : appointment
      )
    );
  };

  return (
    <>
      <div className="max-w-5xl h-[100dvh] mx-auto px-[2rem] py-4">
        <h2 className="text-2xl md:text-[1.9rem] py-1 font-semibold mb-4 text-center rounded bg-[#118B50] text-white">
          Today's Appointments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {appointments.map(({ id, patient, time, status }) => (
            <div
              key={id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center"
            >
              <div className="p-3 bg-blue-100 rounded-full mb-3">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <p className="font-semibold text-lg md:text-[1.5rem] text-gray-700">
                {patient}
              </p>
              <p className="text-gray-700 text-sm flex items-center justify-center space-x-2 m-2">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-gray-800 text-base md:text-[1.1rem]">
                  {time}
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 mt-2">
                <span
                  className={`px-3 py-1 text-sm md:text-base rounded-lg tracking-wide ${
                    status === "Postponed" ? "bg-red-500" : "bg-green-600"
                  } text-white`}
                >
                  {status}
                </span>
                <button
                  className="px-4 py-1 bg-red-500 text-white text-sm md:text-base rounded-lg hover:bg-red-600 disabled:bg-gray-400 transition-all"
                  disabled={status === "Postponed"}
                  onClick={() => handlePostpone(id)}
                >
                  Postpone
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
