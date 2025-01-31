import { Outlet } from "react-router-dom";

export default function AuthenticationPage(params) {
  return <>
    <div className="h-[90dvh] w-[100%] bg-[#F6F6F4] grid place-items-center">
        <Outlet/>
    </div>
  </>;
}
