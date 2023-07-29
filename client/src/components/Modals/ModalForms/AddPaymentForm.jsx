import { Box, Divider, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const AddPaymentForm = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ display: "flex", justifyContent: "center", mb: 2 }}>Add Payments</Typography>
        <Divider variant="li" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          label="Payment Amount"
          variant="outlined"
          fullWidth
          type="number"
          sx={{ mr: 4, mb: 2 }}
        />

        <TextField
          label="Payment Date"
          variant="outlined"
          fullWidth
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Select
          label="Payment Method"
          variant="outlined"
          fullWidth
          sx={{ mr: 2 }}
        >
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="credit_card">Credit Card</MenuItem>
          <MenuItem value="bank_transfer">Bank Transfer</MenuItem>
        </Select>

        <TextField
          label="Transaction ID"
          variant="outlined"
          fullWidth
        />
      </Box>

    </Box>
  )
}

export default AddPaymentForm;
