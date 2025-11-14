import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
  Paper,
} from "@mui/material";
import React from "react";
import { useTheme } from "./ThemeContext";
import { backgrounds } from "./backgrounds.js";

export default function BackgroundPopover() {
  const { backgroundImg, setBackgroundImg } = useTheme();

  const handleChange = (event) => {
    const selectedBg = backgrounds.find((bg) => bg.id === event.target.value);
    if (selectedBg) {
      setBackgroundImg(selectedBg);
    }
  };

  return (
    <Paper elevation={0} sx={{ p: 2, borderRadius: 2, mt: 1 }}>
      <FormControl>
        <Typography
          variant="subtitle2"
          sx={{ mb: 1, color: "text.primary", fontWeight: "bold" }}
        >
          Background Image
        </Typography>
        <RadioGroup
          value={backgroundImg.id}
          onChange={handleChange}
          label="background"
        >
          {backgrounds.map((bg) => (
            <FormControlLabel
              key={bg.id}
              value={bg.id}
              control={<Radio size="small" />}
              label={bg.alt}
              sx={{ color: "text.secondary" }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
