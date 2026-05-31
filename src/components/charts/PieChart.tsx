import type { ChartData, ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./chartSetup";

function PieChart() {
  const data: ChartData<"pie", number[], string> = {
    labels: ["Design", "Platform", "QA", "Operations"],
    datasets: [
      {
        label: "Team Share",
        data: [24, 31, 18, 27],
        backgroundColor: [
          "rgba(59, 130, 246, 0.75)",
          "rgba(16, 185, 129, 0.75)",
          "rgba(245, 158, 11, 0.75)",
          "rgba(239, 68, 68, 0.75)",
        ],
        borderColor: ["#ffffff", "#ffffff", "#ffffff", "#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Team Distribution",
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default PieChart;
