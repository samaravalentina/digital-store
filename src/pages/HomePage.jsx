import { useEffect, useState } from "react";

import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import CollectionsHighlight from "../components/CollectionsHighlight/CollectionsHighlight";
import SpecialOffer from "../components/SpecialOffer/SpecialOffer";

import { PRODUCTS } from "../data/products";

import homeSlide from "../assets/tenis-vermelho-nike.png";

import collection1 from "../assets/collection-1.png";
import collection2 from "../assets/collection-2.png";
import collection3 from "../assets/collection-3.png";

export default function HomePage() {

  const slides = [
    {
      tag: "Melhores ofertas personalizadas",
      title: "Queima de estoque Nike 🔥",
      description:
        "Consequat culpa exercitation mollit nisi exceptur do do tempor laboris eiusmod irure consectetur.",
      image: homeSlide,
      cta: "Ver Ofertas",
    },
    {
      tag: "Novidades da semana",
      title: "Tênis Nike com até 30% OFF",
      description:
        "Aproveite os melhores preços da temporada com entrega rápida e segura.",
      image: homeSlide,
      cta: "Comprar agora",
    },
    {
      tag: "Oferta por tempo limitado",
      title: "Estilo e conforto em um só lugar",
      description:
        "Modelos exclusivos para quem busca performance e estilo no dia a dia.",
      image: homeSlide,
      cta: "Conferir",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  function goToSlide(index) {
    setActiveSlide(index);
  }

  function nextSlide() {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }

  const current = slides[activeSlide];

  return (
    <>

      <section className="w-full bg-light-gray-3 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-4 py-8 sm:py-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="max-w-xl">
              <p className="text-warning text-sm font-semibold">
                {current.tag}
              </p>

              <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-dark-gray">
                {current.title}
              </h1>

              <p className="mt-5 sm:mt-6 max-w-md text-sm sm:text-base text-light-gray">
                {current.description}
              </p>

              <button className="mt-7 sm:mt-8 w-full sm:w-auto rounded bg-primary px-10 py-3 text-sm font-bold text-white hover:opacity-90">
                {current.cta}
              </button>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="h-10 w-10 rounded border border-light-gray-2 bg-white text-dark-gray-2 hover:bg-light-gray-3"
                  aria-label="Slide anterior"
                >
                  ←
                </button>

                <button
                  onClick={nextSlide}
                  className="h-10 w-10 rounded border border-light-gray-2 bg-white text-dark-gray-2 hover:bg-light-gray-3"
                  aria-label="Próximo slide"
                >
                  →
                </button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <img
                src={current.image}
                alt="Produto em destaque"
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
                  sm:translate-x-8
                  lg:translate-x-12
                  sm:-rotate-6
                  lg:-rotate-12
                "
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === activeSlide
                    ? "bg-primary"
                    : "bg-light-gray-2"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Section title="Coleções em destaque" titleAlign="center">
        <div className="mx-auto max-w-[1440px] px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {[collection1, collection2, collection3].map((img, index) => (
              <div
                key={index}
                className="relative rounded bg-light-gray-3 p-5 sm:p-6"
              >
                <span className="absolute left-4 top-4 rounded-full bg-success px-3 py-1 text-xs font-semibold text-white">
                  30% OFF
                </span>

                <img
                  src={img}
                  alt="Coleção em destaque"
                  className="mx-auto h-36 sm:h-40 object-contain"
                  loading="lazy"
                />

                <button className="mt-4 w-full sm:w-auto rounded bg-primary px-6 py-2 text-sm font-semibold text-white hover:opacity-90">
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CollectionsHighlight />

      <Section title="Produtos em alta" titleAlign="left">
        <div className="mx-auto max-w-[1440px] px-4">
          <ProductListing products={PRODUCTS.slice(0, 8)} />
        </div>
      </Section>

      <SpecialOffer />
    </>
  );
}
