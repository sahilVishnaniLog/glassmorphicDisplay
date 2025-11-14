import React from "react";
import ThemePopover from "./ThemePopover.jsx";
import BackgroundPopover from "./BackgroundPopover.jsx";
import ColorPopover from "./ColorPopover.jsx";
import KanbanCard from "./KanbanCard.jsx";
import { useTheme } from "@mui/material/styles";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
  Paper,
  InputBase,
  Avatar,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Apps,
  OpenInFull,
  Settings,
  FlashOn,
  NotificationsNone,
  HelpOutline,
  Search as SearchIcon,
  ListAlt,
  DashboardOutlined,
  Timeline,
  Public,
  Add,
  Share,
  FilterList,
  MoreHoriz,
  CheckCircleOutline,
} from "@mui/icons-material";

const columns = [
  { id: "todo", title: "TO DO", count: 5, done: false },
  { id: "progress", title: "IN PROGRESS", count: 2, done: false },
  { id: "done", title: "DONE", count: "8", done: true },
];

const tasks = [
  { id: "TASK-1 ", title: "Design login screen", type: "story", col: "todo" },
  {
    id: "TASK-2",
    title: "Fix crash on payment page",
    type: "bug",
    col: "progress",
  },
  {
    id: "TASK-3",
    title: "Implement push notifications",
    type: "task",
    col: "todo",
  },
  { id: "TASK-4", title: "Update user profile UI", type: "story", col: "done" },
  { id: "TASK-5", title: "Resolve logout issue", type: "bug", col: "progress" },
  {
    id: "TASK-6",
    title: "Add multi-language support",
    type: "task",
    col: "done",
  },
];
function App() {
  const [tabValue, setTabValue] = React.useState(0);
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <AppBar position="static" color="transparent">
          <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton edge="start" size="small">
                <Apps />
              </IconButton>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  color: "text.primary",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    bgcolor: "#6554C0",
                    color: "white",
                    p: 0.5,
                    borderRadius: 1,
                    mr: 1,
                    fontSize: 12,
                  }}
                >
                  MB
                </Box>
                Mobile Banking App
              </Typography>
              <Button
                endIcon={<OpenInFull sx={{ fontSize: 14 }} />}
                size="small"
              >
                Project
              </Button>
              <Button size="small">Filters</Button>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Paper
                component="form"
                sx={{
                  p: "2px 8px",
                  display: "flex",
                  alignItems: "center",
                  width: 200,
                }}
                elevation={0}
              >
                <SearchIcon
                  sx={{ color: "text.secondary", mr: 1, fontSize: 20 }}
                />
                <InputBase
                  sx={{ ml: 1, flex: 1, fontSize: "0.875rem" }}
                  placeholder="Search"
                />
              </Paper>
              <IconButton size="small">
                <NotificationsNone />
              </IconButton>
              <IconButton size="small">
                <HelpOutline />
              </IconButton>
              <IconButton size="small">
                <Settings />
              </IconButton>

              <Avatar
                sx={{ width: 28, height: 28, bgcolor: "#DF4F4D", fontSize: 14 }}
              >
                SV
              </Avatar>
            </Stack>
          </Toolbar>
        </AppBar>

        <Box sx={{ px: 3, mb: 2 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
              <Tab
                icon={<ListAlt sx={{ fontSize: 18 }} />}
                iconPosition="start"
                label="List"
              />
              <Tab
                icon={<DashboardOutlined sx={{ fontSize: 18 }} />}
                iconPosition="start"
                label="Board"
              />
              <Tab
                icon={<Timeline sx={{ fontSize: 18 }} />}
                iconPosition="start"
                label="Timeline"
              />
              <Tab
                icon={<Public sx={{ fontSize: 18 }} />}
                iconPosition="start"
                label="Summary"
              />
              <Tab
                icon={<Add sx={{ fontSize: 18 }} />}
                label=""
                sx={{ minWidth: "40px !important" }}
              />
            </Tabs>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" size="small" startIcon={<Share />}>
                Share
              </Button>
              <Button variant="outlined" size="small" startIcon={<FlashOn />}>
                Automate
              </Button>
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ px: 3, mb: 3, display: "flex", gap: 2 }}>
          <Paper
            sx={{
              p: "4px 8px",
              display: "flex",
              alignItems: "center",
              width: 180,
            }}
            elevation={0}
          >
            <SearchIcon sx={{ color: "text.secondary", mr: 1, fontSize: 20 }} />
            <InputBase
              sx={{ flex: 1, fontSize: "0.875rem" }}
              placeholder="Search board"
            />
          </Paper>
          <Stack direction="row" spacing={-1}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                border: `2px solid ${
                  theme.palette.mode === "dark" ? "#22272B" : "white"
                }`,
                fontSize: 14,
                bgcolor: "#5243AA",
              }}
            >
              SV
            </Avatar>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                border: `2px solid ${
                  theme.palette.mode === "dark" ? "#22272B" : "white"
                }`,
                fontSize: 14,
                bgcolor: "#0052CC",
              }}
            >
              JK
            </Avatar>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                border: `2px solid ${
                  theme.palette.mode === "dark" ? "#22272B" : "white"
                }`,
                fontSize: 14,
                bgcolor: "#DFDFDF",
                color: "#172B4D",
              }}
            >
              +2
            </Avatar>
          </Stack>
          <Button startIcon={<FilterList />} sx={{ color: "text.secondary" }}>
            Only my issues
          </Button>
          <Button sx={{ color: "text.secondary" }}>Recently updated</Button>
        </Box>

        <Box sx={{ flexGrow: 1, overflowX: "auto", px: 3, pb: 3 }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ height: "100%", alignItems: "flex-start" }}
          >
            {columns.map((col) => (
              <Paper
                key={col.id}
                elevation={0} // Ensure no shadow on columns to keep them flat against BG
                sx={{
                  minWidth: 280,
                  width: 280,
                  // Use the custom neutral background color we defined in the theme
                  bgcolor: "background.neutral",
                  p: 1.5,
                  maxHeight: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border:
                    theme.palette.mode === "dark"
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "none",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 2, px: 0.5 }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      color: "text.secondary",
                      fontSize: "0.75rem",
                    }}
                  >
                    {col.title}{" "}
                    {col.count > 0 && (
                      <Box component="span" sx={{ ml: 1 }}>
                        {col.count}
                      </Box>
                    )}
                  </Typography>
                  <Stack direction="row">
                    {col.done && (
                      <CheckCircleOutline
                        sx={{ fontSize: 18, color: "green", mr: 1 }}
                      />
                    )}
                    <MoreHoriz
                      sx={{
                        fontSize: 18,
                        color: "text.secondary",
                        cursor: "pointer",
                      }}
                    />
                  </Stack>
                </Stack>

                <Box sx={{ overflowY: "auto", flexGrow: 1, minHeight: 50 }}>
                  {tasks
                    .filter((t) => t.col === col.id)
                    .map((task) => (
                      <KanbanCard key={task.id} task={task} />
                    ))}
                  {tasks.filter((t) => t.col === col.id).length === 0 && (
                    <Box sx={{ minHeight: 100 }} />
                  )}
                </Box>

                <Button
                  startIcon={<Add />}
                  sx={{
                    justifyContent: "flex-start",
                    color: "text.secondary",
                    mt: 1,
                    "&:hover": { bgcolor: "action.hover" },
                  }}
                >
                  Create
                </Button>
              </Paper>
            ))}
            <Button
              startIcon={<Add />}
              sx={{
                minWidth: 280,
                height: "fit-content",
                justifyContent: "flex-start",
                bgcolor: "background.neutral",
                color: "text.primary",
              }}
            >
              Add column
            </Button>
          </Stack>
        </Box>
      </Box>
      <ThemePopover />
      <BackgroundPopover />
      <ColorPopover />
    </>
  );
}

export default App;
