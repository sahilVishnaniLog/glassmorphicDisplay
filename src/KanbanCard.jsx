import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Avatar,
} from "@mui/material";

import React from "react";
export default function KanbanCard({ task }) {
  return (
    <Card
      elevation={1}
      sx={{
        mb: 1,
        "&:hover": { backgroundColor: "action.hover", cursor: "pointer" },
      }}
    >
      <CardContent sx={{ p: "12px !important", pb: "12px !important" }}>
        <Typography
          variant="body2"
          sx={{ mb: 2, fontWeight: 500, color: "text.primary" }}
        >
          {task.title}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={0.5} alignItems="center">
            {task.type === "bug" && (
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: "#e5493a",
                  borderRadius: 0.5,
                }}
              />
            )}
            {task.type === "story" && (
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: "#63ba3c",
                  borderRadius: 0.5,
                }}
              />
            )}
            {task.type === "task" && (
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  bgcolor: "#4bade8",
                  borderRadius: 0.5,
                }}
              />
            )}
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              {task.id}
            </Typography>
          </Stack>
          <Avatar sx={{ width: 24, height: 24, fontSize: "0.75rem" }}>U</Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
}
