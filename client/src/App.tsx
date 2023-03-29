import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";
import Home from "./pages/home/Home";
import LoginRegister from "./pages/login/LoginRegister";
import { ProtectedRoute } from "./routes/protectedRouted/ProtectedRoutes";

const App = () => {
  return (
    <div>
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
