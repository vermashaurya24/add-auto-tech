import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="mt-3 mx-3">
      <Header />
      <h1>Body Here</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
