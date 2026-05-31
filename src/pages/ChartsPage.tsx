import { useTranslation } from "react-i18next";
import BarChart from "../components/charts/BarChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";

function ChartCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
      <div className="h-80">{children}</div>
    </section>
  );
}

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
      </section>
    </main>
  );
}
