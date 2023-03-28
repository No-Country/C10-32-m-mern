import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/LogIn";
import Register from "./components/Register";

function App() {
  return (
    <div id="App">
      <Header/>
        <main className="p-6">
        <Home/>

        </main>
    </div>

  )
}

export default App;
