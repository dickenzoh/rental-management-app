// SettingsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Divider, Typography } from '@mui/material';

const SettingsPage = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h5">Settings</Typography>
      <Divider sx={{ mb: 2 }} />

      {/* Example of a setting option */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>Dark Mode</Typography>
        {/* Replace the onClick function with your logic to toggle dark mode */}
        <Button variant="outlined" onClick={() => console.log('Toggle Dark Mode')}>
          Enable
        </Button>
      </Box>

      {/* Add more setting options here */}
      
      {/* Example of a link to another page (e.g., Profile) */}
      <Box sx={{ mt: 4 }}>
        <Link to="/profile">Go to Profile</Link>
      </Box>
    </Box>
  );
};

export default SettingsPage;
