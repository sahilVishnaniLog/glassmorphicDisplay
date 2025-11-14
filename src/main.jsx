import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeContext } from "./ThemeContext.jsx"; // WRAPPEṘ COMPONENT
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContext value={{ modeChoice, setModeChoice }}>
      <CssBaseline />
      <App />
    </ThemeContext>
  </StrictMode>
);
