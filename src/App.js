import { createRoot } from "react-dom/client";

const App = () => {
    return (
        <h1>Initial commit from react</h1>
    );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);