import { useState } from "react";
import { Button } from "@artifact/ui-lib/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import { DataTable } from "@artifact/ui-lib/data-table";
import { useTranslation } from "react-i18next";

type ComponentRow = {
  id: string;
  component: string;
  owner: string;
  locale: string;
  status: "ready" | "review" | "blocked";
  qaScore: number;
  lastUpdate: string;
};

const statusClasses: Record<ComponentRow["status"], string> = {
  ready: "bg-emerald-100 text-emerald-800 border-emerald-200",
  review: "bg-amber-100 text-amber-800 border-amber-200",
  blocked: "bg-rose-100 text-rose-800 border-rose-200",
};

export function TableShowcase() {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir(i18n.resolvedLanguage === "ar" ? "ar" : "en") as "ltr" | "rtl";
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);
  const updateSelectedRowIds = (nextIds: string[]) => {
    setSelectedRowIds((currentIds) => {
      if (currentIds.length === nextIds.length && currentIds.every((id, index) => id === nextIds[index])) {
        return currentIds;
      }

      return nextIds;
    });
  };
  const componentRows: ComponentRow[] = [
    {
      id: "btn-primary",
      component: t("table.components.button"),
      owner: t("table.owners.design"),
      locale: t("table.locales.global"),
      status: "ready",
      qaScore: 97,
      lastUpdate: "2026-05-24",
    },
    {
      id: "form-select",
      component: t("table.components.select"),
      owner: t("table.owners.platform"),
      locale: t("table.locales.bilingual"),
      status: "review",
      qaScore: 88,
      lastUpdate: "2026-05-22",
    },
    {
      id: "calendar-picker",
      component: t("table.components.datePicker"),
      owner: t("table.owners.qa"),
      locale: t("table.locales.arabic"),
      status: "review",
      qaScore: 84,
      lastUpdate: "2026-05-21",
    },
    {
      id: "feedback-toast",
      component: t("table.components.toast"),
      owner: t("table.owners.ops"),
      locale: t("table.locales.global"),
      status: "ready",
      qaScore: 93,
      lastUpdate: "2026-05-20",
    },
    {
      id: "table-grid",
      component: t("table.components.dataTable"),
      owner: t("table.owners.platform"),
      locale: t("table.locales.bilingual"),
      status: "blocked",
      qaScore: 61,
      lastUpdate: "2026-05-19",
    },
    {
      id: "overlay-dialog",
      component: t("table.components.dialog"),
      owner: t("table.owners.design"),
      locale: t("table.locales.global"),
      status: "ready",
      qaScore: 95,
      lastUpdate: "2026-05-18",
    },
  ];
  const selectedRows = componentRows.filter((row) => selectedRowIds.includes(row.id));

  return (
    <Card className="border-slate-200/80 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
          {t("table.title")}
        </CardTitle>
        <CardDescription className="text-sm leading-6 text-slate-600">
          {t("table.description")}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          {t("table.currentDirection", {
            direction: t(`table.direction.${direction}`),
          })}
        </div>

        <DataTable
          data={componentRows}
          tableColumns={[
            {
              key: "component",
              header: t("table.columns.component"),
              sortable: true,
            },
            {
              key: "owner",
              header: t("table.columns.owner"),
              sortable: true,
            },
            {
              key: "locale",
              header: t("table.columns.locale"),
            },
            {
              key: "status",
              header: t("table.columns.status"),
              sortable: true,
              cell: ({ value }) => {
                const status = value as ComponentRow["status"];
                return (
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusClasses[status]}`}
                  >
                    {t(`table.status.${status}`)}
                  </span>
                );
              },
            },
            {
              key: "qaScore",
              header: t("table.columns.qaScore"),
              sortable: true,
              cell: ({ value }) => <span className="font-medium text-slate-800">{String(value)}%</span>,
            },
            {
              key: "lastUpdate",
              header: t("table.columns.lastUpdate"),
              sortable: true,
            },
          ]}
          search={{
            mode: "client",
            placeholder: t("table.searchPlaceholder"),
          }}
          sorting={{
            mode: "client",
            texts: {
              sortButton: t("table.sorting.sortButton"),
              ascending: t("table.sorting.ascending"),
              descending: t("table.sorting.descending"),
              removeSort: t("table.sorting.removeSort"),
            },
          }}
          pagination={{
            mode: "client",
            pageSize: 5,
            pageSizeOptions: [5, 10],
            texts: {
              firstPage: t("table.pagination.firstPage"),
              previous: t("table.pagination.previous"),
              next: t("table.pagination.next"),
              lastPage: t("table.pagination.lastPage"),
              pageSize: t("table.pagination.pageSize"),
              goToPage: t("table.pagination.goToPage"),
              goToPageButton: t("table.pagination.goToPageButton"),
              pageOf: (page, pageCount) => t("table.pagination.pageOf", { page, pageCount }),
              showing: ({ from, to, total }) => t("table.pagination.showing", { from, to, total }),
            },
          }}
          density="default"
          enableRowSelection
          onRowSelectionChange={(rows) => updateSelectedRowIds(rows.map((row) => row.id))}
          texts={{
            selectAllRows: t("table.texts.selectAllRows"),
          }}
          renderSelectedActions={(rows) => (
            <Button variant="soft" color="secondary" size="small">
              {t("table.selectedCount", { count: rows.length })}
            </Button>
          )}
          onRowClick={(row) => updateSelectedRowIds([row.id])}
          rowClassName={(row) =>
            row.status === "blocked" ? "bg-rose-50/60" : row.status === "review" ? "bg-amber-50/50" : ""
          }
          emptyStateMessage={t("table.emptyState")}
          searchEmptyStateMessage={t("table.searchEmptyState")}
        />

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          {t("table.selectedRows")}{" "}
          {selectedRows.length > 0 ? selectedRows.map((row) => row.component).join(", ") : t("table.none")}
        </div>
      </CardContent>
    </Card>
  );
}
