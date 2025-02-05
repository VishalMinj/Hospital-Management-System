import AppointmentStatus from "../Components/AppointmentStatus/AppointmentStatus";
import PaymentStatus from "../Components/AppointmentStatus/PaymentStatus";


export default function UpcomingAppointmentsPage() {
  return (
    <>
      <div className="my-[1rem] px-[0.65rem]">
        <AppointmentStatus/>
        <PaymentStatus/>
      </div>
    </>
  );
}
