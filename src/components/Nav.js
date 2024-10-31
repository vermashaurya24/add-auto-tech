import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';
import { HiOutlineCpuChip } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const NavLinks = ({lightMode, toggleMode}) => {
    return (
        <>
            <button onClick={toggleMode} className="flex items-center pr-4">{lightMode ? <MdLightMode size={28} /> : <MdDarkMode size={28} />}</button>
            <NavLink className="flex items-center pr-4" to="/">Home {<IoHomeOutline className="m-1" size={22} />}</NavLink>
            <NavLink className="flex items-center pr-4" to="/projects">Projects {<HiOutlineCpuChip className="m-1" size={25} />}</NavLink>
            <NavLink className="flex items-center pr-4" to="/contact">Contact {<MdContacts className="m-1" size={21} />}</NavLink>
            <NavLink className="flex items-center" to="/store">Store {<BsCart2 className="m-1" size={21} />}</NavLink>
        </>
    );
};

const Nav = ({mode, toggleMode}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lightMode = mode === "light";

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className="lg:w-1/3 flex justify-end pr-4">
                <div className="hidden w-auto md:flex justify-around pr-6">
                    <NavLinks lightMode={lightMode} toggleMode={toggleMode} />
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>{isMenuOpen? <FaTimes size={30} /> : <FaBarsStaggered size={30} />}</button>
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