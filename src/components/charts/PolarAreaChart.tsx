import { Chart, type ChartProps } from "@artifact/ui-lib";

function PolarAreaChart() {
  const data: ChartProps["data"] = {
    labels: ["North", "South", "East", "West", "Central"],
    datasets: [
      {
        label: "Regional demand",
        data: [18, 24, 22, 16, 28],
        backgroundColor: [
          "rgba(16, 185, 129, 0.7)",
          "rgba(59, 130, 246, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(239, 68, 68, 0.7)",
          "rgba(139, 92, 246, 0.7)",
        ],
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.9)",
      },
    ],
  };

  const options: ChartProps["options"] = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          color: "rgba(148, 163, 184, 0.18)",
        },
      },
    },
  };

  return (
    <Chart
      data={data}
      density="spacious"
      emphasis="subtle"
      height={240}
      legendPosition="bottom"
      options={options}
      shape="polar-area"
    />
  );
}

export default PolarAreaChart;
