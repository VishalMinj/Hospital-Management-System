import { getAccessToken } from "../auth/tokenUtils";

export async function AppointmentAPI(formdata, val) {
  try {
    const url = `${
      import.meta.env.VITE_BACKEND_ENDPOINT
    }/records/appointments/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patient_name: formdata.PatientName,
        age: formdata.age,
        phone_number: formdata.contact,
        gender: formdata.gender,
        blood_group: formdata.bloodGroups,
        reason: formdata.reason,
        prefered_visit_date: formdata.date,
        past_medical_history: formdata.conditions,
        payment_method: formdata.payment,
        payment_status: val === "pay" ? true : false,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error);
    }
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const GetAppointmentsAPI = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_ENDPOINT}/records/appointments/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken()}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const UpdateAppointmentsAPI = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_ENDPOINT}/records/appointments/${id}/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify({
          payment_status:true
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const DeleteAppointmentsAPI = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_ENDPOINT}/records/appointments/${id}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken()}`,
        }
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    
    return true;
  } catch (error) {
    console.log(error);
  }
};
