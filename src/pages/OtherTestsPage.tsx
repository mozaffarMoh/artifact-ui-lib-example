import { Tabs, TabsContent, TabsList, TabsTrigger } from "@artifact/ui-lib";
import { useTranslation } from "react-i18next";

export function OtherTestsPage() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col gap-6">
      <section className="rounded-4xl border border-slate-200/80 bg-white/88 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
          {t("otherTestsPage.eyebrow")}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          {t("otherTestsPage.title")}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{t("otherTestsPage.description")}</p>
      </section>

      <section>
        <article className="rounded-[28px] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
            {t("otherTestsPage.tabs.eyebrow")}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            {t("otherTestsPage.tabs.title")}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t("otherTestsPage.tabs.description")}</p>

          <Tabs defaultValue="overview" className="mt-6 gap-5">
            <TabsList>
              <TabsTrigger value="overview">{t("otherTestsPage.tabs.items.overview.label")}</TabsTrigger>
              <TabsTrigger value="states" variant="soft">
                {t("otherTestsPage.tabs.items.states.label")}
              </TabsTrigger>
              <TabsTrigger value="notes" variant="solid">
                {t("otherTestsPage.tabs.items.notes.label")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                <h3 className="text-lg font-semibold text-slate-950">
                  {t("otherTestsPage.tabs.items.overview.title")}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {t("otherTestsPage.tabs.items.overview.description")}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="states">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                  <p className="text-sm font-semibold text-slate-950">
                    {t("otherTestsPage.tabs.items.states.cards.focus.title")}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t("otherTestsPage.tabs.items.states.cards.focus.description")}
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                  <p className="text-sm font-semibold text-slate-950">
                    {t("otherTestsPage.tabs.items.states.cards.direction.title")}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t("otherTestsPage.tabs.items.states.cards.direction.description")}
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notes">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-5">
                <h3 className="text-lg font-semibold text-emerald-950">
                  {t("otherTestsPage.tabs.items.notes.title")}
                </h3>
                <p className="mt-2 text-sm leading-6 text-emerald-900/80">
                  {t("otherTestsPage.tabs.items.notes.description")}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </article>
      </section>
    </main>
  );
}
