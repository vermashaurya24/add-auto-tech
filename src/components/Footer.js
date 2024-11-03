import { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "./Header/Logo";

import { FaWhatsapp } from "react-icons/fa";

import { ModeContext } from "../context/ModeContext";

const Footer = () => {
    const {mode} = useContext(ModeContext);
    const borderColor = mode === "light" ? `border-sky-500` : `border-purple-500`;
    const gradientFrom = mode === "light" ? `from-blue-300` : `from-violet-300`;
    const hoverClass = mode === "light" ? "block text-gray-700 hover:underline rounded-lg" : "block text-gray-700 hover:underline rounded-lg";
    return (
      <div
        className={`flex flex-col mx-3 bg-white border-solid border-2 ${borderColor} rounded-xl bg-gradient-to-r ${gradientFrom}`}
      >
        <div className="flex flex-col md:flex-row m-6 p-6 justify-evenly">
            <Logo />
            <div className="flex flex-col my-2">
                <div className="text-xl">Company</div>
                <Link to="/about-us" className={hoverClass}>
                    About Us
                </Link>
                <Link to="/contact-us" className={hoverClass}>
                    Contact Us
                </Link>
                <Link to="/career" className={hoverClass}>
                    Career
                </Link>
            </div>
            <div className="flex flex-col my-2">
                <div className="text-xl">Our Policies</div>
                <Link to="/privacy-policy" className={hoverClass}>
                    Privacy Policy
                </Link>
                <Link to="/terms-conditions" className={hoverClass}>
                    Terms and Conditions
                </Link>
                <Link to="/faq" className={hoverClass}>
                    FAQ
                </Link>
                <Link to="/store-policies" className={hoverClass}>
                    Shipping and Refund
                </Link>
            </div>
            <div className="flex flex-col my-2">
                <div className="text-xl">Social</div>
                <Link to="/privacy-policy" className={hoverClass}>
                    Facebook
                </Link>
                <Link to="/terms-conditions" className={hoverClass}>
                    LinkedIn
                </Link>
                <Link to="/faq" className={hoverClass}>
                    Youtube
                </Link>
                <div className="flex text-gray-700">
                    <FaWhatsapp size={20} className="mr-2" />
                    <div>(+91)7439705690</div>
                </div>
            </div>
        </div>
        <div className={`flex flex-col items-center md:flex-row justify-evenly text-sm ${mode === "light" ? "bg-blue-400" : "bg-violet-400"} rounded-lg`}>
          <div>Copyright: Addauto Technology Private Limited, 2021</div>
          <div>Das Vila, 17, Rajani Kanta Chowdhury Lane, Shibpur, Howrah-711103</div>
          <div className="text-xs">
            Website designed, built and maintained with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/shaurya-raj-verma/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${mode === "light" ? "text-blue-600" : "text-violet-600"} hover:underline`}
            >
              Shaurya
            </a>
          </div>
        </div>
      </div>
    );
};

export default Footer;