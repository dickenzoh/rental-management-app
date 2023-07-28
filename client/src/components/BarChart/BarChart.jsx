import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../theme";
import { mockBarData as data } from "../../data/mockData";



const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const datay = {
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

  return (
    <ResponsiveBar
      data={datay}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
