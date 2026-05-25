import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import { useTranslation } from "react-i18next";

export function IntegrationChecklist() {
  const { t } = useTranslation();
  const checkpoints = [
    t("checklist.items.buttons"),
    t("checklist.items.fields"),
    t("checklist.items.table"),
    t("checklist.items.feedback"),
    t("checklist.items.direction"),
    t("checklist.items.state"),
  ];

  return (
    <Card className="h-full border-slate-200/80 bg-slate-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight">{t("checklist.title")}</CardTitle>
        <CardDescription className="text-sm leading-6 text-slate-300">
          {t("checklist.description")}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-6 text-slate-300">
        {checkpoints.map((checkpoint) => (
          <div
            key={checkpoint}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
          >
            {checkpoint}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
