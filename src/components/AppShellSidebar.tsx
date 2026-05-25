import { Button } from "@artifact/ui-lib/button";
import { Sidebar, type SidebarItem } from "@artifact/ui-lib/sidebar";
import {
  Blocks,
  Image,
  Languages,
  LayoutPanelTop,
  ListChecks,
  MessageSquareMore,
  MousePointerClick,
  PanelsTopLeft,
  Rows3,
  SquarePen,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type AppShellSidebarProps = {
  direction: "ltr" | "rtl";
};

const sectionIds = ["overview", "icons", "actions", "forms", "table", "feedback"] as const;

const sidebarIcons = {
  overview: LayoutPanelTop,
  icons: Image,
  actions: MousePointerClick,
  forms: SquarePen,
  table: Rows3,
  feedback: MessageSquareMore,
  headerTest: PanelsTopLeft,
  sidebarTest: Blocks,
  tableTest: Languages,
  ready: ListChecks,
} as const;

export function AppShellSidebar({ direction }: AppShellSidebarProps) {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage === "ar" ? "ar" : "en";
  const [activeItemId, setActiveItemId] = useState<string>("overview");

  const scrollToSection = (sectionId: (typeof sectionIds)[number]) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const items: SidebarItem[] = [
    ...sectionIds.map((sectionId) => ({
      id: sectionId,
      label: t(`shell.navigation.items.${sectionId}`),
      collapsedLabel: t(`shell.navigation.short.${sectionId}`),
      icon: (() => {
        const Icon = sidebarIcons[sectionId];
        return <Icon className="size-4" />;
      })(),
      active: activeItemId === sectionId,
      onSelect: () => {
        setActiveItemId(sectionId);
        scrollToSection(sectionId);
      },
    })),
    {
      id: "header-test",
      label: t("shell.libraryTests.header"),
      collapsedLabel: t("shell.libraryTests.short.header"),
      icon: <PanelsTopLeft className="size-4" />,
      active: activeItemId === "header-test",
      badge: <ListChecks className="size-4" />,
      onSelect: () => {
        setActiveItemId("header-test");
        scrollToSection("overview");
      },
    },
    {
      id: "sidebar-test",
      label: t("shell.libraryTests.sidebar"),
      collapsedLabel: t("shell.libraryTests.short.sidebar"),
      icon: <Blocks className="size-4" />,
      active: activeItemId === "sidebar-test",
      badge: <ListChecks className="size-4" />,
      onSelect: () => {
        setActiveItemId("sidebar-test");
        scrollToSection("overview");
      },
    },
    {
      id: "table-test",
      label: t("shell.libraryTests.i18n"),
      collapsedLabel: t("shell.libraryTests.short.i18n"),
      icon: <Languages className="size-4" />,
      active: activeItemId === "table-test",
      badge: direction.toUpperCase(),
      onSelect: () => {
        setActiveItemId("table-test");
        scrollToSection("table");
      },
    },
  ];

  return (
    <Sidebar
      dir={direction}
      side={direction === "rtl" ? "right" : "left"}
      variant="floating"
      items={items}
      className="h-[calc(100vh-2rem)]"
      showCollapseButton
      collapseLabel={t("shell.collapse")}
      expandLabel={t("shell.expand")}
      profileName={t("shell.language.label")}
      profileEmail={t("shell.language.description")}
      profileBadge={language.toUpperCase()}
      profileMenu={
        <div className="grid gap-2 p-1">
          <Button
            fullWidth
            variant={language === "en" ? "solid" : "outline"}
            color={language === "en" ? "primary" : "secondary"}
            onClick={() => void i18n.changeLanguage("en")}
          >
            {t("shell.language.options.en")}
          </Button>
          <Button
            fullWidth
            variant={language === "ar" ? "solid" : "outline"}
            color={language === "ar" ? "primary" : "secondary"}
            onClick={() => void i18n.changeLanguage("ar")}
          >
            {t("shell.language.options.ar")}
          </Button>
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-600">
            {t("shell.language.current", {
              language: t(`shell.language.options.${language}`),
              direction: t(`appHero.directions.${direction}`),
            })}
          </div>
        </div>
      }
      profileMenuContentProps={{ align: direction === "rtl" ? "start" : "end", className: "w-72" }}
    />
  );
}
