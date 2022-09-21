import React from "react";
import { PolarArea } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"

function PolarAreaChart({userData}) {
  return <PolarArea data={userData}  />
}

export default PolarAreaChart;