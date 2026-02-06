import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomeHeroCarousel({ slides = [] }) {
  if (!slides.length) return null;

  return (
    <section className="w-full bg-light-gray-3">
      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:py-10 lg:py-12">
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          loop
          speed={500}
          autoplay={{ delay: 5000, disableOnInteraction: false, enabled: true }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              {/* Container do slide */}
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
                {/* Texto */}
                <div className="max-w-xl">
                  <p className="text-warning text-sm font-semibold">
                    {slide.tag}
                  </p>

                  <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-dark-gray">
                    {slide.title}
                  </h1>

                  <p className="mt-5 sm:mt-6 max-w-md text-sm sm:text-base text-light-gray">
                    {slide.description}
                  </p>

                  <button className="mt-7 sm:mt-8 w-full sm:w-auto rounded bg-primary px-10 py-3 text-sm font-bold text-white hover:opacity-90">
                    {slide.cta}
                  </button>
                </div>

                <div className="relative overflow-hidden flex justify-center lg:justify-end">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading="lazy"
                    className="
                      w-full
                      max-w-[520px]
                      sm:max-w-[640px]
                      lg:max-w-[760px]
                      object-contain
                      translate-y-2
                      sm:translate-y-6
                      lg:translate-y-6
                      sm:translate-x-4
                      lg:translate-x-6
                      sm:-rotate-6
                      lg:-rotate-12
                    "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
