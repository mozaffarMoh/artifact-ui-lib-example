import { Button } from "@artifact/ui-lib/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import { Tooltip } from "@artifact/ui-lib/tooltip";
import { useTranslation } from "react-i18next";

export function ButtonShowcase() {
  const { t } = useTranslation();
  const buttonExamples = [
    { label: t("buttons.examples.primary"), color: "primary" as const },
    { label: t("buttons.examples.success"), color: "success" as const },
    { label: t("buttons.examples.warning"), color: "warning" as const },
    { label: t("buttons.examples.info"), color: "info" as const },
    { label: t("buttons.examples.errorOutline"), color: "error" as const, variant: "outline" as const },
    { label: t("buttons.examples.softSecondary"), color: "secondary" as const, variant: "soft" as const },
  ];

  return (
    <Card className="h-full border-slate-200/80 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
          {t("buttons.title")}
        </CardTitle>
        <CardDescription className="text-sm leading-6 text-slate-600">
          {t("buttons.description")}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-3">
          {buttonExamples.map(({ label, color, variant }) => (
            <Button key={label} color={color} variant={variant}>
              {label}
            </Button>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <Button variant="ghost" color="secondary">
            {t("buttons.examples.ghost")}
          </Button>
          <Button variant="link" color="primary">
            {t("buttons.examples.link")}
          </Button>
          <Tooltip title={t("buttons.tooltip")}>
            <Button variant="outline" color="info">
              {t("buttons.examples.hover")}
            </Button>
          </Tooltip>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <Button loading loadingText={t("buttons.examples.savingPreview")} color="primary">
            {t("buttons.examples.saveDraft")}
          </Button>
          <Button elevation="floating" rounded="full" color="success">
            {t("buttons.examples.floating")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
