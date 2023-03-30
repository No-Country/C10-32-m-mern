import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import AppoinmentOptions from "./pages/appointment/AppointmentOptions";
import Home from "./pages/home/Home";
import LoginRegister from "./pages/login/LoginRegister";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <main className="pt-8 ">
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
        </Routes>

      </main>
    </div>
  );
};

export default App;
