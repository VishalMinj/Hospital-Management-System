import { Logo } from "../index.js"
import { useAuthContext } from "../../Contexts/useAuthContext.js";
import { LogoutAPI,ClearToken } from "../../utils/index.js";

export default function NavBar() {

  const { setAuthenticated } = useAuthContext();

  const LogoutHandler=()=>{
    LogoutAPI().then(()=>{
      ClearToken()
      setAuthenticated(false)
    })

  }

  const {Authenticated}=useAuthContext()
  return (
    <header className="flex justify-between items-center bg-[#118B50] text-white w-full h-[10dvh] px-[1rem] md:px-[8rem]">
      <img src={Logo} alt="Hope Hospital Logo" className="h-[2.5rem]" />
      {Authenticated && (

      <nav className="flex items-center gap-[0.75rem] md:gap-[1.5rem]">
        <a href="#"
          className="w-[2rem] h-[2rem] bg-white rounded-full flex justify-center items-center text-green-600 font-bold"
        ></a>
        <nav className="text-white underline hidden md:block">
          <a  href="#">Yugank</a>
        </nav>
        <button className="text-white underline hidden md:block">
          <a onClick={LogoutHandler}>Logout</a>
        </button>
      </nav>
      )} 
    </header>
  );
}
