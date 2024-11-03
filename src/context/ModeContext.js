import { createContext, useState } from "react";

export const ModeContext = createContext({
    mode: "light"
});

const ModeProvider = (props) => {
    const [mode, setMode] = useState("light");
    const toggleMode = () => {
        setMode(prev=>prev==="light" ? "dark" : "light")
    }

    return (
        <ModeContext.Provider value={{mode, toggleMode}}>
            {props.children}
        </ModeContext.Provider>
    );
};

export default ModeProvider;