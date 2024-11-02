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
