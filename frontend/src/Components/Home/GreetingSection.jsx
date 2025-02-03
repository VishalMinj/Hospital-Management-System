import { HImage } from "..";

export default function GreetingSection() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-center bg-[#fff] w-[100%] sm:w-[auto]">
        <div className="flex flex-col flex-1 md:text-left w-full md:w-1/2 h-[100%] p-[1rem_3.5rem_2rem_3.5rem] sm:p-[1.5rem] justify-center items-start order-2 md:order-none ">
          <h2 className="text-[1.6rem] font-bold md:text-[2rem]">Greetings,</h2>
          <h3 className="text-[1.1rem] font-semibold md:text-[1.4rem]">
            Vishal Minj
          </h3>
          <p className="text-[0.6rem] mt-[0.3rem] md:text-[1rem]">
            We’re here cheering for your well-being!
            <br />
            Every small step you take toward a healthier life is a victory.
            <br />
            We’re here to support you along the way.
          </p>
          <button className="mt-[1rem] bg-[#118B50] text-white py-[0.5rem] px-[1rem] cursor-pointer rounded text-[1rem] md:py-[0.7rem] md:px-[1.8rem]">
            Set Appointment
          </button>
        </div>
        <div className="flex-1">
          <img
            src={HImage}
            alt="Hospital Illustration"
            className="w-[18rem] md:w-[20rem]"
          />
        </div>
      </section>
    </>
  );
}
