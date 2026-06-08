import { Chart, type ChartProps } from "@artifact/ui-lib";

function BarChart() {
  const data: ChartProps["data"] = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 300, 250, 120, 190, 300, 250, 120, 190, 300, 250],
        borderRadius: 4,
      },
      {
        label: "Sales",
        data: [12, 250, 120, 190, 300, 250, 20, 66, 54, 11],
        borderRadius: 4,
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
      density="compact"
      emphasis="subtle"
      height={240}
      legendPosition="top"
      options={options}
      shape="bar"
    />
  );
}

export default BarChart;
