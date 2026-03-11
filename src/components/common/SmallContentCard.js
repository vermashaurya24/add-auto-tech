import { useContext } from "react";

import { ModeContext } from "../../context/ModeContext";

const SmallContentCard = (props) => {
    const {mode} = useContext(ModeContext);
    const lightMode = mode === "light";
    return ( 
        <div className={`h-fit group lg:max-w-xl xl:max-w-3xl ease-in lg:transition-all lg:duration-200 lg:hover:max-w-4xl 
        lg:ml-auto p-7 ${lightMode ? "bg-slate-200" : "bg-slate-500"} rounded-2xl`}>
            <div className={`text-5xl ${lightMode && "border-gray-700"} `}>{props.title}</div>
            <div className="m-4 max-w-xl  ml-auto lg:hidden lg:group-hover:block">{props.children}</div>
        </div>
    )
};

export default SmallContentCard;