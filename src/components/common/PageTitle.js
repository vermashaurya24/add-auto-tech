import { useContext } from "react";
import { ModeContext } from "../../context/ModeContext";

const PageTitle = (props) => {
    const {mode} = useContext(ModeContext);
    const lightMode = mode === "light";
    return (
        <div className={`text-4xl text-center ${lightMode ? "text-gray-700" : "text-gray-400"}`}>
            {props.children}
        </div>
    )
};

export default PageTitle;