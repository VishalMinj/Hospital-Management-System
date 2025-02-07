import { useState } from "react";
import { AppointmentAPI, complete_payment, get_paymnetID } from "../../utils";
import { useRazorpay } from "react-razorpay";
import { useNavigate } from "react-router-dom";

const AMOUNT = 499;

export default function Form() {
  const navigate = useNavigate();

  const create_payment = async (order_id, val) => {
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
              const isPaid = await AppointmentAPI(formData, val);
              if (isPaid) navigate("/CheckAppointment", { replace: true });
              else navigate("/MakeAppointments", { replace: true });
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

  const [formData, setFormData] = useState({
    PatientName: "",
    age: "",
    contact: "",
    gender: "",
    bloodGroups: "",
    reason: "",
    date: "",
    conditions: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "conditions") {
      setFormData({
        ...formData,
        conditions: checked
          ? [...formData.conditions, value]
          : formData.conditions.filter((c) => c !== value),
      });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const { Razorpay } = useRazorpay();
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.nativeEvent.submitter.value;

    const processPaymentAndAppointment = async () => {
      try {
        if (val === "pay") {
          const id = await get_paymnetID(AMOUNT);
          await create_payment(id, val);
        } else {
          await AppointmentAPI(formData, val);
          navigate("/CheckAppointment");
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    processPaymentAndAppointment();
  };

  return (
    <div className="max-w-2xl mx-auto px-[1.5rem] bg-white shadow-lg rounded-lg py-[3rem]">
      <h2 className="text-[1.7rem] font-bold mb-[1.3rem]">
        Book an Appointment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="PatientName">Patient Name</label>
        <input
          type="text"
          id="PatientName"
          name="PatientName"
          placeholder="Patient Name"
          onChange={handleChange}
          className="w-full p-2 border border-gray-400 rounded"
          required
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={handleChange}
          placeholder="Age"
          min={1}
          max={120}
          className="w-full p-2 border border-gray-400 rounded"
          required
        />

        <label htmlFor="contact">Contact Number</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          placeholder="Contact Number"
          minLength={10}
          maxLength={10}
          onChange={handleChange}
          className="w-full p-2 border border-gray-400 rounded"
          required
        />

        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          onChange={handleChange}
          className="w-full p-2 border border-gray-400 cursor-pointer rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>

        <label htmlFor="bloodGroups">Blood Group</label>
        <select
          id="bloodGroups"
          name="bloodGroups"
          onChange={handleChange}
          className="w-full p-2 border cursor-pointer border-gray-400 rounded"
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <label htmlFor="reason">Reason for Appointment</label>
        <textarea
          id="reason"
          name="reason"
          placeholder="Reason for Appointment"
          onChange={handleChange}
          rows={7}
          className="w-full p-2 border border-gray-400 rounded max-h-[250px] resize-none"
          required
        />

        <label htmlFor="date">Appointment Date</label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          className="w-full p-2 border border-gray-400 rounded"
          required
        />

        <label htmlFor="conditions">Existing Medical Conditions</label>
        <textarea
          id="conditions"
          name="conditions"
          placeholder="Existing medical conditions"
          onChange={handleChange}
          rows={7}
          className="w-full p-2 border border-gray-400 rounded max-h-[250px] resize-none"
        ></textarea>

        {/* <label htmlFor="payment">Payment Method</label>
        <select
          id="payment"
          name="payment"
          onChange={handleChange}
          className="w-full p-2 border cursor-pointer border-gray-400 rounded"
          required
        >
          <option value="">Select Payment Method</option>
          <option value="O">Online</option>
          <option value="C">Cash on Visit</option>
        </select> */}

        <label>
          <input
            type="checkbox"
            name="agree"
            onChange={handleChange}
            required
          />{" "}
          I agree to the Terms & Conditions
        </label>

        <div className="flex justify-items-stretch mt-[0.5rem] w-[100%] gap-[1.5rem]">
          <button
            value="save"
            type="submit"
            className=" text-[#118B50] cursor-pointer border-[0.1rem] py-[0.3rem] px-0 rounded flex-1 sm:flex-0 sm:px-[2.3rem]"
          >
            Save
          </button>
          <button
            value="pay"
            type="submit"
            className="bg-[#118B50] cursor-pointer text-white py-[0.3rem] rounded whitespace-nowrap flex-1 sm:flex-0 px-0 sm:px-[1.3rem]"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
}
