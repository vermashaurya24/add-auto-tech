import { useContext } from "react";

import Nav from "./Nav";
import Logo from "./Logo";

import { ModeContext } from "../../context/ModeContext";

const Header = () => {
  const {mode, toggleMode} = useContext(ModeContext);
  //const borderColor = mode === "light" ? `border-sky-500` : `border-purple-500`;
  const gradientFrom = mode === "light" ? `from-blue-300 to-[#5366C2]` : `from-violet-200 to-[#AD27F5]`;
  return (
    <div className={`fixed top-0 z-50 w-full flex justify-between text-lg items-center py-2 bg-gradient-to-l ${gradientFrom}`}>
      <Logo />
      <Nav mode={mode} toggleMode={toggleMode} />
    </div>
  );
};

export default Header;
