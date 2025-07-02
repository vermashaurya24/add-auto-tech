import { useContext } from "react";

import Nav from "./Nav";
import Logo from "./Logo";

import { ModeContext } from "../../context/ModeContext";
import { useState,useEffect } from "react";

const Header = () => {
  const {mode, toggleMode} = useContext(ModeContext);
  const borderColor = mode === "light" ? `border-sky-500` : `border-purple-500`;
  const gradientFrom = mode === "light" ? `from-blue-300` : `from-violet-300`;

  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsShrunk(true)
    } else {
      setIsShrunk(false)
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  return (
    <div
    
    //className={`flex justify-between text-lg items-center z-[20] mx-3 bg-white flex-wrap border-solid border-2 ${borderColor} rounded-xl bg-gradient-to-l ${gradientFrom}`}
    >
     {/** 
      <Nav mode={mode} toggleMode={toggleMode} />  */}
      <header  className={`fixed z-30 border-b px-4 py-2 bg-transparent backdrop-blur-sm transition-all duration-500 ease-in-out
    ${isShrunk ? 'top-0 left-0 right-0' : 'top-2 left-2 right-2'} rounded-lg`} 
    style={{
  backgroundImage: 'linear-gradient(120deg, rgba(1,1,15,0.4), rgba(1,1,15,0.4))',}}>
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center ">
      <div className="flex items-center  gap-3 group">
        <Logo />
       
      </div>
      <nav className="hidden md:flex gap-8 text-white font-medium mr-[10vw]">
        {[
          { href: `/projects`, label: "Projects" },
          { href: `/aboutus`, label: "About Us" }
        ].map((item, idx) => (
          <div key={`nav-element-${idx}`} className="relative flex flex-col items-center group cursor-pointer">
            <a href={item.href} className="transition-transform duration-300 group-hover:scale-105">
              {item.label}
            </a>
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </div>
        ))}
      </nav>
    </div>
  </header>
    </div>
  );
};

export default Header;
