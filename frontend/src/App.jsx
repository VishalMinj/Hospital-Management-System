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
  ReceptionistDashboard,
  DoctorsDashBoard,
  AppointmentRequest,
  BedAllotment,
  DoctorsList
} from "./Pages";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  AuthRouteProtection,
  HomeRouteProtection,
  ReceptionRouteProtection,
  DoctorRouteProtection,
  PatientRouteProtection,
} from "./routes";
import { AuthProvider, UserCredentialsProvider } from "./Contexts";

function App() {
  return (
    <>
      <UserCredentialsProvider>
        <AuthProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomeRouteProtection />}>
                {/* Patient section */}
                <Route element={<PatientRouteProtection />}>
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
                  <Route
                    path="PrescriptionsPage"
                    element={<PrescriptionsPage />}
                  />
                  <Route path="Invoice" element={<InvoiceRecordPage />} />
                </Route>
                {/* Patient section */}

                {/* Reception section */}
                <Route element={<ReceptionRouteProtection />}>
                  <Route path="Reception" element={<ReceptionistDashboard />}>
                    <Route
                      path="Appointments"
                      element={<AppointmentRequest />}
                    />
                    <Route path="Bedallotment" element={<BedAllotment />} />
                    <Route path="DoctorsList" element={<DoctorsList />} />
                  </Route>
                </Route>
                {/* Reception section */}

                {/* Doctor section */}
                <Route element={<DoctorRouteProtection />}>
                  <Route
                    path="DoctorsDashboard"
                    element={<DoctorsDashBoard />}
                  />
                </Route>
                {/* Doctor section */}
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
      </UserCredentialsProvider>
    </>
  );
}

export default App;
