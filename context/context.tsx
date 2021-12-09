import React, { useContext } from "react";

const ContextApp = React.createContext({});

const ContextProvider = ({ children }) => {
    return <ContextApp.Provider value={"sami"}>{children}</ContextApp.Provider>;
};

export const useGlobal = () => {
    return useContext(ContextApp);
};
export default ContextProvider;
