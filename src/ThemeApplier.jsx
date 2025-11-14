import React from "react";
import { useTheme } from "./ThemeContext";
import { useEffect } from "react";

export default function ThemeApplier() {
  const { mode, modeChoice } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const isDark = mode === "dark";
    root.style.background = isDark ? "#121212" : "#fff";
    root.style.color = isDark ? "#fff" : "black";
  }, [mode]);

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "20px",
        border: "1px solid",
        borderRadius: "8px",
        background: "rgba(0,0,0,0.05)",
      }}
    >
      <h2>
        Current <code>modeChoice</code>: <strong>{modeChoice}</strong>
      </h2>
      <h3>
        Effective <code>mode</code>: <strong>{mode}</strong>
      </h3>
      <p>
        The background and text colour of <code>&lt;html&gt;</code> update
        instantly when the OS preference changes (if{" "}
        <code>modeChoice === "browserTheme"</code>).
      </p>
    </div>
  );
}
