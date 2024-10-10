import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <h1>Initial commit from react</h1>
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
