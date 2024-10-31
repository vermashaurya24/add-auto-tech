import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';
import { HiOutlineCpuChip } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { MdContacts } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

const NavLinks = () => {
    return (
        <>
            <NavLink className="flex items-center pr-2 lg:pr-0" to="/">Home {<IoHomeOutline className="m-1" size={22} />}</NavLink>
            <NavLink className="flex items-center pr-2 lg:pr-0" to="/projects">Projects {<HiOutlineCpuChip className="m-1" size={25} />}</NavLink>
            <NavLink className="flex items-center pr-2 lg:pr-0" to="/contact">Contact {<MdContacts className="m-1" size={21} />}</NavLink>
            <NavLink className="flex items-center pr-2 lg:pr-0" to="/store">Store {<BsCart2 className="m-1" size={21} />}</NavLink>
        </>
    )
}

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <div className="w-1/2 lg:w-1/3 flex justify-end">
                <div className="hidden w-full md:flex justify-around pr-6">
                    <NavLinks />
                </div>
                <div className="md:hidden w-1/5">
                    <button onClick={toggleMenu}>{isMenuOpen? <FaTimes size={30} /> : <FaBarsStaggered size={30} />}</button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col my-2 items-center basis-full">
                    <NavLinks />
                </div>
            )}
        </>
    );
};

export default Nav;