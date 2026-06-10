import {
  Carousel,
  CarouselAction,
  CarouselCard,
  CarouselCardFooter,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@artifact/ui-lib";
import { useTranslation } from "react-i18next";

import { carouselItems } from "../constants/carouselItems";

export function CarouselShowcase() {
  const { t } = useTranslation();

  return (
    <article className="rounded-[28px] border border-slate-200/80 bg-white/88 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl xl:col-span-2">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-700">
        {t("otherTestsPage.carousel.eyebrow")}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {t("otherTestsPage.carousel.title")}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
        {t("otherTestsPage.carousel.description")}
      </p>

      <div className="mt-6 rounded-4xl bg-stone-lighter p-4 sm:p-6 lg:p-8">
        <Carousel
          opts={{
            align: "end",
            containScroll: "keepSnaps",
            loop: false,
          }}
          setApi={() => {}}
          variant="expandable"
        >
          <CarouselContent className="ms-0 items-stretch">
            {carouselItems.map((item) => (
              <CarouselItem key={item.id} className="ps-3 pe-0 first:ps-0">
                <div className="h-full min-h-88">
                  <CarouselCard imageAlt={item.label} imageSrc={item.imageSrc} selectLabel={item.label}>
                    <CarouselCardFooter className="flex flex-row-reverse">
                      <div className="max-w-xl text-start text-white">
                        <p className="text-2xl font-semibold" data-slot="carousel-title">
                          {item.title}
                        </p>
                      </div>
                      <CarouselAction onClick={() => console.log(item.id)}>{item.actionLabel}</CarouselAction>
                    </CarouselCardFooter>
                  </CarouselCard>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">{t("otherTestsPage.carousel.note")}</p>
    </article>
  );
}
