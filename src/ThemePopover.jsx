import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
} from "@mui/material";

import React from "react";
import { useTheme } from "./ThemeContext";

export default function ThemePopover({ setModeChoice }) {
  const { modeChoice, setModeChoice } = useTheme(); // CUSTOM HOOK
  const handleChange = (event) => {
    setModeChoice(event.target.value);
    console.log("modeChoice change to", event.target.value);
  };
  return (
    <>
      <FormControl>
        <RadioGroup value={modeChoice} onChange={handleChange} label="theme">
          <FormControlLabel value="light" control={<Radio />} label="light" />
          <FormControlLabel value="dark" control={<Radio />} label="dark" />
          <FormControlLabel
            value="browserTheme"
            control={<Radio />}
            label="browserTheme"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}
