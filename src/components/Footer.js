import { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "./Header/Logo";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp,FaLinkedin, FaYoutube } from "react-icons/fa";

import { SiGmail } from "react-icons/si";

import { ModeContext } from "../context/ModeContext";

const Footer = () => {
  const { mode } = useContext(ModeContext);
  const borderColor = mode === "light" ? `border-sky-500` : `border-purple-500`;
  const gradientFrom = mode === "light" ? `from-blue-300` : `from-violet-300`;
  const hoverClass = " flex items-center font-bold text-gray-700 hover:underline rounded-lg hover:transition hover:scale-105 transition-transform duration-200";
  return (
    <div
      className={`flex flex-col bg-white 
            border-solid border-2 ${borderColor}  bg-gradient-to-r ${gradientFrom}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:justify-items-center gap-6 m-6">
        <div>
          <Logo />
        </div>
        <div className="flex flex-col my-2  min-w-[200px] ">
          <div className={`text-2xl font-semibold  ${mode === "light" ? "text-blue-700" : "text-violet-700"}`}>Company</div>
          <Link to="/about-us" className={hoverClass}>
            About Us
          </Link>
          <Link to="/contact-us" className={hoverClass}>
            Contact Us
          </Link>
          <Link to="/career" className={hoverClass}>
            Career
          </Link>
          <div className="flex text-gray-700 items-center">
            <SiGmail size={17} className="mr-2" />
            <div>addautotech@gmail.com</div>
          </div>
        </div>
        <div className="flex flex-col my-2  min-w-[200px]">
          <div className={`text-2xl font-semibold  ${mode === "light" ? "text-blue-700" : "text-violet-700"}`}>Our Policies</div>
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
        <div className="flex flex-col my-2  min-w-[200px]">
          <div className={`text-2xl font-semibold  ${mode === "light" ? "text-blue-700" : "text-violet-700"}`}>Social</div>
          <Link
            to="https://www.facebook.com/addautotech"
            className={hoverClass}
            target="_blank"
            rel="noopener noreferrer"
          > 
          <FaFacebook size={20} className="mr-2" />
            Facebook
          </Link>
          <Link
            to="https://www.linkedin.com/company/addauto-technology-private-limited/"
            className={hoverClass}
            target="_blank"
            rel="noopener noreferrer"
          >
             <FaLinkedin size={20} className="mr-2" />
            LinkedIn
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCg5JgeuNmkPAq2R35UiccXg"
            className={hoverClass}
            target="_blank"
            rel="noopener noreferrer"
          >
             <FaYoutube size={20} className="mr-2" />
            Youtube
          </Link>
          <div className="flex text-gray-700 items-center">
            <FaWhatsapp size={20} className="mr-2" />
            <div>(+91)7439705690</div>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col px-4 items-center md:flex-row justify-between gap-4 text-sm ${mode === "light" ? "bg-blue-400" : "bg-violet-400"} py-3`}
      >
        <p className="text-md">
          Copyright©️: Addauto Technology Private Limited, 2021
        </p>
        <p>Das Vila, 17, Rajani Kanta Chowdhury Lane, Shibpur, Howrah-711103</p>
        <p className="text-xs">
          Website designed, built and maintained with ❤️ by{" "}
          <Link
            to="https://www.linkedin.com/in/shaurya-raj-verma/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${mode === "light" ? "text-blue-600" : "text-violet-600"} hover:underline`}
          >
            Shaurya
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
