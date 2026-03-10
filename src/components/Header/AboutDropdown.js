import { NavLink, useLocation } from "react-router-dom";

const About = ({ lightMode, openDropdown }) => {
  const hoverClass = `block px-4 py-2 text-gray-700 rounded text-sm font-semibold text-left md:text-center ${
    lightMode
      ? "hover:bg-blue-200  duration-200 ease-in-out"
      : " hover:bg-purple-200 duration-200 ease-in-out"
  }`;

  return (
    <div
      className={`absolute top-12 right-0 min-w-36
       bg-white dark:bg-gray-800 rounded-lg
        shadow-lg z-10 p-2 transition-all duration-200 ease-in-out
    
  `}
    >
      <NavLink to="/about-us" className={hoverClass} onClick={openDropdown}>
        About Us
      </NavLink>
      <NavLink to="/contact-us" className={hoverClass} onClick={openDropdown}>
        Contact Us
      </NavLink>
      <NavLink to="/career" className={hoverClass} onClick={openDropdown}>
        Career
      </NavLink>
    </div>
  );
};

export default About;
