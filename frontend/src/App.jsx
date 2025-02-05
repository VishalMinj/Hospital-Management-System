import {
  ConfirmEmail,
  LoginForm,
  NavBar,
  SignUpForm,
  Footer,
} from "./Components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  AuthenticationPage,
  HomePage,
  InvoiceRecordPage,
  MakeAppointmentsPage,
  PrescriptionsPage,
  UpcomingAppointmentsPage,
} from "./Pages";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthRouteProtection, HomeRouteProtection } from "./routes";
import { AuthProvider } from "./Contexts";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeRouteProtection />}>
              <Route index element={<Navigate replace to="/Home" />} />
              <Route path="Home" element={<HomePage />} />
              <Route
                path="MakeAppointments"
                element={<MakeAppointmentsPage />}
              />
              <Route
                path="CheckAppointment"
                element={<UpcomingAppointmentsPage />}
              />
              <Route path="PrescriptionsPage" element={<PrescriptionsPage />} />
              <Route path="Invoice" element={<InvoiceRecordPage />} />
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
              <Route path="Confirm" element={<InvoiceRecordPage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
