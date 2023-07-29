import { Box, Divider, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const AddLeaseForm = ({ title }) => {
  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ display: "flex", justifyContent: "center", mb: 2 }}>Add Lease Agreement</Typography>
        <Divider variant="li" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          label="House Name"
          variant="outlined"
          fullWidth
          sx={{ mr: 4, mb: 2 }}
        />

        <TextField
          label="Tenant Name"
          variant="outlined"
          fullWidth
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          label="Lease Start Date"
          variant="outlined"
          fullWidth
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mr: 4, mb: 2 }}
        />

        <TextField
          label="Lease End Date"
          variant="outlined"
          fullWidth
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          label="Monthly Rent"
          variant="outlined"
          fullWidth
          type="number"
          InputProps={{
            startAdornment: "$",
          }}
          sx={{ mb: 2 }}
        />

        <TextField
          label="Deposit Amount"
          variant="outlined"
          fullWidth
          type="number"
          InputProps={{
            startAdornment: "$",
          }}
          sx={{ mb: 2 }}
        />
      </Box>

    </Box>
  )
}

export default AddLeaseForm;
