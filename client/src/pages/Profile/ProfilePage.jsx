import React from 'react';
import { Box, Fab, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from "../../theme";
import profile from '../../images/user.png';
import EditProfileModal from '../../components/Modals/EditProfile';

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

const user = {
  name: 'John Doe',
  age: 28,
  email: 'john.doe@example.com',
  avatarUrl: 'https://via.placeholder.com/150',
  address: '123 Main St, City, Country',
  phoneNumber: '123-456-7890',
};

const ProfilePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="25px" >
      <EditProfileModal />
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
              <Box textAlign="center">
        <Typography variant="h4" color={colors.grey[100]}>
          Age: {user.age}
        </Typography>
        <Typography variant="h4" color={colors.grey[100]}>
          Email: {user.email}
        </Typography>
        <Typography variant="h4" color={colors.grey[100]}>
          Address: {user.address}
        </Typography>
        <Typography variant="h4" color={colors.grey[100]}>
          Phone Number: {user.phoneNumber}
        </Typography>
      </Box>
            </Box>
  );
};

export default ProfilePage;
