import { Typography, Box, useTheme, IconButton } from "@mui/material";
import { tokens } from "../../theme";
import AddModal from "../Modals/AddModal";
import { useLocation } from "react-router-dom";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const location = useLocation();
  const locationPath = location.pathname;

  const handleCreate = () => {
    console.log('created')
  }

  return (
    <Box mb="30px" sx={{display: "flex", justifyContent: "space-between"}} >
      <Box>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
      </Box>
      {locationPath === "/messages" || locationPath === "/" ? null : <AddModal title="Add Tena"  />}
    
    
    </Box>
  );
};

export default Header;
