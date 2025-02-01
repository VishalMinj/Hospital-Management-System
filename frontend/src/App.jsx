import {
  // ConfirmationPage,
  ConfirmEmail,
  LoginForm,
  NavBar,
  SignUpForm,
} from "./Components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthenticationPage, Home } from "./Pages";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthRouteProtection, HomeRouteProtection } from "./routes";
import { AuthProvider } from "./Contexts";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Navigate replace to="/Home" />} />
              <Route element={<HomeRouteProtection />}>
                <Route path="Home" element={<Home />} />
              </Route>
              <Route element={<AuthRouteProtection />}>
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
                  <Route path="Resend" element={<ConfirmEmail />} />
                </Route>
                {/* <Route path="Confirm" element={<ConfirmationPage />} /> */}
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
