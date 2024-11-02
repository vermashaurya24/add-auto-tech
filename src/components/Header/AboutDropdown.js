import { NavLink } from "react-router-dom";

const About = ({ lightMode }) => {
  const hoverClass = lightMode ? "block px-4 py-2 text-gray-700 hover:bg-blue-200 rounded-lg" : "block px-4 py-2 text-gray-700 hover:bg-purple-200 rounded-lg";
  return (
    <div className="absolute top-full mt-0 w-36 bg-white shadow-lg rounded-lg z-10">
      <NavLink to="/about-us" className={hoverClass}>
        About Us
      </NavLink>
      <NavLink to="/contact-us" className={hoverClass}>
        Contact Us
      </NavLink>
      <NavLink to="/career" className={hoverClass}>
        Career
      </NavLink>
    </div>
  );
};

export default About;
