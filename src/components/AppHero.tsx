import { useTranslation } from "react-i18next";

export function AppHero() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage === "ar" ? "ar" : "en";
  const direction = i18n.dir(language) as "ltr" | "rtl";

  return (
    <section className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {t("appHero.eyebrow")}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {t("appHero.title")}
          </h1>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">{t("appHero.description")}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:w-[24rem]">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-medium text-emerald-900">{t("appHero.packageSource.label")}</p>
            <p className="mt-1 text-sm text-emerald-800">{t("appHero.packageSource.description")}</p>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-medium text-sky-900">{t("appHero.styleSource.label")}</p>
            <p className="mt-1 text-sm text-sky-800">{t("appHero.styleSource.description")}</p>
          </div>
          <div className="sm:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm font-medium text-slate-900">{t("appHero.navigationMove.label")}</p>
                <p className="mt-1 text-sm text-slate-600">{t("appHero.navigationMove.description")}</p>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-white bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {t("appHero.navigationMove.languageLabel")}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-900">
                    {t(`shell.language.options.${language}`)}
                  </p>
                </div>
                <div className="rounded-2xl border border-white bg-white px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {t("appHero.navigationMove.directionLabel")}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-900">
                    {t(`appHero.directions.${direction}`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
