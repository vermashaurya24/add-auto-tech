import { useContext } from "react";

import Logo from "./Header/Logo";

import { ModeContext } from "../context/ModeContext";

const Footer = () => {
    const {mode} = useContext(ModeContext);
    const borderColor = mode === "light" ? `border-sky-500` : `border-purple-500`;
    const gradientFrom = mode === "light" ? `from-blue-300` : `from-violet-300`;
    return (
      <div
        className={`flex flex-col mx-3 bg-white border-solid border-2 ${borderColor} rounded-xl bg-gradient-to-r ${gradientFrom}`}
      >
        <div className="flex flex-col md:flex-row m-6 p-6 justify-evenly">
            <Logo />
            <div>
                <div className="text-sm">Our Policies</div>
            </div>
            <div>Company</div>
            <div>Social Media</div>
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