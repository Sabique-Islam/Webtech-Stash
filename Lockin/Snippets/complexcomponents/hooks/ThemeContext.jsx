import { createContext, useState } from "react";

const themeContext = createContext();

export default function ThemeContext({children}){
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => setIsDarkMode((prev)=>!prev);
    return(
        <themeContext.Provider value={{isDarkMode, ToggleEvent}}>{children}</themeContext.Provider>
    )
}