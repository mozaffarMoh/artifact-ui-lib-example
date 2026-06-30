import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Skeleton,
  Status,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
} from "@artifact/ui-lib";
import { Activity, CircleAlert, Clock3, Info, Layers3 } from "lucide-react";
import { useTranslation } from "react-i18next";

import { CarouselShowcase } from "../components/CarouselShowcase";

export function OtherTestsPage() {
  const { t } = useTranslation();

  const statusItems = [
    { key: "ready", tone: "success" as const, icon: <Activity className="size-4" /> },
    { key: "review", tone: "info" as const, icon: <Info className="size-4" /> },
    { key: "queued", tone: "warning" as const, icon: <Clock3 className="size-4" /> },
    { key: "blocked", tone: "error" as const, icon: <CircleAlert className="size-4" /> },
  ];

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
              <TabsTrigger value="states">
                {t("otherTestsPage.tabs.items.states.label")}
              </TabsTrigger>
              <TabsTrigger value="notes">
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

      <section className="grid gap-6 xl:grid-cols-2">
        <article className="rounded-[28px] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
            {t("otherTestsPage.status.eyebrow")}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            {t("otherTestsPage.status.title")}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t("otherTestsPage.status.description")}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {statusItems.map(({ key, tone, icon }) => (
              <Status key={key} tone={tone} size="lg" className="inline-flex items-center gap-2">
                {icon}
                {t(`otherTestsPage.status.items.${key}`)}
              </Status>
            ))}
          </div>

          <div className="mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-slate-50/80 p-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-slate-950">
                {t("otherTestsPage.status.notes.hierarchyTitle")}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("otherTestsPage.status.notes.hierarchyDescription")}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">
                {t("otherTestsPage.status.notes.toneTitle")}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {t("otherTestsPage.status.notes.toneDescription")}
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-[28px] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
            {t("otherTestsPage.skeleton.eyebrow")}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            {t("otherTestsPage.skeleton.title")}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t("otherTestsPage.skeleton.description")}</p>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
            <div className="flex items-start gap-4">
              <Skeleton variant="circle" size="xl" width={56} height={56} />
              <div className="min-w-0 flex-1 space-y-3">
                <Skeleton variant="text" size="lg" width="42%" />
                <Skeleton count={3} lastLineWidth="68%" variant="text" size="sm" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Skeleton variant="block" size="md" height={88} className="rounded-2xl" />
              <Skeleton variant="block" size="md" height={88} className="rounded-2xl" />
              <Skeleton variant="block" size="md" height={88} className="rounded-2xl" animated={false} />
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-600">{t("otherTestsPage.skeleton.note")}</p>
        </article>

        <article className="rounded-[28px] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl xl:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
            {t("otherTestsPage.tooltip.eyebrow")}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            {t("otherTestsPage.tooltip.title")}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t("otherTestsPage.tooltip.description")}</p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    {t("otherTestsPage.tooltip.cards.default.title")}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t("otherTestsPage.tooltip.cards.default.description")}
                  </p>
                </div>
                <Tooltip title={t("otherTestsPage.tooltip.cards.default.content")}>
                  <Button variant="outline" color="secondary">
                    {t("otherTestsPage.tooltip.trigger")}
                  </Button>
                </Tooltip>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    {t("otherTestsPage.tooltip.cards.arrow.title")}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t("otherTestsPage.tooltip.cards.arrow.description")}
                  </p>
                </div>
                <Tooltip
                  showArrow
                  title={t("otherTestsPage.tooltip.cards.arrow.content")}
                  contentProps={{ side: "top", showNotch: false }}
                >
                  <Button variant="soft" color="info">
                    {t("otherTestsPage.tooltip.trigger")}
                  </Button>
                </Tooltip>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    {t("otherTestsPage.tooltip.cards.rich.title")}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t("otherTestsPage.tooltip.cards.rich.description")}
                  </p>
                </div>
                <Tooltip
                  showArrow
                  title={
                    <div className="space-y-1">
                      <div className="font-semibold">
                        {t("otherTestsPage.tooltip.cards.rich.contentTitle")}
                      </div>
                      <div>{t("otherTestsPage.tooltip.cards.rich.contentBody")}</div>
                    </div>
                  }
                  contentProps={{ side: "bottom", align: "end" }}
                >
                  <Button variant="ghost" color="primary" className="inline-flex items-center gap-2">
                    <Layers3 className="size-4" />
                    {t("otherTestsPage.tooltip.cards.rich.trigger")}
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-[28px] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-700">
            {t("otherTestsPage.accordion.eyebrow")}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            {t("otherTestsPage.accordion.title")}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t("otherTestsPage.accordion.description")}</p>

          <div className="mt-6 grid gap-4">
            <Accordion type="single" collapsible variant="contained" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>{t("otherTestsPage.accordion.items.contained.title")}</AccordionTrigger>
                <AccordionContent>
                  {t("otherTestsPage.accordion.items.contained.description")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>{t("otherTestsPage.accordion.items.keyboard.title")}</AccordionTrigger>
                <AccordionContent>
                  {t("otherTestsPage.accordion.items.keyboard.description")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="multiple" variant="separated" className="mt-2">
              <AccordionItem value="item-a">
                <AccordionTrigger>{t("otherTestsPage.accordion.items.separated.title")}</AccordionTrigger>
                <AccordionContent>
                  {t("otherTestsPage.accordion.items.separated.description")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-b">
                <AccordionTrigger>{t("otherTestsPage.accordion.items.states.title")}</AccordionTrigger>
                <AccordionContent>{t("otherTestsPage.accordion.items.states.description")}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </article>

        <CarouselShowcase />
      </section>
    </main>
  );
}
