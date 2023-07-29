import { Box, Divider, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const AddHouseForm = () => {
  return (
    <Box sx={{m: 2}}>
            <Box sx={{ mb: 2}}>
            <Typography sx={{display: "flex", justifyContent:"center", mb: 2}}>Add House</Typography>
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
    label="House Type"
    variant="outlined"
    fullWidth
  />
</Box>

<Box sx={{ display: "flex", justifyContent: "space-between" }}>
  <TextField
    label="Address"
    variant="outlined"
    fullWidth
    sx={{ mr: 4, mb: 2 }}
  />

  <TextField
    label="Number of Rooms"
    type="number"
    variant="outlined"
    fullWidth
  />
</Box>
          </Box>
  )
}

export default AddHouseForm