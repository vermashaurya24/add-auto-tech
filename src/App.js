import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode(prev=>prev==="light" ? "dark" : "light")
  }

  return (
    <div className="mt-3 mx-3">
      <Header mode={mode} toggleMode={toggleMode} />
      <h1>Body Here</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
