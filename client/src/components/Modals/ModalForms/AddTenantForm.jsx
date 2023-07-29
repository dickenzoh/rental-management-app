import { Box, Divider, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const AddTenantForm = () => {
  return (
    <Box sx={{m: 2}}>
            <Box sx={{ mb: 2}}>
            <Typography sx={{display: "flex", justifyContent:"center", mb: 2}}>Add Tenant</Typography>
            <Divider variant="li" />
            </Box>
            <Box  sx={{display: "flex", justifyContent:"space-between", }}             
>            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{mr: 4, mb: 2}}
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
            /></Box>
            <Box  sx={{display: "flex", justifyContent:"space-between", }}             
>            <TextField
              label="Age"
              variant="outlined"
              sx={{mr: 4, mb: 2}}
            />

            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
            /></Box>
          </Box>
  )
}

export default AddTenantForm