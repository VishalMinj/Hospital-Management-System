import { useEffect, useState } from "react";
import {
  UpdateAppointmentsAPI,
  GetAppointmentsAPI,
  complete_payment,
  get_paymnetID,
  DeleteAppointmentsAPI,
} from "../../utils";
import { useRazorpay } from "react-razorpay";

const AMOUNT = 499;
export default function AppointmentList() {
  const [AppointmentData, setAppointmentData] = useState([]);
  const { Razorpay } = useRazorpay();

  const fetchData = async () => {
    const data = await GetAppointmentsAPI();
    setAppointmentData(data);
  };

  useEffect(() => {
    fetchData();
  }, [setAppointmentData]);

  const status = {
    P: "Pending",
    V: "verification_status",
    R: "Rejected",
  };
  const status_color = {
    P: "text-yellow-400",
    V: "text-green-600",
    R: "text-red-700",
  };

  const create_payment = async (order_id, id) => {
    try {
      const options = {
        key: import.meta.env.RAZORPAY_KEY_ID,
        name: "Hope Hospital",
        description: "Appointment fee",
        order_id: order_id,
        handler: async (response) => {
          try {
            const paymentSuccess = await complete_payment(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature,
              AMOUNT
            );
            if (paymentSuccess.status === 201) {
              const updatedAppointments = AppointmentData.map((appointment) =>
                appointment.id === id
                  ? {
                      ...appointment,
                      payment_status: true,
                    }
                  : appointment
              );
              setAppointmentData(updatedAppointments);
              const response = await UpdateAppointmentsAPI(id);
              if (response.ok) {
                alert("Transection Successfull");
                console.log(response.json());
              }
            }
          } catch (error) {
            console.error("Payment failed during handler:", error);
            throw error;
          }
        },
        theme: {
          color: "#008000",
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    } catch (error) {
      console.log("Error creating payment:", error);
      throw error;
    }
  };

  const PaymentHandler = async (id) => {
    try {
      const order_id = await get_paymnetID(AMOUNT);
      await create_payment(order_id, id);
    } catch (error) {
      console.log(error);
    }
  };

  const CancleHandler = async (id) => {
    const res = await DeleteAppointmentsAPI(id);
    if (res) {
      const updatedAppointments = AppointmentData.filter(
        (appointment) => appointment.id !== id
      );
      setAppointmentData(updatedAppointments);
    }
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mb-[1rem] bg-white shadow-md rounded-lg p-4 sm:p-8">
        <h2 className="text-[1.5rem] font-semibold mb-4">Appointment Status</h2>
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
              {AppointmentData.map(
                (appointment) =>
                  appointment.payment_status && (
                    <tr key={appointment.id} className="border-b">
                      <td className="p-2">{appointment.id}</td>
                      <td className="p-2">{appointment.patient_name}</td>
                      <td
                        className={`font-sm ${
                          status_color[appointment.verification_status]
                        } p-2`}
                      >
                        {status[appointment.verification_status]}
                      </td>
                      <td className="p-2">
                        <button
                          onClick={() => CancleHandler(appointment.id)}
                          className="text-red-800 text-sm border px-2 cursor-pointer pb-[0.15rem] rounded"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-4 sm:p-8">
        <h2 className="text-[1.5rem] font-semibold mb-4">Saved Appointment</h2>
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
              {AppointmentData.map(
                (appointment) =>
                  !appointment.payment_status && (
                    <tr key={appointment.id} className="border-b">
                      <td className="p-2">{appointment.id}</td>
                      <td className="p-2">{appointment.patient_name}</td>
                      <td className="p-2">
                        <button
                          onClick={() => PaymentHandler(appointment.id)}
                          className="text-[#118B50] text-sm border px-5 cursor-pointer pb-[0.15rem] rounded"
                        >
                          Pay
                        </button>
                      </td>
                      <td className="p-2">
                        <button
                          onClick={() => CancleHandler(appointment.id)}
                          className="text-red-800 text-sm border px-2 cursor-pointer pb-[0.15rem] rounded"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
