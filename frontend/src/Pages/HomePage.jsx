import { CardLayout,GreetingSection } from "../Components";

export default function HomePage() {
  return (
    <><div className="min-h-[90dvh] px-[0rem] mt-[0rem] sm:px-[8rem] sm:mt-[2rem]">
      
        <div className=" flex justify-center rounded-[0.3rem]">
            <GreetingSection />
        </div>
        <div className=" flex justify-around rounded-[0.3rem]">
            <CardLayout />
        </div>
        
    </div>
    </>
  );
}
