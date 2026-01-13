import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AboutDropdown from "./AboutDropdown";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

const NavLinks = ({ lightMode, toggleMode }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const dropdownRef = useRef(null);

  const activeClass = `flex items-center mr-4 border-b-2 text-xl ${
    lightMode
      ? "border-blue-500 text-blue-500"
      : "border-purple-500 text-[#383073]"
  }`;
  const hoverActiveClass = `flex items-center mr-4 text-xl ${
    lightMode ? "text-blue-500" : "text-purple-500"
  }`;
  const inactiveClass = `flex items-center mr-4 text-gray-700 text-xl 
  bg-gray-300 rounded-xl p-2 px-4 md:px-2 ${
    lightMode ? "hover:text-blue-500" : "hover:text-purple-500"
  }`;

  const openDropdown = () => setIsAboutOpen(!isAboutOpen);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col space-y-6  h-screen lg:flex-row md:h-auto items-center">
      <button onClick={toggleMode} className="flex items-center pr-4">
        {lightMode ? <MdLightMode color="gray" size={28} /> : <MdDarkMode color="gray" size={28} />}
      </button>

      <NavLink className={({ isActive }) => (isActive ? activeClass : inactiveClass)} to="/">
        Home <IoHomeOutline className="m-1" size={22} />
      </NavLink>

      <NavLink className={({ isActive }) => (isActive ? activeClass : inactiveClass)} to="/projects">
        Projects <HiOutlineCpuChip className="m-1" size={25} />
      </NavLink>

      <div className="relative flex items-center" ref={dropdownRef}>
        <button className={`${isAboutOpen ? hoverActiveClass : inactiveClass}`} onClick={openDropdown}>
          About <FaCaretDown className="m-1 mb-1" size={25} />
        </button>

        {isAboutOpen && (
          <AboutDropdown
            isAboutOpen={isAboutOpen}
            setIsAboutOpen={setIsAboutOpen}
            openDropdown={openDropdown}
            lightMode={lightMode}
          />
        )}
      </div>

      <NavLink className={({ isActive }) => (isActive ? activeClass : inactiveClass)} to="/store">
        Store <BsCart2 className="m-1" size={21} />
      </NavLink>
    </div>
  );
};

export default NavLinks;
