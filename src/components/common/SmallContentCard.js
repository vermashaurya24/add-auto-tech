import { useContext } from "react";

import { ModeContext } from "../../context/ModeContext";

const SmallContentCard = (props) => {
    const {mode} = useContext(ModeContext);
    const lightMode = mode === "light";
    return (
        <div className={`m-2 p-2 ${lightMode ? "bg-slate-200" : "bg-slate-500"} h-fit rounded-2xl`}>
            <div className={`text-2xl border-b-2 ${lightMode && "border-gray-700"} font-bold text-center`}>{props.title}</div>
            <div className="m-4">{props.children}</div>
        </div>
    )
};

export default SmallContentCard;