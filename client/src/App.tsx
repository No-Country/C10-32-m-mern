import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import AppointmentOptions from "./pages/appointment/AppointmentOptions";
import Home from "./pages/home/Home";
import NewAppoitment from "./pages/appointment/NewAppointment";
import { Profiler } from "react";
import ProgramedApointment from "./pages/appointment/ProgramedApointment";
import Specialists from "./pages/specialists/Specialists";
import Notifications from "./pages/notifications/Notifications";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <main className="pt-8 px-6">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/appointment"
            element={<AppointmentOptions />}
          />
          <Route
            path="/newAppointment"
            element={<NewAppoitment />}
          />
          <Route
            path="/programedAppointment"
            element={<ProgramedApointment />}
          />
          <Route
            path="/specialists"
            element={<Specialists />}
          />
          <Route
            path="/notifications"
            element={<Notifications />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
