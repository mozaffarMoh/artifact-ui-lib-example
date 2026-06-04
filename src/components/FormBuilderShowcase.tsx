import { useState } from "react";
import { Button } from "@artifact/ui-lib/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@artifact/ui-lib/card";
import {
  FormBuilder,
  type FormBuilderField,
  checkboxField,
  emailField,
  passwordField,
  selectField,
  textareaField,
  useFormBuilder,
} from "@artifact/ui-lib/form-builder";
import { Toaster, toast } from "@artifact/ui-lib/toast";
import { Lock, Mail, ShieldCheck } from "lucide-react";
import AiBookIcon from "@artifact/moi-icons/react/ai-search";
import { useTranslation } from "react-i18next";

type SignupForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  team: string;
  accessReason: string;
  agree: boolean;
};

const TEAM_OPTIONS = [
  { value: "design", labelKey: "formBuilderExample.teams.design" },
  { value: "platform", labelKey: "formBuilderExample.teams.platform" },
  { value: "qa", labelKey: "formBuilderExample.teams.qa" },
  { value: "ops", labelKey: "formBuilderExample.teams.ops" },
] as const;

export function FormBuilderShowcase() {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir(i18n.resolvedLanguage === "ar" ? "ar" : "en") as "ltr" | "rtl";
  const [submittedValues, setSubmittedValues] = useState<SignupForm | null>(null);

  const form = useFormBuilder<SignupForm>({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      team: "platform",
      accessReason: "",
      agree: false,
    },
  });

  const values = form.watch();

  const fields: ReadonlyArray<FormBuilderField<SignupForm, any>> = [
    {
      type: "text",
      name: "fullName",
      label: t("formBuilderExample.fields.fullName.label"),
      placeholder: t("formBuilderExample.fields.fullName.placeholder"),

      startAdornment: <AiBookIcon variant="Bulk" />,
      required: true,
      validation: {
        required: t("formBuilderExample.validation.fullNameRequired"),
        minLength: {
          value: 3,
          message: t("formBuilderExample.validation.fullNameMin"),
        },
      },
    },
    emailField<SignupForm, "email">({
      name: "email",
      label: t("formBuilderExample.fields.email.label"),
      placeholder: t("formBuilderExample.fields.email.placeholder"),
      icon: <Mail className="size-4" />,
      required: true,
      validation: {
        required: t("formBuilderExample.validation.emailRequired"),
      },
    }),
    passwordField<SignupForm, "password">({
      name: "password",
      label: t("formBuilderExample.fields.password.label"),
      placeholder: t("formBuilderExample.fields.password.placeholder"),
      icon: <Lock className="size-4" />,
      helperText: t("formBuilderExample.fields.password.helper"),
      required: true,
      showPasswordStrength: true,
      validation: {
        required: t("formBuilderExample.validation.passwordRequired"),
        minLength: {
          value: 8,
          message: t("formBuilderExample.validation.passwordMin"),
        },
        validate: (value) => /\d/.test(value) || t("formBuilderExample.validation.passwordDigit"),
      },
    }),
    passwordField<SignupForm, "confirmPassword">({
      name: "confirmPassword",
      label: t("formBuilderExample.fields.confirmPassword.label"),
      placeholder: t("formBuilderExample.fields.confirmPassword.placeholder"),
      icon: <ShieldCheck className="size-4" />,
      required: true,
      validation: {
        required: t("formBuilderExample.validation.confirmRequired"),
        validate: (value, allValues) =>
          value === allValues.password || t("formBuilderExample.validation.confirmMatch"),
      },
    }),
    selectField<SignupForm, "team">({
      name: "team",
      label: t("formBuilderExample.fields.team.label"),
      placeholder: t("formBuilderExample.fields.team.placeholder"),
      required: true,
      options: TEAM_OPTIONS.map((option) => ({ value: option.value, label: t(option.labelKey) })),
      validation: {
        required: t("formBuilderExample.validation.teamRequired"),
      },
    }),
    textareaField<SignupForm, "accessReason">({
      name: "accessReason",
      label: t("formBuilderExample.fields.accessReason.label"),
      placeholder: t("formBuilderExample.fields.accessReason.placeholder"),
      helperText: t("formBuilderExample.fields.accessReason.helper"),
      colSpan: "full",
      when: (allValues) => allValues.team === "platform" || allValues.team === "ops",
      showCharacterCount: true,
      validation: {
        validate: (value, allValues) => {
          if (allValues.team !== "platform" && allValues.team !== "ops") {
            return true;
          }

          return value.trim().length >= 20 || t("formBuilderExample.validation.accessReasonMin");
        },
      },
    }),
    checkboxField<SignupForm, "agree">({
      name: "agree",
      label: t("formBuilderExample.fields.agree.label"),
      colSpan: "full",
      validation: {
        validate: (value) => value || t("formBuilderExample.validation.agreeRequired"),
      },
    }),
  ];

  return (
    <>
      <Card className="border-slate-200/80 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold tracking-tight text-slate-950">
            {t("formBuilderExample.title")}
          </CardTitle>
          <CardDescription className="text-sm leading-6 text-slate-600">
            {t("formBuilderExample.description")}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/70 p-4 text-sm leading-6 text-emerald-900">
            {t("formBuilderExample.note")}
          </div>

          <FormBuilder<SignupForm>
            id="signup-form-builder"
            form={form}
            fields={fields}
            columns={{ base: 1, md: 2 }}
            gap={5}
            dir={direction}
            showErrorSummary
            //stickySubmit={{ position: "top", showProgress: true }}
            onSubmit={async (submitted) => {
              setSubmittedValues(submitted);
              toast.success({
                title: t("formBuilderExample.toast.title"),
                description: t("formBuilderExample.toast.description", {
                  name: submitted.fullName,
                  team: t(`formBuilderExample.teams.${submitted.team}`),
                }),
              });
            }}
          >
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-slate-600">
                <p className="font-medium text-slate-900">{t("formBuilderExample.actions.title")}</p>
                <p>{t("formBuilderExample.actions.description")}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button type="button" variant="outline" color="secondary" onClick={() => form.reset()}>
                  {t("formBuilderExample.actions.reset")}
                </Button>
                <Button type="submit" disabled={!form.formState.isValid || form.formState.isSubmitting}>
                  {form.formState.isSubmitting
                    ? t("formBuilderExample.actions.submitting")
                    : t("formBuilderExample.actions.submit")}
                </Button>
              </div>
            </div>
          </FormBuilder>
        </CardContent>

        <CardFooter className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600">
            <p className="font-medium text-slate-900">{t("formBuilderExample.liveState.title")}</p>
            <p className="mt-2">
              {t("formBuilderExample.liveState.name")}:{" "}
              {values.fullName || t("formBuilderExample.fallbacks.empty")}
            </p>
            <p>
              {t("formBuilderExample.liveState.email")}:{" "}
              {values.email || t("formBuilderExample.fallbacks.empty")}
            </p>
            <p>
              {t("formBuilderExample.liveState.team")}:{" "}
              {values.team
                ? t(`formBuilderExample.teams.${values.team}`)
                : t("formBuilderExample.fallbacks.empty")}
            </p>
            <p>
              {t("formBuilderExample.liveState.reason")}:{" "}
              {values.accessReason || t("formBuilderExample.fallbacks.empty")}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
            <p className="font-medium text-slate-900">{t("formBuilderExample.lastSubmission.title")}</p>
            {submittedValues ? (
              <div className="mt-2 space-y-1">
                <p>{submittedValues.fullName}</p>
                <p>{submittedValues.email}</p>
                <p>{t(`formBuilderExample.teams.${submittedValues.team}`)}</p>
                <p>{submittedValues.accessReason || t("formBuilderExample.lastSubmission.noReason")}</p>
              </div>
            ) : (
              <p className="mt-2">{t("formBuilderExample.lastSubmission.empty")}</p>
            )}
          </div>
        </CardFooter>
      </Card>

      <Toaster position={direction === "rtl" ? "top-left" : "top-right"} />
    </>
  );
}
