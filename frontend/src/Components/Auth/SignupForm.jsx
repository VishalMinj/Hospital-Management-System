import { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";
import { SignupAPI } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");

  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (step === 2) {
      await SignupAPI(
        username,
        email,
        password1,
        password2,
        first_name,
        last_name
      );
      navigate("/Auth/Login");
    } else {
      setStep(step + 1);
    }
  } catch (error) {
    for (let [field, message] of Object.entries(error)) {
      console.log(`Field: ${field}, Error: ${message}`);
    }
  }
};


  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <form
      className="relative flex flex-col w-[86%] bg-[#FFFFFF] border rounded-[1rem] py-[2.5rem] px-[1.25rem] gap-[1rem] pb-[3rem] max-w-[22.5rem]"
      onSubmit={handleSubmit}
    >
      <h2 className="text-[2rem] font-semibold text-gray-900">SignUp</h2>
      {step === 2 && (
        <button
          type="button"
          onClick={handleBack}
          className="absolute top-3 left-4.5 text-[#06402B] font-semibold  text-[1.25rem] sm:text-[1rem] hover:text-[#118B50] hover:underline transition"
        >
          ← Back
        </button>
      )}

      {step === 1 && (
        <>
          <div>
            <label className="text-gray-700 font-medium mb-[0.5rem] text-[1rem] sm:text-[0.875rem]">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e)=> setemail(e.target.value)}
              className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem]"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium text-[1rem] sm:text-[0.875rem]">
              Password
            </label>
            <input
              type="password"
              name="password1"
              value={password1}
              onChange={e=>setpassword1(e.target.value)}
              className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem]"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium text-[1rem] sm:text-[0.875rem]">
              Confirm Password
            </label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={e=>setpassword2(e.target.value)}
              className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem]"
            />
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <label className="text-gray-700 font-medium mb-[0.5rem] text-[1rem] sm:text-[0.875rem]">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={e=>setusername(e.target.value)}
              className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem]"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-[0.5rem] text-[1rem] sm:text-[0.875rem]">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={first_name}
              onChange={e=>setfirst_name(e.target.value)}
              className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem]"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium mb-[0.5rem] text-[1rem] sm:text-[0.875rem]">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={last_name}
              onChange={e=>setlast_name(e.target.value)}
              className="w-full px-[0.75rem] py-[0.5rem] outline-none border rounded-[0.5rem]"
            />
          </div>
        </>
      )}

      <Link
        to="/auth/Resend"
        className="underline mt-[0.65rem] text-[#06402B] font-[400] sm:text-[0.875rem]"
      >
        Resend Confirm email?
      </Link>
      {step === 1 ? (
        <button
          type="submit"
          className="w-full bg-[#118B50] text-white py-[0.5rem] rounded-[0.5rem] hover:bg-[#0e7a45] transition text-[1rem] sm:text-[0.875rem] text-center"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          className="w-full bg-[#118B50] text-white py-[0.5rem] rounded-[0.5rem] hover:bg-[#0e7a45] transition text-[1rem] sm:text-[0.875rem] text-center"
        >
          Sign Up
        </button>
      )}

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
  );
}
