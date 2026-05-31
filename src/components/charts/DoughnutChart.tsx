import type { ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./chartSetup";

function DoughnutChart() {
  const data: ChartData<"doughnut", number[], string> = {
    labels: ["Completed", "In Review", "Blocked"],
    datasets: [
      {
        label: "Delivery Status",
        data: [62, 24, 14],
        backgroundColor: ["rgba(34, 197, 94, 0.8)", "rgba(59, 130, 246, 0.8)", "rgba(239, 68, 68, 0.8)"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Delivery Status",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
