import { Button } from "@artifact/ui-lib/button";
import { Sidebar, type SidebarItem } from "@artifact/ui-lib/sidebar";
import {
  Blocks,
  ChartColumn,
  Image,
  LayoutPanelTop,
  MessageSquareMore,
  MousePointerClick,
  Rows3,
  SquarePen,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

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
  charts: ChartColumn,
  otherTests: Blocks,
} as const;

export function AppShellSidebar({ direction }: AppShellSidebarProps) {
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage === "ar" ? "ar" : "en";
  const [activeItemId, setActiveItemId] = useState<string>("overview");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: (typeof sectionIds)[number]) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navigateToSection = (sectionId: (typeof sectionIds)[number]) => {
    setActiveItemId(sectionId);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    scrollToSection(sectionId);
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
      active: location.pathname === "/" && activeItemId === sectionId,
      onSelect: () => {
        navigateToSection(sectionId);
      },
    })),
    {
      id: "charts",
      label: t("shell.navigation.items.charts"),
      collapsedLabel: t("shell.navigation.short.charts"),
      icon: <ChartColumn className="size-4" />,
      active: location.pathname === "/charts",
      onSelect: () => {
        setActiveItemId("charts");
        navigate("/charts");
      },
    },
    {
      id: "other-tests",
      label: t("shell.navigation.items.otherTests"),
      collapsedLabel: t("shell.navigation.short.otherTests"),
      icon: <Blocks className="size-4" />,
      active: location.pathname === "/other-tests",
      onSelect: () => {
        setActiveItemId("other-tests");
        navigate("/other-tests");
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
