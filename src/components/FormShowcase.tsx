import { useState } from "react";
import { Button } from "@artifact/ui-lib/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import { DatePicker } from "@artifact/ui-lib/date-picker";
import { DataCombobox, type ComboboxDataItem } from "@artifact/ui-lib/data-combobox";
import { TextAreaField } from "@artifact/ui-lib/text-area-field";
import { TextField } from "@artifact/ui-lib/text-field";
import { useTranslation } from "react-i18next";

export function FormShowcase() {
  const { t } = useTranslation();
  const [name, setName] = useState("Integration Tester");
  const [email, setEmail] = useState("tester@example.com");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [team, setTeam] = useState("platform");
  const [notes, setNotes] = useState("Verify spacing, focus rings, dark surfaces, and overlay behavior.");
  const teamOptions: readonly ComboboxDataItem<{ label: string }>[] = [
    { id: "design", value: t("form.teams.design"), label: t("form.teams.design") },
    { id: "platform", value: t("form.teams.platform"), label: t("form.teams.platform") },
    { id: "qa", value: t("form.teams.qa"), label: t("form.teams.qa") },
    { id: "ops", value: t("form.teams.ops"), label: t("form.teams.ops") },
  ];

  return (
    <Card className="border-slate-200/80 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
          {t("form.title")}
        </CardTitle>
        <CardDescription className="text-sm leading-6 text-slate-600">
          {t("form.description")}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <TextField
            label={t("form.fullName")}
            placeholder={t("form.fullNamePlaceholder")}
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
          />
          <TextField
            label={t("form.email")}
            type="email"
            placeholder={t("form.emailPlaceholder")}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            state={email.includes("@") ? undefined : "error"}
            message={email.includes("@") ? t("form.emailValid") : t("form.emailInvalid")}
            fullWidth
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <DataCombobox
            label={t("form.team")}
            data={teamOptions}
            value={team}
            onValueChange={(value) => setTeam(Array.isArray(value) ? value[0] ?? "platform" : value ?? "platform")}
            placeholder={t("form.teamPlaceholder")}
            searchable={false}
            clearable
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">{t("form.reviewDate")}</label>
            <DatePicker
              value={selectedDate}
              onChange={setSelectedDate}
              placeholder={t("form.reviewDatePlaceholder")}
            />
          </div>
        </div>

        <TextAreaField
          label={t("form.qaNotes")}
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          rows={5}
          message={t("form.qaNotesMessage")}
          placeholder={t("form.qaNotesPlaceholder")}
        />
      </CardContent>

      <CardFooter className="flex flex-col items-stretch gap-4 md:flex-row md:items-end md:justify-between">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <strong className="text-slate-800">{t("form.preview")}</strong> {name || t("form.fallbacks.name")} |{" "}
          {email || t("form.fallbacks.email")} | {team || t("form.fallbacks.team")} |{" "}
          {selectedDate ? selectedDate.toDateString() : t("form.fallbacks.date")}
        </div>
        <Button variant="outline" color="secondary" onClick={() => setSelectedDate(new Date())}>
          {t("form.resetDate")}
        </Button>
      </CardFooter>
    </Card>
  );
}
