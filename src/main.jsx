import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProviderWrapper from "./ThemeProviderWrapper.jsx"; // WRAPPEṘ COMPONENT

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderWrapper />
  </StrictMode>
);
