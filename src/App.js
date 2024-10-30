import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <h1>Body Here</h1>
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
