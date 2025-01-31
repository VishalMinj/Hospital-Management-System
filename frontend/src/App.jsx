import {
  Card,
  ConfirmationPage,
  ConfirmEmail,
  LoginForm,
  NavBar,
  SignUpForm,
} from "./Components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthenticationPage ,Home} from "./Pages";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="Home" element={<Home/>}/>
            <Route path="Auth" element={<AuthenticationPage />}>
              <Route
                path="Login"
                element={
                  <GoogleOAuthProvider
                    clientId={import.meta.env.VITE_CLIENT_ID}
                  >
                    <LoginForm />
                  </GoogleOAuthProvider>
                }
              />
              <Route
                path="Signup"
                element={
                  <GoogleOAuthProvider
                    clientId={import.meta.env.VITE_CLIENT_ID}
                  >
                    <SignUpForm />
                  </GoogleOAuthProvider>
                }
              />
              <Route path="Confirm" element={<ConfirmationPage />} />
              <Route path="Resend" element={<ConfirmEmail/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
