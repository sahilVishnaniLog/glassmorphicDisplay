import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
  Paper,
  Grid,
  Tooltip,
} from "@mui/material";

import { useTheme } from "./ThemeContext";
import { backgrounds } from "./backgrounds.js";
import backgroundColors from "./color.js";

export default function BackgroundPopover() {
  const {
    backgroundImg,
    setBackgroundImg,
    backgroundColor,
    setBackgroundColor,
    modeChoice,
  } = useTheme();

  //for backgroundImg

  const handleChange = (event) => {
    const selectedBg = backgrounds.find((bg) => bg.id === event.target.value);
    if (selectedBg) {
      setBackgroundImg(selectedBg);
    }
  };
  const handleSelect = (event) => {
    console.log(event.target.value);
    setBackgroundColor(event.target.value);
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
      <FormControl>
        <RadioGroup value={backgroundColor} onChange={handleSelect}>
          <Grid container spacing={2} bgcolor="transparent" padding={2}>
            {backgroundColors(modeChoice).map((item) => (
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
                          backgroundColor === item.background
                            ? `4px solid ${
                                modeChoice === "dark" ? "#fff" : "#000"
                              }`
                            : "none",
                        "&:hover": {
                          border: `2px solid ${
                            modeChoice === "dark" ? "#fff" : "#000"
                          }`,
                        },
                      }}
                    ></Paper>
                  </Tooltip>
                }
              />
            ))}
          </Grid>
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
