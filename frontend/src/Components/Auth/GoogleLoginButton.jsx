import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginAPI } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Contexts";

// eslint-disable-next-line react/prop-types
export default function GoogleLoginButton({ text = "Sign Up With Google" }) {
  const navigate = useNavigate();
  const { setAuthenticated } = useAuthContext();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const code = tokenResponse.code;
      GoogleLoginAPI(code)
        .then(() => {
          setAuthenticated(true);
          navigate("/Home");
        })
        .catch((error) => console.log(error));
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
