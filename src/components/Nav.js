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

const NavLinks = ({ lightMode, toggleMode }) => {
  const activeClass = `flex items-center mr-4 border-b-2 ${lightMode ? "border-blue-500 text-blue-500": "border-purple-500 text-purple-500"}`;
  const inactiveClass = `flex items-center mr-4 text-gray-700 ${lightMode ? "hover:text-blue-500" : "hover:text-purple-500"}`;
  return (
    <>
      <button onClick={toggleMode} className="flex items-center pr-4">
        {lightMode ? <MdLightMode size={28} /> : <MdDarkMode size={28} />}
      </button>
      <NavLink className={({ isActive }) => (isActive ? activeClass : inactiveClass)} to="/">
        Home {<IoHomeOutline className="m-1" size={22} />}
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? activeClass : inactiveClass)} to="/projects">
        Projects {<HiOutlineCpuChip className="m-1" size={25} />}
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? activeClass : inactiveClass)} to="/about">
        About {<AiOutlineTeam className="m-1" size={23} />}
      </NavLink>
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
        <div className="hidden w-auto md:flex justify-around">
          <NavLinks lightMode={lightMode} toggleMode={toggleMode} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBarsStaggered size={30} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col my-2 items-center basis-full">
          <NavLinks lightMode={lightMode} toggleMode={toggleMode} />
        </div>
      )}
    </>
  );
};

export default Nav;
