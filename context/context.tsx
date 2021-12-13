import React, { useContext, useState } from "react";
import { ContextTypes } from "../types/context";
import { navLinks } from "./navList/navList";

const ContextApp: ContextTypes = React.createContext({ navLinks });
const ContextProvider = ({ children }) => {
    const [isLinkClick, setIsLinkClick] = useState("");
    return (
        <ContextApp.Provider
            value={{
                navLinks,
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
