import { Progress } from "@artifact/ui-lib";
import { Boxes, CircleCheckBig, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

function ProgressShowcase() {
  const { t } = useTranslation();

  return (
    <Progress
      description={t("chartsPage.examples.progress.description")}
      items={[
        {
          icon: <Boxes className="size-4" />,
          label: t("chartsPage.examples.progress.items.designSystem.label"),
          progress: 78,
          rank: "01",
          value: t("chartsPage.examples.progress.items.designSystem.value"),
        },
        {
          icon: <Wrench className="size-4" />,
          label: t("chartsPage.examples.progress.items.platform.label"),
          progress: 64,
          rank: "02",
          value: t("chartsPage.examples.progress.items.platform.value"),
        },
        {
          icon: <CircleCheckBig className="size-4" />,
          label: t("chartsPage.examples.progress.items.qa.label"),
          progress: 89,
          rank: "03",
          value: t("chartsPage.examples.progress.items.qa.value"),
        },
      ]}
      max={100}
      title={t("chartsPage.examples.progress.title")}
    />
  );
}

export default ProgressShowcase;
