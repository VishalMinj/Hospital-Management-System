export default async function AppointmentAPI(formdata) {
    
    try {
        const url=`${import.meta.env.VITE_BACKEND_ENDPOINT}/records/appointments/`
        const response = await fetch(url, {
          method: "POST",
          headers: {
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
            payment_status: (formdata.action==="pay"?true:false),
          }),
        });

        if(!response.ok){
            const error=response.json();
            throw new Error(error)
        }
        const data=response.json();
        console.log(data);
        
        return data



        
    } catch (error) {
        console.log(error);
        throw error
        
        
    }
    
}