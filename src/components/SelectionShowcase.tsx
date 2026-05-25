import { useState } from "react";
import { Button } from "@artifact/ui-lib/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import { Checkbox } from "@artifact/ui-lib/checkbox";
import { RadioGroup, RadioGroupItem } from "@artifact/ui-lib/radio";
import { Slider } from "@artifact/ui-lib/slider";
import { Switch } from "@artifact/ui-lib/switch";
import { useTranslation } from "react-i18next";

export function SelectionShowcase() {
  const { t } = useTranslation();
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(false);
  const [releaseTrack, setReleaseTrack] = useState("stable");
  const [qualityScore, setQualityScore] = useState([82]);
  const [publishReady, setPublishReady] = useState(true);

  return (
    <Card className="border-slate-200/80 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
          {t("selection.title")}
        </CardTitle>
        <CardDescription className="text-sm leading-6 text-slate-600">
          {t("selection.description")}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Checkbox
            label={t("selection.emailAlerts.label")}
            message={t("selection.emailAlerts.message")}
            checked={emailAlerts}
            onCheckedChange={(checked) => setEmailAlerts(checked === true)}
          />
          <Checkbox
            label={t("selection.pushAlerts.label")}
            message={t("selection.pushAlerts.message")}
            checked={pushAlerts}
            onCheckedChange={(checked) => setPushAlerts(checked === true)}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-3 text-sm font-medium text-slate-800">{t("selection.releaseTrack")}</p>
            <RadioGroup value={releaseTrack} onValueChange={setReleaseTrack} className="grid gap-3">
              <RadioGroupItem
                value="stable"
                label={t("selection.tracks.stable.label")}
                message={t("selection.tracks.stable.message")}
              />
              <RadioGroupItem
                value="beta"
                label={t("selection.tracks.beta.label")}
                message={t("selection.tracks.beta.message")}
              />
              <RadioGroupItem
                value="canary"
                label={t("selection.tracks.canary.label")}
                message={t("selection.tracks.canary.message")}
              />
            </RadioGroup>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <Slider
              label={t("selection.qualityScore")}
              min={0}
              max={100}
              step={1}
              value={qualityScore}
              onValueChange={setQualityScore}
              showValueLabel
              formatValueLabel={(value) => `${value}%`}
              message={t("selection.qualityMessage")}
            />
          </div>
        </div>

        <Switch
          label={t("selection.publishReady.label")}
          message={t("selection.publishReady.message")}
          checked={publishReady}
          onCheckedChange={setPublishReady}
        />
      </CardContent>

      <CardFooter className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          {t("selection.currentState", {
            track: t(`selection.tracks.${releaseTrack}.label`),
            score: qualityScore[0],
            ready: publishReady ? t("selection.ready.yes") : t("selection.ready.no"),
          })}
        </div>
        <Button variant="soft" color="secondary" onClick={() => setQualityScore([100])}>
          {t("selection.maxOutScore")}
        </Button>
      </CardFooter>
    </Card>
  );
}
