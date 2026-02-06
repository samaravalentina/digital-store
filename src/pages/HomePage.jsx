import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import CollectionsHighlight from "../components/CollectionsHighlight/CollectionsHighlight";
import SpecialOffer from "../components/SpecialOffer/SpecialOffer";

import HomeHeroCarousel from "../components/HomeHeroCarousel/HomeHeroCarousel";

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

  return (
    <>
      <HomeHeroCarousel slides={slides} />

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
