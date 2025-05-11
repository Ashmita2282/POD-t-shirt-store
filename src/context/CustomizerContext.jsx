import React, { createContext, useState } from "react";

export const CustomizerContext = createContext();

export const CustomizerProvider = ({ children }) => {
  const [image, setImage] = useState(
    "https://res.cloudinary.com/dq8hyeknf/image/upload/v1746955676/logo_nlra8o.png"
  );
  const [stats, setStats] = useState({
    height: 180,
    weight: 80,
    build: "athletic",
  });
  const [textLines, setTextLines] = useState([]);

  return (
    <CustomizerContext.Provider
      value={{ image, setImage, stats, setStats, textLines, setTextLines }}
    >
      {children}
    </CustomizerContext.Provider>
  );
};
