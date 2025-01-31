import { Link } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";

export default function SignUpForm() {
  return (
    <>
      <form className="flex flex-col w-[86%] bg-[#FFFFFF] border rounded-[1rem] py-[2.5rem] px-[1.25rem] gap-[1rem] pb-[3rem] max-w-[22.5rem]">
        <h2 className="text-[2rem] font-semibold text-gray-900">SignUp</h2>
        <div>
          <label className="text-gray-700 font-medium mb-[0.5rem] text-[1rem] sm:text-[0.875rem]">
            Email
          </label>
          <input
            type="text"
            className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem] "
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium text-[1rem] sm:text-[0.875rem]">
            Password
          </label>
          <input
            type="password"
            className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem] "
          />
        </div>

        <div>
          <label className="text-gray-700 font-medium text-[1rem] sm:text-[0.875rem]">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem]"
          />
        </div>

        <Link
          to="/auth/Resend"
          className="underline mt-[0.65rem] text-[#06402B] font-[400] sm:text-[0.875rem]"
        >
          Resend Confirm email?
        </Link>

        <Link
          to="/auth/confirm"
          type="submit"
          className="w-full bg-[#118B50] text-white py-[0.5rem] rounded-[0.5rem] hover:bg-[#0e7a45] transition text-[1rem] sm:text-[0.875rem] text-center"
        >
          Sign Up
        </Link>

        <p className="text-gray-700 underline text-center text-[1rem] sm:text-[0.875rem] cursor-default">
          Already have an account?{" "}
          <Link
            to="/Auth/Login"
            className="text-[#06402B] text-[0.9rem] font-semibold"
          >
            Login
          </Link>
        </p>

        <GoogleLoginButton text="Continue with Google" />
      </form>
    </>
  );
}
