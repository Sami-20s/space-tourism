import React, { useContext, useState } from "react";
import { ContextTypes } from "../types/context";
import { navLinks } from "./navList/navList";
import { planetsList } from "./planetsList/planetsList";

const ContextApp: ContextTypes = React.createContext({
    navLinks,
    planetsList,
});
const ContextProvider = ({ children }) => {
    const [isLinkClick, setIsLinkClick] = useState("");
    const [click, setClick] = useState("00");
    return (
        <ContextApp.Provider
            value={{
                navLinks,
                planetsList,
                click,
                setClick,
            }}
        >
            {children}
        </ContextApp.Provider>
    );
};

export const useGlobal = () => {
    return useContext(ContextApp);
};
export default ContextProvider;
