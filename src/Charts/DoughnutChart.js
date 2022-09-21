import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"

function DoughnutChart({userData}) {
  return <Doughnut data={userData}  />
}

export default DoughnutChart;