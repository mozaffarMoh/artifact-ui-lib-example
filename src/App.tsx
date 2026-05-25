import { useEffect } from "react";
import { Header } from "@artifact/ui-lib/header";
import { useTranslation } from "react-i18next";
import { AppHero } from "./components/AppHero";
import { AppShellSidebar } from "./components/AppShellSidebar";
import { ButtonShowcase } from "./components/ButtonShowcase";
import { FeedbackShowcase } from "./components/FeedbackShowcase";
import { FormShowcase } from "./components/FormShowcase";
import { IntegrationChecklist } from "./components/IntegrationChecklist";
import { SelectionShowcase } from "./components/SelectionShowcase";
import { TableShowcase } from "./components/TableShowcase";
import { MoiIcon } from "@marn.bayan/moi-icons/react";
import { Text } from "@artifact/ui-lib";

function App() {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage === "ar" ? "ar" : "en";
  const direction = i18n.dir(language) as "ltr" | "rtl";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.body.dir = direction;
  }, [direction, language]);

  return (
    <div
      dir={direction}
      className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(208,239,234,0.9),transparent_35%),linear-gradient(180deg,#f7faf7_0%,#edf4f0_100%)] text-slate-900"
    >
      <div className="flex min-h-screen gap-4 p-4">
        <AppShellSidebar direction={direction} />

        <div className="min-w-0 flex-1 py-2">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
            <Header
              dir={direction}
              locale={language}
              showCurrentDate
              showLiveClock
              className="sticky top-4 z-30 rounded-[28px] border border-slate-200/80 bg-white/85 px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:px-6"
              start={
                <div>
                  <p className="text-sm font-semibold text-slate-950">{t("shell.header.title")}</p>
                  <p className="text-xs text-slate-500">{t("shell.header.description")}</p>
                </div>
              }
              end={
                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  {t("shell.header.status")}
                </div>
              }
            />

            <main className="flex flex-col gap-6">
              <section id="overview">
                <AppHero />
              </section>

              <section id="icons" className="bg-secondary">
                <Text variant="body1">Icons</Text>
                <MoiIcon
                  name="advertisiment"
                  className="size-25"
                  variant="Duotone"
                  primaryColor="red"
                  secondaryColor="blue"
                />

                <MoiIcon
                  className="size-20"
                  name="3d-rotate"
                  variant="Duotone"
                  shape="Rounded"
                  primaryColor={"blue"}
                  secondaryColor={"green"}
                />
              </section>

              <section id="actions" className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <ButtonShowcase />
                <IntegrationChecklist />
              </section>

              <section id="forms" className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
                <FormShowcase />
                <SelectionShowcase />
              </section>

              <section id="table">
                <TableShowcase />
              </section>

              <section id="feedback">
                <FeedbackShowcase />
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
