import { useReducer } from "react";
import AppRouter from "./app/router/AppRouter";
import { AuthContext } from "./app/views/store/contexts/AuthContext";
import { authReducer } from "./app/views/store/reducers/authReducers";
import Header from "./components/Header";
import Prueba from "./components/Prueba";

const init = () => {
  let sessionUser: any = sessionStorage.getItem("user");
  let user: any;
  if (!sessionUser) {
    user = sessionUser;
  } else {
    user.JSON.parse(sessionUser);
  }
  return user;
};

function App() {
  const [user, dispatchUser] = useReducer(
    authReducer,
    {},
    init
  );
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
