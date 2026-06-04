import { Chart, type ChartProps } from "@artifact/ui-lib";

function PieChart() {
  const data: ChartProps["data"] = {
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

  const options: ChartProps["options"] = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
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
      shape="pie"
    />
  );
}

export default PieChart;
