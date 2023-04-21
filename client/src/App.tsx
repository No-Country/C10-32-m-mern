import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AppointmentOptions from "./pages/appointment/AppointmentOptions";
import Home from "./pages/home/Home";
import NewAppoitment from "./pages/appointment/NewAppointment";
import { Profiler } from "react";
import ProgramedApointment from "./pages/appointment/ProgramedApointment";
import Specialists from "./pages/specialists/Specialists";
import Notifications from "./pages/notifications/Notifications";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Search from "./pages/search/Search";
import ScheduledsShifts from "./pages/turnosagendados/ScheduledsShifts";
import Footer from "./components/Footer";
import Landing from "./pages/landing/Landing";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center w-100%">
      <Header />
      <main className="flex flex-col justify-center items-center w-screen mt-[12rem] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointment" element={<AppointmentOptions />} />
          <Route path="/newAppointment" element={<NewAppoitment />} />
          <Route path="/programedAppointment" element={<ProgramedApointment />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/specialists/:specialistId" element={<Specialists />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scheduledsshifts" element={<ScheduledsShifts />} />
          <Route path="/search/:category" element={<Search />} />
        </Routes>
      </main>
      <Footer className={""} />
    </div>
  );
};

export default App;
