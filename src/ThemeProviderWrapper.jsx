import { useState } from "react";
import ThemeContext from "./ThemeContext.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";

const DefaultThemeSettings = {
  mode: "browserTheme",
  backgroundImg: {
    url: "https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=2069&auto=format&fit=crop",
    alt: "Snowy mountain (Day)",
    id: "snowy-mountain",
  },

  backgroundColor: "",
};
export default function ThemeProviderWrapper() {
  const [modeChoice, setModeChoice] = useState(DefaultThemeSettings.mode); // Use browserTheme

  const [backgroundImg, setBackgroundImg] = useState(
    DefaultThemeSettings.backgroundImg
  ); // Default to the first background
  const [backgroundColor, setBackgroundColor] = useState(
    DefaultThemeSettings.backgroundImg
  ); // defined here and passed down to mounted components ( direclty under  it)

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
