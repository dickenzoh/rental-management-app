import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Badge, Box, Divider, Fab, IconButton, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import EditProfileForm from "./ModalForms/EditProfileForm";

const EditProfileModal = ({ title }) => {
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
      <Box sx={{display: "flex", justifyContent: "flex-end"}}>
      <Fab color="secondary" aria-label="edit" onClick={handleClickOpen}>
  <EditIcon />
</Fab>
      </Box>

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
        <DialogContent >
          <EditProfileForm />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditProfileModal;
