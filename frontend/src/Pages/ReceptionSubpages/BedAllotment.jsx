import { useState } from "react";
import { Bed } from "lucide-react";

const rooms =[
  {
    roomNo: 101,
    beds: [
      { id: 1, status: "Available" },
      { id: 2, status: "Occupied" },
      { id: 3, status: "Available" },
      { id: 4, status: "Occupied" },
      { id: 5, status: "Available" },
    ],
  },
  {
    roomNo: 102,
    beds: [
      { id: 6, status: "Available" },
      { id: 7, status: "Occupied" },
      { id: 8, status: "Available" },
      { id: 9, status: "Occupied" },
    ],
  },
  {
    roomNo: 103,
    beds: [
      { id: 10, status: "Available" },
      { id: 11, status: "Occupied" },
      { id: 12, status: "Available" },
    ],
  },
];

const statusColors = {
  Available: "bg-green-100 text-green-600",
  Occupied: "bg-red-100 text-red-600",
};

export default function BedAllotment(){
  const [selectedBed, setSelectedBed] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("");

  const room = rooms.find((r) => r.roomNo.toString() === selectedRoom);

  const handleRoomChange = (e) => setSelectedRoom(e.target.value);

  const handleBedClick = (bed) => {
    setSelectedBed((prev) =>
      prev?.id === bed.id ? null : { ...bed, roomNo: selectedRoom }
    );
  };

  return (
    <>
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Patient Bed Management</h2>

      <div className="mb-4">
        <select
          onChange={handleRoomChange}
          className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Choose room number</option>
          {rooms.map((room) => (
            <option
              key={room.roomNo}
              value={room.roomNo}
            >{`Room ${room.roomNo}`}</option>
          ))}
        </select>
      </div>
      {room && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Room {room.roomNo}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {room.beds.map((bed) => (
              <div
                key={bed.id}
                className={`cursor-pointer ${
                  statusColors[bed.status]
                } p-4 rounded-lg shadow-md transition-transform transform hover:scale-105`}
                onClick={() => handleBedClick(bed)}
              >
                <div className="flex items-center gap-2">
                  <Bed className="w-6 h-6" />
                  <div>
                    <p className="text-lg font-semibold">Bed {bed.id}</p>
                    <p className="text-sm">{bed.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedBed && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">
              Room {selectedBed.roomNo} - Bed {selectedBed.id}
            </h3>
            <p className="mt-2">Status: {selectedBed.status}</p>
            <button
              onClick={() => setSelectedBed(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
