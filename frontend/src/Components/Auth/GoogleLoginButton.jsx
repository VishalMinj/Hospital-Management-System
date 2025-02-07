import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginAPI, UseDetailsAPI } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useAuthContext, useUserContext } from "../../Contexts";

// eslint-disable-next-line react/prop-types
export default function GoogleLoginButton({ text = "Sign Up With Google" }) {
  const navigate = useNavigate();
  const { setAuthenticated } = useAuthContext();
  const { setuserid, setusername, setfullname, setrole } = useUserContext();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const code = tokenResponse.code;
      await GoogleLoginAPI(code);
      const userDetails = await UseDetailsAPI();
      setuserid(userDetails.id);
      setusername(userDetails.username);
      setfullname(userDetails.full_name);
      setrole(userDetails.role);
      setAuthenticated(true);
      navigate("/Home");
    },
    flow: "auth-code",
    onError: () => console.log("Login Failed"),
  });

  return (
    <div>
      <button
        onClick={() => login()}
        className="w-full border py-[0.5rem] rounded-[0.5rem] cursor-pointer"
      >
        {text}
      </button>
    </div>
  );
}
