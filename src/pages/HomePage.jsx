import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import CollectionsHighlight from "../components/CollectionsHighlight/CollectionsHighlight";

import { PRODUCTS } from "../data/products";

import homeSlide1 from "../assets/tenis-vermelho-nike.png";

import collection1 from "../assets/collection-1.png";
import collection2 from "../assets/collection-2.png";
import collection3 from "../assets/collection-3.png";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="w-full bg-light-gray-3">
        <div className="mx-auto max-w-[1440px] px-4 py-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Texto */}
            <div className="max-w-xl">
              <p className="text-warning text-sm font-semibold">
                Melhores ofertas personalizadas
              </p>

              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-dark-gray">
                Queima de <br /> estoque Nike 🔥
              </h1>

              <p className="mt-6 max-w-md text-sm sm:text-base text-light-gray">
                Consequat culpa exercitation mollit nisi exceptur do do tempor
                laboris eiusmod irure consectetur.
              </p>

              <button className="mt-8 rounded bg-primary px-10 py-3 text-white text-sm font-bold hover:opacity-90">
                Ver Ofertas
              </button>
            </div>

            {/* Imagem do tênis (posição Figma-like) */}
            <div className="relative flex justify-end">
              <img
                src={homeSlide1}
                alt="Produto em destaque"
                loading="lazy"
                className="
                  w-full
                  max-w-[760px]
                  object-contain
                  translate-y-6
                  sm:translate-x-12
                  sm:-rotate-12
                "
              />
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-light-gray-2" />
            <span className="h-2 w-2 rounded-full bg-light-gray-2" />
          </div>
        </div>
      </section>

      {/* COLEÇÕES EM DESTAQUE (cards grandes) */}
      <Section title="Coleções em destaque" titleAlign="center">
        <div className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {[collection1, collection2, collection3].map((img, index) => (
            <div key={index} className="relative rounded bg-light-gray-3 p-6">
              <span className="absolute left-4 top-4 rounded-full bg-success px-3 py-1 text-xs font-semibold text-white">
                30% OFF
              </span>

              <img
                src={img}
                alt="Coleção em destaque"
                className="mx-auto h-40 object-contain"
                loading="lazy"
              />

              <button className="mt-4 rounded bg-primary px-6 py-2 text-sm font-semibold text-white hover:opacity-90">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* COLEÇÕES EM DESTAQUE (ícones) — igual ao Figma */}
      <CollectionsHighlight />

      {/* PRODUTOS EM ALTA */}
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={PRODUCTS.slice(0, 8)} />
      </Section>
    </>
  );
}
