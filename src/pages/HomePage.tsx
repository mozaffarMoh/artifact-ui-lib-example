import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppHero } from "../components/AppHero";
import { ButtonShowcase } from "../components/ButtonShowcase";
import { FeedbackShowcase } from "../components/FeedbackShowcase";
import { FormShowcase } from "../components/FormShowcase";
import { IconLibraryTest } from "../components/IconLibraryTest";
import { IntegrationChecklist } from "../components/IntegrationChecklist";
import { SelectionShowcase } from "../components/SelectionShowcase";
import { TableShowcase } from "../components/TableShowcase";

export function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = (location.state as { scrollTo?: string } | null)?.scrollTo;

    if (!sectionId) {
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    navigate(location.pathname, { replace: true, state: null });
  }, [location.pathname, location.state, navigate]);

  return (
    <main className="flex flex-col gap-6">
      <section id="overview">
        <AppHero />
      </section>

      <section id="icons">
        <IconLibraryTest />
      </section>

      <section id="actions" className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <ButtonShowcase />
        <IntegrationChecklist />
      </section>

      <section id="forms" className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <FormShowcase />
        <SelectionShowcase />
      </section>

      <section id="table">
        <TableShowcase />
      </section>

      <section id="feedback">
        <FeedbackShowcase />
      </section>
    </main>
  );
}
