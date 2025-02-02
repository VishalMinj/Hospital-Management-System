export default function Card({ imageSrc, heading }) {
  return (
    <>
      <div className="max-w-[17rem] sm:max-w-[11.5rem] h-[auto] bg-[#FFFFFF] cursor-pointer shadow-[0_.5rem_1rem_.25rem_rgba(0,0,0,0.05)]  rounded overflow-hidden flex flex-col">
        <img src={imageSrc} alt="Card Image" className="w-full" />  
        <h2 className="text-center font-bold pb-[0.4rem] text-[0.9rem] ">{heading}</h2>
      </div>
    </>
  );
}
