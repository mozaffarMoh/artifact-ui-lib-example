import { Chart, type ChartProps } from "@artifact/ui-lib";
import { useTranslation } from "react-i18next";

function GaugeChart() {
  const { t } = useTranslation();

  const data: ChartProps["data"] = {
    labels: [
      t("chartsPage.examples.gauge.segments.achieved"),
      t("chartsPage.examples.gauge.segments.remaining"),
    ],
    datasets: [
      {
        label: t("chartsPage.cards.gauge.title"),
        data: [86, 14],
        backgroundColor: ["rgba(16, 185, 129, 0.88)", "rgba(226, 232, 240, 0.9)"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartProps["options"] = {
    responsive: true,
    cutout: "72%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Chart
      centerDescription={t("chartsPage.examples.gauge.centerDescription")}
      centerLabel={t("chartsPage.examples.gauge.centerLabel")}
      centerValue={t("chartsPage.examples.gauge.centerValue")}
      data={data}
      density="comfortable"
      emphasis="strong"
      height={240}
      legendPosition={false}
      options={options}
      shape="gauge"
    />
  );
}

export default GaugeChart;
