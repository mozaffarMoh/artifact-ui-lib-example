import { Chart, type ChartProps } from "@artifact/ui-lib";
import { useTranslation } from "react-i18next";

function SemiGaugeChart() {
  const { t } = useTranslation();

  const data: ChartProps["data"] = {
    labels: [
      t("chartsPage.examples.semiGauge.segments.completed"),
      t("chartsPage.examples.semiGauge.segments.remaining"),
    ],
    datasets: [
      {
        label: t("chartsPage.cards.semiGauge.title"),
        data: [64, 36, 33, 22],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartProps["options"] = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Chart
      centerDescription={t("chartsPage.examples.semiGauge.centerDescription")}
      centerLabel={t("chartsPage.examples.semiGauge.centerLabel")}
      centerValue={t("chartsPage.examples.semiGauge.centerValue")}
      data={data}
      density="comfortable"
      emphasis="subtle"
      height={240}
      legendPosition={false}
      options={options}
      shape="semi-gauge"
    />
  );
}

export default SemiGaugeChart;
