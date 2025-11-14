import React from "react";
import backgroundURLObject from "./color.js";
import { useTheme } from "./ThemeContext.jsx";

import {
  Box,
  Grid,
  Typography,
  Popper,
  Paper,
  Button,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Tooltip,
} from "@mui/material";

export default function ColorPopover() {
  const [chosenBackground, setChosenBackground] = React.useState("dark");
  const handleSelect = (event) => {
    console.log(event.target.value);
    setChosenBackground(event.target.value);
  };
  return (
    <>
      <FormControl>
        <RadioGroup value={chosenBackground} onChange={handleSelect}>
          <Grid container spacing={2} bgcolor="white" padding={2}>
            {backgroundURLObject("light").map((item) => (
              <FormControlLabel
                key={item.label}
                value={item.background}
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <Tooltip key={item.label} title={item.label}>
                    <Paper
                      sx={{
                        width: 60,
                        height: 60,
                        background: item.background,
                        border:
                          chosenBackground === item.background
                            ? "2px solid #000000"
                            : "none",
                        "&:hover": {
                          border: "2px solid #000000",
                        },
                      }}
                    ></Paper>
                  </Tooltip>
                }
              />
            ))}
            <Typography>No background</Typography>
          </Grid>
        </RadioGroup>
      </FormControl>
    </>
  );
}
``;
