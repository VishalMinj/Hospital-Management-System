import { Link, useNavigate } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";
import { useRef } from "react";
import { LoginAPI } from "../../utils";
import { useAuthContext } from "../../Contexts";

export default function LoginForm() {
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const { setAuthenticated } = useAuthContext();
  const LoginHandler = (e) => {
    e.preventDefault();
    LoginAPI(username.current.value, password.current.value)
      .then(() => {
        username.current.value = "";
        password.current.value = "";
        setAuthenticated(true)
        navigate("/Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form
        className="flex flex-col w-[86%] border bg-[#FFFFFF] rounded-[1rem] py-[2.5rem] px-[1.25rem] gap-[1rem] pb-[3rem] max-w-[22.5rem]"
        onSubmit={LoginHandler}
      >
        <h2 className="text-[2rem] font-semibold text-gray-900">Login</h2>
        <div>
          <label className="text-gray-700 font-medium mb-[0.4rem]">
            Username
          </label>
          <input
            ref={username}
            type="text"
            className="w-full px-[0.75rem] py-[0.5rem] border rounded-[0.5rem] outline-none"
          />
        </div>
        <div>
          <label className=" text-gray-700 font-medium mb-[0.4rem]">
            Password
          </label>
          <input
            ref={password}
            type="password"
            className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem]"
          />
        </div>
        <a href="#" className="underline text-[#06402B]">
          Forgot password?
        </a>
        <button
          type="submit"
          className="w-full cursor-pointer bg-[#118B50] text-white py-[0.5rem] rounded-[0.5rem] hover:bg-[#0e7a45] transition text-[1rem] sm:text-[0.875rem]"
        >
          Log in
        </button>
        <p className="text-gray-600 text-center underline cursor-default">
          Don’t have an account?{" "}
          <Link to="/Auth/Signup" className="text-[#06402B] font-semibold">
            Sign up
          </Link>
        </p>
        <GoogleLoginButton text="Login with Google" />
      </form>
    </>
  );
}
