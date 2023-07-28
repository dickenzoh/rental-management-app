import { Box, Typography } from "@mui/material";
// Import other necessary components...

const PowerConsumptionChart = () => {
    const data = {
        powerConsumptionData: [
          { hour: "00:00", consumption: 100 },
          { hour: "01:00", consumption: 120 },
          { hour: "02:00", consumption: 110 },
          { hour: "03:00", consumption: 90 },
          { hour: "04:00", consumption: 80 },
          { hour: "05:00", consumption: 70 },
          { hour: "06:00", consumption: 90 },
          { hour: "07:00", consumption: 120 },
          { hour: "08:00", consumption: 140 },
          { hour: "09:00", consumption: 150 },
          { hour: "10:00", consumption: 160 },
          { hour: "11:00", consumption: 170 },
          { hour: "12:00", consumption: 180 },
          { hour: "13:00", consumption: 190 },
          { hour: "14:00", consumption: 200 },
          { hour: "15:00", consumption: 210 },
          { hour: "16:00", consumption: 220 },
          { hour: "17:00", consumption: 230 },
          { hour: "18:00", consumption: 240 },
          { hour: "19:00", consumption: 220 },
          { hour: "20:00", consumption: 200 },
          { hour: "21:00", consumption: 180 },
          { hour: "22:00", consumption: 160 },
          { hour: "23:00", consumption: 140 },
        ],
      };
      
      //{ data }
      

  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor="#1F2A40"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ padding: "30px 30px 0 30px" }}
      >
        Power Consumption
      </Typography>
      <Box height="250px" mt="-20px">
        {/* <PowerBarChart data={data.powerConsumptionData} /> */}
      </Box>
    </Box>
  );
};

export default PowerConsumptionChart;
