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
    
      <div className=" flex w-screen justify-end pr-6 relative">
        {isMenuOpen ? (
       
            <div
              className={`items-center absolute top-[3.8rem] right-0 pt-20
         h-screen w-full z-10 shadow-lg rounded transition-all duration-200 ease-in md:hidden 
           ${mode==="light"?"bg-gradient-to-b from-blue-300 to-[#5366C2]":"bg-violet-300"}`}
            >
              <NavLinks lightMode={lightMode} toggleMode={toggleMode} />
           <FaTimes
              className="text-gray-600 absolute top-2 right-2"
              size={30}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        ) : (
          <div className="hidden md:w-auto md:flex md:justify-around">
            <NavLinks lightMode={lightMode} toggleMode={toggleMode} />
          </div>
        )}
        <div className=" md:hidden">
          <button onClick={toggleMenu}>
            {!isMenuOpen && (
              <FaBarsStaggered size={30} onClick={() => setIsMenuOpen(true)} />
            )}
          </button>
        </div>
      </div>
   
  );
};

export default Nav;
