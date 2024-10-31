import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/store">Store</NavLink>
        </div>
    );
};

export default Nav;