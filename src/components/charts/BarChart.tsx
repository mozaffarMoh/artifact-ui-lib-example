import type { ChartData, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import "./chartSetup";

function BarChart() {
  const data: ChartData<"bar", number[], string> = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 300, 250],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales",
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
