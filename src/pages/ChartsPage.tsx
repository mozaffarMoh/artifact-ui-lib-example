import AreaChart from "../components/charts/AreaChart";
import { useTranslation } from "react-i18next";
import BarChart from "../components/charts/BarChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import GaugeChart from "../components/charts/GaugeChart";
import LineChart from "../components/charts/LineChart";
import PolarAreaChart from "../components/charts/PolarAreaChart";
import PieChart from "../components/charts/PieChart";
import ProgressShowcase from "../components/charts/ProgressShowcase";
import RadarChart from "../components/charts/RadarChart";
import SemiGaugeChart from "../components/charts/SemiGaugeChart";
import StatisticsCardShowcase from "../components/charts/StatisticsCardShowcase";
import ChartCard from "../components/charts/ChartCard";

export function ChartsPage() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col gap-6">
      <section className="rounded-4xl border border-slate-200/80 bg-white/88 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
          {t("chartsPage.eyebrow")}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{t("chartsPage.title")}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{t("chartsPage.description")}</p>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <ChartCard
          title={t("chartsPage.cards.bar.title")}
          description={t("chartsPage.cards.bar.description")}
        >
          <BarChart />
        </ChartCard>

        <ChartCard
          title={t("chartsPage.cards.line.title")}
          description={t("chartsPage.cards.line.description")}
        >
          <LineChart />
        </ChartCard>

        <ChartCard
          title={t("chartsPage.cards.area.title")}
          description={t("chartsPage.cards.area.description")}
        >
          <AreaChart />
        </ChartCard>

        <ChartCard
          title={t("chartsPage.cards.pie.title")}
          description={t("chartsPage.cards.pie.description")}
        >
          <PieChart />
        </ChartCard>

        <ChartCard
          title={t("chartsPage.cards.doughnut.title")}
          description={t("chartsPage.cards.doughnut.description")}
        >
          <DoughnutChart />
        </ChartCard>

        <ChartCard
          title={t("chartsPage.cards.radar.title")}
          description={t("chartsPage.cards.radar.description")}
        >
          <RadarChart />
        </ChartCard>

        <ChartCard
          title={t("chartsPage.cards.polarArea.title")}
          description={t("chartsPage.cards.polarArea.description")}
        >
          <PolarAreaChart />
        </ChartCard>

        <ChartCard
          title={t("chartsPage.cards.gauge.title")}
          description={t("chartsPage.cards.gauge.description")}
        >
          <GaugeChart />
        </ChartCard>

        <ChartCard
          title={t("chartsPage.cards.semiGauge.title")}
          description={t("chartsPage.cards.semiGauge.description")}
        >
          <SemiGaugeChart />
        </ChartCard>

        <ChartCard
          title={t("chartsPage.cards.statisticsCard.title")}
          description={t("chartsPage.cards.statisticsCard.description")}
        >
          <StatisticsCardShowcase />
        </ChartCard>

        <ChartCard
          title={t("chartsPage.cards.progress.title")}
          description={t("chartsPage.cards.progress.description")}
        >
          <ProgressShowcase />
        </ChartCard>
      </section>
    </main>
  );
}
