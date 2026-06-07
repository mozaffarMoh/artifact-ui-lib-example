import { useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@artifact/ui-lib";
import { Header } from "@artifact/ui-lib/header";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppShellSidebar } from "./components/AppShellSidebar";
import { ChartsPage } from "./pages/ChartsPage";
import { HomePage } from "./pages/HomePage";
import { OtherTestsPage } from "./pages/OtherTestsPage.tsx";

function App() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const language = i18n.resolvedLanguage === "ar" ? "ar" : "en";
  const direction = i18n.dir(language) as "ltr" | "rtl";

  const breadcrumbItems =
    location.pathname === "/charts"
      ? [
          {
            href: "/",
            label: t("shell.navigation.items.overview"),
          },
          {
            label: t("shell.navigation.items.charts"),
          },
        ]
      : location.pathname === "/other-tests"
        ? [
            {
              href: "/",
              label: t("shell.navigation.items.overview"),
            },
            {
              label: t("shell.navigation.items.otherTests"),
            },
          ]
        : [
            {
              label: t("shell.navigation.items.overview"),
            },
          ];

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

            <div className="rounded-3xl border border-slate-200/80 bg-white/75 px-5 py-4 shadow-[0_16px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl">
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbItems.map((item, index) => {
                    const isLast = index === breadcrumbItems.length - 1;

                    return (
                      <BreadcrumbItem key={`${item.label}-${index}`}>
                        {item.href && !isLast ? (
                          <BreadcrumbLink asChild>
                            <Link to={item.href}>{item.label}</Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        )}
                        {!isLast ? <BreadcrumbSeparator /> : null}
                      </BreadcrumbItem>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/charts" element={<ChartsPage />} />
              <Route path="/other-tests" element={<OtherTestsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
