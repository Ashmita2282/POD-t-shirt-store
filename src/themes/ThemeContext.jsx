import React, { createContext, useState, useEffect } from "react";
import themes from "./themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeKey, setThemeKey] = useState("neon");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key === "q") {
        const themeKeys = Object.keys(themes);
        const currentIndex = themeKeys.indexOf(themeKey);
        const nextIndex = (currentIndex + 1) % themeKeys.length;
        setThemeKey(themeKeys[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [themeKey]);

  return (
    <ThemeContext.Provider value={themes[themeKey]}>
      {children}
    </ThemeContext.Provider>
  );
};
