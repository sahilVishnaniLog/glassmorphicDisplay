import { useState } from "react";
import ThemeContext from "./ThemeContext.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";
import { backgrounds } from "./backgrounds.js"; // Import the backgrounds

export default function ThemeProviderWrapper() {
  const [modeChoice, setModeChoice] = useState("browserTheme"); // Use browserTheme

  const [background, setBackground] = useState(backgrounds[0]); // Default to the first background

  return (
    <ThemeContext
      modeChoice={modeChoice}
      setModeChoice={setModeChoice}
      background={background}
      setBackground={setBackground}
    >
      <CssBaseline />
      <App />
    </ThemeContext>
  );
}
