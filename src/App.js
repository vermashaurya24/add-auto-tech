import { useContext } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import Projects from "./components/Projects";
import Store from "./components/Store";
import Footer from "./components/Footer";

import ModeProvider, { ModeContext } from "./context/ModeContext";

const App = () => {
  const { mode } = useContext(ModeContext)
  return (
    <div className={ mode === "dark" ? `h-full bg-slate-800` : `h-full bg-slate-400` }>
      <Header />
      <Outlet />
      <Footer />
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
        element: <Home />,
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

root.render(
  <ModeProvider>
    <RouterProvider router={appRouter} />
  </ModeProvider>
);
