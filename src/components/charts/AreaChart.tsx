import { Chart, type ChartProps } from "@artifact/ui-lib";

function AreaChart() {
  const data: ChartProps["data"] = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Applications",
        data: [32, 45, 41, 58, 63, 69],
        borderColor: "#1b4139",
        backgroundColor: "rgba(27, 65, 57, 0.16)",
        fill: true,
        tension: 0.35,
      },
      {
        label: "Completed",
        data: [18, 27, 29, 39, 44, 51],
        borderColor: "#b6a87e",
        backgroundColor: "rgba(182, 168, 126, 0.22)",
        fill: true,
        tension: 0.35,
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
      legendPosition="bottom"
      options={options}
      shape="area"
    />
  );
}

export default AreaChart;
