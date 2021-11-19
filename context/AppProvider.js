import { createContext, useState, useEffect } from "react";

export const context = createContext();

export const AppProvider = ({ children }) => {
    const [category, setCategory] = useState("general");	
    const contextValues = {
        setCategory,
        category,

    };

    return (
        <context.Provider value={contextValues}>{children}</context.Provider>
    );
};
