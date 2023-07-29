import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Divider, IconButton, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AddIcon from '@mui/icons-material/Add';
import AddHouseForm from "./ModalForms/AddHouseForm";
import { useLocation } from "react-router-dom";
import AddTenantForm from "./ModalForms/AddTenantForm";
import AddPaymentForm from "./ModalForms/AddPaymentForm";
import AddLeaseForm from "./ModalForms/AddLeaseForm";
import AddFAQForm from "./ModalForms/AddFaqsForm";

const AddModal = ({title}) => {
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
    <div>
      <Box
        style={{
          opacity: 1,
          transition: "opacity 0.3s ease",
          zIndex: 999,
        }}
      >
        <IconButton
          color={colors.greenAccent[400]}
          variant="contained"
          onClick={handleClickOpen}
          style={{
            borderRadius: "50%",
            backgroundColor: colors.greenAccent[400],
          }}
        >
          <AddIcon sx={{ color: "white" }} />
        </IconButton>
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

          {
            locationPath === "/house" ? (
            <AddHouseForm  />
          ) : locationPath === "/tenants" ? (
            <AddTenantForm  />
          ) : locationPath === "/payments" ? (
            <AddPaymentForm  />
          ) :  locationPath === "/faqs" ? (
            <AddFAQForm  />
          ) : (
            <AddLeaseForm  />
          ) 
        }          
        </DialogContent>
        <DialogActions>
        <Box sx={{display: "flex", justifyContent: "flex-end", gap:2, mr: 3}}>
          <Button color="error" variant="contained" onClick={handleClose} autoFocus>
            CANCEL
          </Button>
          <Button color="success"  variant="contained"  onClick={handleClose} autoFocus>
            SAVE
          </Button>
        </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddModal
