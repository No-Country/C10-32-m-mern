import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import AppoinmentOptions from "./pages/appointment/AppointmentOptions";
import Home from "./pages/home/Home";
import LoginRegister from "./pages/login/LoginRegister";
import NewAppoitment from "./pages/appointment/NewAppointment";
import { Profiler } from "react";
import ProgramedApointment from "./pages/appointment/ProgramedApointment";

const App = () => {
  return (
    <div className=" flex-col items-center justify-center">
      <Header />
      <main className="pt-8 px-6">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login-register"
            element={<LoginRegister />}
          />
          <Route
            path="/appointment"
            element={<AppoinmentOptions/>}
          />
          <Route
            path="/newAppointment"
            element={<NewAppoitment/>}
          />
          <Route
            path="/programedAppointment"
            element={<ProgramedApointment/>}
          />
        </Routes>

      </main>
    </div>
  );
};

export default App;
