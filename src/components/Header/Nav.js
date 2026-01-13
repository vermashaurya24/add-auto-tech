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
       
            <div
              className={`lg:hidden items-center absolute top-12 right-0 pt-20
          w-3/4 h-screen z-10 shadow-lg bg-white transition-transform 
          transition-all duration-300 ease-in-out
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
          <div className="hidden w-auto lg:flex justify-around">
            <NavLinks lightMode={lightMode} toggleMode={toggleMode} />
          </div>
        )}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {!isMenuOpen && (
              <FaBarsStaggered size={30} onClick={() => setIsMenuOpen(true)} />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
