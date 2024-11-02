import { useContext } from "react";

import Nav from "./Nav";
import Logo from "./Logo";

import { ModeContext } from "../../context/ModeContext";

const Header = () => {
  const {mode, toggleMode} = useContext(ModeContext);
  const borderColor = mode === "light" ? `border-sky-500` : `border-purple-500`;
  const gradientFrom = mode === "light" ? `from-blue-300` : `from-violet-300`;
  return (
    <div className={`flex justify-between text-lg items-center z-[20] mx-3 bg-white flex-wrap border-solid border-2 ${borderColor} rounded-xl bg-gradient-to-l ${gradientFrom}`}>
      <Logo />
      <Nav mode={mode} toggleMode={toggleMode} />
    </div>
  );
};

export default Header;
