import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./themes/ThemeContext";
import { CustomizerProvider } from "./context/CustomizerContext";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <CustomizerProvider>
      <App />
    </CustomizerProvider>{" "}
  </ThemeProvider>
);
