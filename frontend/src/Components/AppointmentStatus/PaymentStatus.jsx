export default function PaymentStatus() {
  const appointments = [
    { id: "APT12345", patientName: "Monu", paymentStatus: true, cancel: false },
    { id: "APT12346", patientName: "Sonu", paymentStatus: false, cancel: false },
    { id: "APT12347", patientName: "Tonu", paymentStatus: false, cancel: false },
    { id: "APT12348", patientName: "Golu", paymentStatus: true, cancel: false },
  ];
  return (
    <>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-4 sm:p-8 min-h-[80dvh]">
        <h2 className="text-[1.5rem] font-semibold mb-4">Payment Status</h2>
        <div className="w-full text-[0.8rem] sm:text-[1rem] overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left text-gray-500 p-2">Appointment ID</th>
                <th className="text-left text-gray-500 p-2">Patient Name</th>
                <th className="text-left text-gray-500 p-2">Status</th>
                <th className="text-left text-gray-500 p-2">Cancel</th>
              </tr>
            </thead>
            <tbody>
            {appointments.map((appointment) => (
              !appointment.paymentStatus && (
                  <tr key={appointment.id} className="border-b">
                    <td className="p-2">{appointment.id}</td>
                    <td className="p-2">{appointment.patientName}</td>
                    <td className="p-2">
                      <button className="text-[#118B50] text-sm border px-5 cursor-pointer pb-[0.15rem] rounded">Pay</button>
                    </td>
                    <td className="p-2">
                      <button className="text-red-800 text-sm border px-2 cursor-pointer pb-[0.15rem] rounded">Cancel</button>
                    </td>
                  </tr>
                )))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
