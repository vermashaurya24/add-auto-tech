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
    <div className={mode === "dark" && `mt-0 bg-slate-600`}>
      <Header mode={mode} toggleMode={toggleMode} />
      <Outlet />
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
