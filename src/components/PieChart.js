import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { VictoryPie } from "victory";

const useStyles = makeStyles(() => ({
  chartContainer: {
    backgroundColor: "#eceff1",
  },
}));

const chartData = [
  { x: "Available Parking", y: 50, color: "#9c27b0" },
  { x: "Occupied Parking", y: 50, color: "#f44336" },
  { x: "Motor Registered", y: 50, color: "#3f51b5" },
];

const PieChart = () => {
  const classes = useStyles();
  return (
    <div className={classes.chartContainer}>
      <VictoryPie
        data={chartData}
        colorScale={chartData.map(item => item.color)}
        style={{
          labels: { fill: "#263238" },
        }}
        height={250}
      />
    </div>
  );
};

export default PieChart;
