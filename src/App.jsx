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
  Container,
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
      <Container
        sx={{
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1676827547759-5c7bdaada28c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1317")`,
          background: "transparent",
          height: "100%",
          width: "1000px",
          maxWidth: { sm: 900, md: 1000, lg: 1500, xl: 2400 },
          padding: { sm: 1, md: 2, lg: 3, xl: 4 },
          zIndex: 10000,
        }}
      >
        <Typography> this is the container </Typography>
      </Container>

      <ThemePopover />
      <BackgroundPopover />
      <ColorPopover />
    </>
  );
}

export default App;
