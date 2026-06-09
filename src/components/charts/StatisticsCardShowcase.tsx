import { StatisticsCard } from "@artifact/ui-lib";
import { Activity, ShieldCheck, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

function StatisticsCardShowcase() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <StatisticsCard
        description={t("chartsPage.examples.statistics.revenue.description")}
        icon={<TrendingUp className="size-6" />}
        title={t("chartsPage.examples.statistics.revenue.title")}
        trend={t("chartsPage.examples.statistics.revenue.trend")}
        trendTone="positive"
        value={t("chartsPage.examples.statistics.revenue.value")}
      />

      <StatisticsCard
        description={t("chartsPage.examples.statistics.conversion.description")}
        icon={<Activity className="size-6" />}
        title={t("chartsPage.examples.statistics.conversion.title")}
        trend={t("chartsPage.examples.statistics.conversion.trend")}
        trendTone="positive"
        value={t("chartsPage.examples.statistics.conversion.value")}
      />

      <StatisticsCard
        description={t("chartsPage.examples.statistics.reliability.description")}
        icon={<ShieldCheck className="size-6" />}
        title={t("chartsPage.examples.statistics.reliability.title")}
        trend={t("chartsPage.examples.statistics.reliability.trend")}
        trendTone="neutral"
        value={t("chartsPage.examples.statistics.reliability.value")}
      />
    </div>
  );
}

export default StatisticsCardShowcase;
