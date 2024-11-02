import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

const NavLinks = ({ lightMode, toggleMode }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const activeClass = `flex items-center mr-4 border-b-2 ${lightMode ? "border-blue-500 text-blue-500": "border-purple-500 text-purple-500"}`;
  const hoverActiveClass = `flex items-center mr-4 ${lightMode ? "text-blue-500": "text-purple-500"}`;
  const inactiveClass = `flex items-center mr-4 text-gray-700 ${lightMode ? "hover:text-blue-500" : "hover:text-purple-500"}`;
  return (
    <>
      <button onClick={toggleMode} className="flex items-center pr-4">
        {lightMode ? <MdLightMode color="gray" size={28} /> : <MdDarkMode color="gray" size={28} />}
      </button>
      <NavLink className={({ isActive }) => (isActive ? activeClass : inactiveClass)} to="/">
        Home {<IoHomeOutline className="m-1" size={22} />}
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? activeClass : inactiveClass)} to="/projects">
        Projects {<HiOutlineCpuChip className="m-1" size={25} />}
      </NavLink>
      <div className="relative flex items-center" onMouseEnter={()=>setIsAboutOpen(true)} onMouseLeave={()=>setIsAboutOpen(false)}>
        <button className={`${isAboutOpen ? hoverActiveClass : inactiveClass}`}>
          About {<FaCaretDown className="m-1 mb-1" size={25} />}
        </button>
        {isAboutOpen && (
          <div className="absolute top-full mt-0 w-36 bg-white shadow-lg rounded-lg z-10">
            <NavLink
              to="/about-us"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/career"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              Career
            </NavLink>
          </div>
        )}
      </div>
      <NavLink className={({ isActive }) => (isActive ? activeClass : inactiveClass)} to="/store">
        Store {<BsCart2 className="m-1" size={21} />}
      </NavLink>
    </>
  );
};

const Nav = ({ mode, toggleMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lightMode = mode === "light";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="lg:w-1/3 flex justify-end pr-6">
        <div className="hidden w-auto lg:flex justify-around">
          <NavLinks lightMode={lightMode} toggleMode={toggleMode} />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBarsStaggered size={30} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col my-2 items-center basis-full">
          <NavLinks lightMode={lightMode} toggleMode={toggleMode} />
        </div>
      )}
    </>
  );
};

export default Nav;
