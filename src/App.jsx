import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Employers from "./pages/Employers";
import Payer from "./pages/Payer";
import Resources from "./pages/Resources";

function App() {
  const [count, setCount] = useState("0");

  const handleNavClick = (page) => {
    setCount(page);
  };
  return (
    <div>
      <nav>
        <button onClick={() => handleNavClick("home")}>Home</button>
        <button onClick={() => handleNavClick("payer")}>Payer</button>
        <button onClick={() => handleNavClick("employers")}>Employers</button>
      </nav>
      {count === "home" && <Home />}
      {count === "payer" && <Payer />}
      {count === "employers" && <Employers />}
    </div>
  );
}

export default App;
