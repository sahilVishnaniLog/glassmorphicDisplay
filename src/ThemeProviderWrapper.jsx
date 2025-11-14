import { useState } from "react";
import ThemeContext from "./ThemeContext.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";
import { backgrounds } from "./backgrounds.js"; // Import the backgrounds

export default function ThemeProviderWrapper() {
  const [modeChoice, setModeChoice] = useState("browserTheme"); // Use browserTheme

  const [backgroundImg, setBackgroundImg] = useState(backgrounds[0]); // Default to the first background
  const [backgroundColor, setBackgroundColor] = useState(""); // defined here and passed down to mounted components ( direclty under  it)

  return (
    <ThemeContext
      modeChoice={modeChoice}
      setModeChoice={setModeChoice}
      backgroundImg={backgroundImg}
      setBackgroundImg={setBackgroundImg}
      backgroundColor={backgroundColor}
      setBackgroundColor={setBackgroundColor}
    >
      <CssBaseline />
      <App />
    </ThemeContext>
  );
}
