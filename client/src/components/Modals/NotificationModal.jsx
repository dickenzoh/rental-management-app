import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Badge, Box, Divider, IconButton, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from "react-router-dom";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AlignItemsList from "./Notifications/NotificationList";

const NotificationsModal = ({ title }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const location = useLocation();
  const locationPath = location.pathname;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <IconButton onClick={handleClickOpen}>
        <Badge badgeContent={17} color="error" max={9}>
          <NotificationsOutlinedIcon />
        </Badge>
      </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        sx={{
          "& .MuiDialog-container": {
            width: "100%",
            color: "white",
            
          },
        }}
      >
        <DialogContent sx={{position: "fixed",
            top: "20px",
            right: "20px"}}>
          <AlignItemsList />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NotificationsModal;
