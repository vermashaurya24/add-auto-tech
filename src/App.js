import { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
