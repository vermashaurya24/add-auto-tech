import { useContext } from "react";

import { ModeContext } from "../context/ModeContext";

import PageTitle from "./common/PageTitle";
import SmallContentCard from "./common/SmallContentCard";

const AboutUs = () => {
  const {mode} = useContext(ModeContext);
  const lightMode = mode === "light";
  return (
    <div className="mt-24 m-2 p-24">
      <div className={`text-8xl text-wrap ${lightMode ? "text-gray-700" : "text-gray-400"}`}>About Us</div>
      <div className={`mt-4 text-lg ${lightMode ? "text-gray-700" : "text-gray-200"}`}>
        <p>
          At ADDAUTO TECHNOLOGY PRIVATE LIMITED, we are proud to be part of
          India's transformative journey under the ‘Make In India’ initiative.
          Our mission is to spearhead a technological revolution in automation,
          empowering industries and individuals alike with innovative solutions
          that elevate everyday life.
    
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
