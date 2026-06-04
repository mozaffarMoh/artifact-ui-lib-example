import { Chart, type ChartProps } from "@artifact/ui-lib";

function DoughnutChart() {
  const data: ChartProps["data"] = {
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

  const options: ChartProps["options"] = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    cutout: "62%",
  };

  return (
    <Chart
      data={data}
      density="comfortable"
      emphasis="strong"
      height={240}
      legendPosition="bottom"
      options={options}
      shape="doughnut"
    />
  );
}

export default DoughnutChart;
