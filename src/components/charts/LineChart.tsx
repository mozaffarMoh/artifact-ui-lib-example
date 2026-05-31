import type { ChartData, ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import "./chartSetup";

function LineChart() {
  const data: ChartData<"line", number[], string> = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [180, 240, 260, 300, 360, 410],
        borderColor: "rgb(16, 185, 129)",
        backgroundColor: "rgba(16, 185, 129, 0.18)",
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Revenue Trend",
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
