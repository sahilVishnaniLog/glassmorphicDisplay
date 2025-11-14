import { useState } from "react";
import ThemeContext from "./ThemeContext.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";

export default function ThemeProviderWrapper() {
  const [modeChoice, setModeChoice] = useState("light");
  return (
    <ThemeContext modeChoice={modeChoice} setModeChoice={setModeChoice}>
      <CssBaseline />
      <App />
    </ThemeContext>
  );
}
