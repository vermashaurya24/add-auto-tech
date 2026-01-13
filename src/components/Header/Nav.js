import { useState } from "react";

import NavLinks from "./NavLinks";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Nav = ({ mode, toggleMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lightMode = mode === "light";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className=" flex lg:w-1/3 w-full justify-end pr-6 relative">
         {isMenuOpen ? (
        <div className="lg:hidden flex flex-col my-2 items-center absolute top-10 right-0  w-3/4 h-screen bg-white">
          <NavLinks lightMode={lightMode} toggleMode={toggleMode} />
          <FaTimes className="text-red-500" size={30} onClick={()=>setIsMenuOpen(false)}/>
        </div>
      ) : (
        <div className="hidden w-auto lg:flex justify-around">
          <NavLinks lightMode={lightMode} toggleMode={toggleMode} />
      
        </div>
      )}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {!isMenuOpen && <FaBarsStaggered size={30} />}
          </button>
        </div>
      </div>
   
    </>
  );
};

export default Nav;
