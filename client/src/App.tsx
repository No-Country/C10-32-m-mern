import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import AppointmentOptions from "./pages/appointment/AppointmentOptions";
import Home from "./pages/home/Home";
import LoginRegister from "./pages/login/LoginRegister";
import NewAppoitment from "./pages/appointment/NewAppointment";
import { Profiler } from "react";
import ProgramedApointment from "./pages/appointment/ProgramedApointment";
import Specialists from "./pages/specialists/Specialists";

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
            element={<AppointmentOptions/>}
          />
          <Route
            path="/newAppointment"
            element={<NewAppoitment/>}
          />
          <Route
            path="/programedAppointment"
            element={<ProgramedApointment/>}
          />
          <Route
            path="/specialists"
            element={<Specialists />}/>
        </Routes>

      </main>
    </div>
  );
};

export default App;
