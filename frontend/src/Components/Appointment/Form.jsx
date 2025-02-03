import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    PatientName: "",
    age: "",
    contact: "",
    gender: "",
    bloodGroups: "",
    reason: "",
    date: "",
    conditions: "",
    payment: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto px-[1.5rem] bg-white shadow-lg rounded-lg py-[3rem]">
      <h2 className="text-[1.7rem] font-bold mb-[1.3rem]">Book an Appointment</h2>
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
        ></textarea>

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

        <label htmlFor="payment">Payment Method</label>
        <select
          id="payment"
          name="payment"
          onChange={handleChange}
          className="w-full p-2 border cursor-pointer border-gray-400 rounded"
          required
        >
          <option value="">Select Payment Method</option>
          <option value="Online">Online</option>
          <option value="Cash on Visit">Cash on Visit</option>
        </select>

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
            type="submit"
            className=" text-[#118B50] cursor-pointer border-[0.1rem] py-[0.3rem] px-0 rounded flex-1 sm:flex-0 sm:px-[2.3rem]"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-[#118B50] cursor-pointer text-white py-[0.3rem] rounded flex-1 sm:flex-0 px-0 sm:px-[1.3rem]"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
