import React from "react";
import backgroundURLObject from "./color.js";

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
  return (
    <>
      <Grid container spacing={2}>
        {backgroundURLObject("dark").map((item) => (
          <Tooltip key={item.label} title={item.label}>
            <Paper
              sx={{ width: 30, height: 30, background: item.background }}
            ></Paper>
          </Tooltip>
        ))}
      </Grid>
    </>
  );
}
