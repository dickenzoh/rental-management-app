import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from "../../theme";
import profile from '../../images/user.png';

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
}));

const ProfilePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Replace this with your actual user data or fetch it from an API
  const user = {
    name: 'John Doe',
    age: 28,
    email: 'john.doe@example.com',
    avatarUrl: 'https://via.placeholder.com/150', // Replace with the URL of the user's avatar image
  };

  return (
    <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={profile}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  dickenzoh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
  );
};

export default ProfilePage;
