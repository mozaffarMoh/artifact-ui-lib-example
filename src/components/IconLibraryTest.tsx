import { MoiIcon } from "@artifact/moi-icons/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import { useTranslation } from "react-i18next";

const iconExamples: Array<{
  key: "home" | "rotate" | "alert";
  name: any;
  primaryColor: string;
  secondaryColor: string;
  panelClassName: string;
}> = [
  {
    key: "home",
    name: "home-04",
    primaryColor: "#0f172a",
    secondaryColor: "#14b8a6",
    panelClassName:
      "border-emerald-200 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.26),transparent_55%),linear-gradient(180deg,#ffffff_0%,#f0fdf4_100%)]",
  },
  {
    key: "rotate",
    name: "3d-rotate",
    primaryColor: "#2563eb",
    secondaryColor: "#22c55e",
    panelClassName:
      "border-sky-200 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.28),transparent_55%),linear-gradient(180deg,#ffffff_0%,#eff6ff_100%)]",
  },
  {
    key: "alert",
    name: "alert-01",
    primaryColor: "#f97316",
    secondaryColor: "#ef4444",
    panelClassName:
      "border-orange-200 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.28),transparent_55%),linear-gradient(180deg,#ffffff_0%,#fff7ed_100%)]",
  },
];

export function IconLibraryTest() {
  const { t } = useTranslation();

  return (
    <Card className="overflow-hidden border-slate-200/80 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <CardHeader className="gap-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
              {t("icons.title")}
            </CardTitle>
            <CardDescription className="max-w-2xl text-sm leading-6 text-slate-600">
              {t("icons.description")}
            </CardDescription>
          </div>

          <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {t("icons.status")}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          {iconExamples.map(({ key, name, primaryColor, secondaryColor, panelClassName }) => (
            <div
              key={name}
              className={`rounded-[28px] border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] ${panelClassName}`}
            >
              <div className="mb-6 flex h-24 items-center justify-center rounded-2xl border border-white/70 bg-white/60 backdrop-blur-sm">
                <MoiIcon
                  name={name}
                  size={68}
                  variant="Duotone"
                  shape="Rounded"
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                />
              </div>

              <div className="space-y-2">
                <p className="text-base font-semibold text-slate-950">{t(`icons.examples.${key}.label`)}</p>
                <p className="text-sm leading-6 text-slate-600">{t(`icons.examples.${key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
          {t("icons.note")}
        </div>
      </CardContent>
    </Card>
  );
}
