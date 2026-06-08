import { Chart, type ChartProps } from "@artifact/ui-lib";

function LineChart() {
  const data: ChartProps["data"] = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [180, 440, 260, 100, 360, 410],
        tension: 0.35,
        fill: true,
      },
      {
        label: "Loss",
        data: [1, 360, 410, 200, 100, 410],
        tension: 0.35,
        fill: true,
      },
      {
        label: "Profit",
        data: [1, 8, 410, 200, 100, 410],
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const options: ChartProps["options"] = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(148, 163, 184, 0.18)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Chart
      data={data}
      density="comfortable"
      emphasis="strong"
      height={240}
      legendPosition="top"
      options={options}
      shape="line"
    />
  );
}

export default LineChart;
