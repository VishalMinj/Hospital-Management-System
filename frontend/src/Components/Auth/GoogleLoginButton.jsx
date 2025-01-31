import { useGoogleLogin,GoogleOAuthProvider } from "@react-oauth/google";

export default function GoogleLoginButton({text="Sign Up With Google"}) {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    flow:'auth-code',
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
