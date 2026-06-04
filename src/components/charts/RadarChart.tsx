import { Chart, type ChartProps } from "@artifact/ui-lib";

function RadarChart() {
  const data: ChartProps["data"] = {
    labels: ["Security", "Speed", "Reliability", "UX", "Coverage", "Support"],
    datasets: [
      {
        label: "Current release",
        data: [82, 74, 88, 79, 71, 84],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
      },
      {
        label: "Target",
        data: [90, 82, 92, 86, 80, 88],
        borderColor: "rgb(245, 158, 11)",
        backgroundColor: "rgba(245, 158, 11, 0.14)",
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
        suggestedMax: 100,
        grid: {
          color: "rgba(148, 163, 184, 0.2)",
        },
        angleLines: {
          color: "rgba(148, 163, 184, 0.16)",
        },
      },
    },
  };

  return (
    <Chart
      data={data}
      density="comfortable"
      emphasis="subtle"
      height={240}
      legendPosition="bottom"
      options={options}
      shape="radar"
    />
  );
}

export default RadarChart;
