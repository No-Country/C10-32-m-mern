import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import LoginRegister from "./pages/login/LoginRegister";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login-register"
          element={<LoginRegister />}
        />
      </Routes>
    </div>
  );
};

export default App;
