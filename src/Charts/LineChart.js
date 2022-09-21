import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"

function LineChart({userData}) {
  return <Line data={userData}  />
}

export default LineChart;