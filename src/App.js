import { useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import Projects from "./components/Projects";
import Store from "./components/Store";

const App = () => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode(prev=>prev==="light" ? "dark" : "light")
  }

  return (
    <div className={mode === "dark" ? `h-dvh bg-slate-800` : `h-dvh bg-slate-400`}>
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
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/career",
        element: <Careers />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
