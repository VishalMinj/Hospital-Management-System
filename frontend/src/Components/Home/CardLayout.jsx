import {
  InvoiceRecord,
  MakeAppointment,
  Prescriptions,
  UpcomingAppointments,
} from "../index.js";
import { Card } from "../index.js";

export default function CardLayout() {
  return (
    <>
      <div className="flex flex-col mt-[1rem] p-[1rem] gap-[2rem] sm:flex-row sm:gap-[1rem]  pb-[2.5rem] sm:pb-[0rem]">
        <Card imageSrc={MakeAppointment} heading={"Make Appointments"} />
        <Card
          imageSrc={UpcomingAppointments}
          heading={"Upcoming Appointments"}
        />
        <Card imageSrc={Prescriptions} heading={"Prescriptions"} />
        <Card imageSrc={InvoiceRecord} heading={"Invoice Record"} />
      </div>
    </>
  );
}
