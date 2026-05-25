import { useState } from "react";
import { Button } from "@artifact/ui-lib/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@artifact/ui-lib/dialog";
import { Toaster, toast } from "@artifact/ui-lib/toast";
import { useTranslation } from "react-i18next";

export function FeedbackShowcase() {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir(i18n.resolvedLanguage === "ar" ? "ar" : "en") as "ltr" | "rtl";
  const [dialogOpen, setDialogOpen] = useState(false);

  const openReviewDialog = () => {
    setDialogOpen(true);
    toast.info({
      title: t("feedback.toasts.reviewOpenedTitle"),
      description: t("feedback.toasts.reviewOpenedDescription"),
    });
  };

  const approveReview = () => {
    setDialogOpen(false);
    toast.success({
      title: t("feedback.toasts.successTitle"),
      description: t("feedback.toasts.successDescription"),
    });
  };

  return (
    <>
      <Card className="border-slate-200/80 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
            {t("feedback.title")}
          </CardTitle>
          <CardDescription className="text-sm leading-6 text-slate-600">
            {t("feedback.description")}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            {t("feedback.notice")}
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-3">
          <Button onClick={openReviewDialog}>{t("feedback.openReviewDialog")}</Button>
          <Button
            variant="outline"
            color="secondary"
            onClick={() =>
              toast.warning({
                title: t("feedback.toasts.warningTitle"),
                description: t("feedback.toasts.warningDescription"),
              })
            }
          >
            {t("feedback.triggerWarningToast")}
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent size="md">
          <DialogHeader>
            <DialogTitle>{t("feedback.dialog.title")}</DialogTitle>
            <DialogDescription>{t("feedback.dialog.description")}</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              {t("feedback.dialog.body")}
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              {t("feedback.dialog.close")}
            </Button>
            <Button onClick={approveReview}>{t("feedback.dialog.approve")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Toaster position={direction === "rtl" ? "top-left" : "top-right"} />
    </>
  );
}
