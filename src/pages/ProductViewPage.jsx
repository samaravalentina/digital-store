import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import { PRODUCTS } from "../data/products";

import Gallery from "../components/Gallery/Gallery";
import BuyBox from "../components/BuyBox/BuyBox";
import Section from "../components/Section/Section";

export default function ProductViewPage() {
  const { id } = useParams();

  const product = useMemo(() => {
    const numericId = Number(id);
    return PRODUCTS.find((p) => p.id === numericId);
  }, [id]);

  if (!product) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-6 lg:py-10">
        <h1 className="text-2xl font-semibold text-dark-gray-2">
          Produto não encontrado
        </h1>

        <Link
          to="/produtos"
          className="inline-block mt-6 text-primary font-semibold underline"
        >
          Voltar para produtos
        </Link>
      </div>
    );
  }

  const galleryImages =
    product.images && product.images.length > 0
      ? product.images
      : [{ src: product.image }];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 lg:py-10">
      <div className="mb-4 text-sm text-dark-gray-3">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        <span>/</span>{" "}
        <Link to="/produtos" className="hover:underline">
          Produtos
        </Link>{" "}
        <span>/</span>{" "}
        <span className="text-dark-gray-2">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="w-full">
          <Gallery
            images={galleryImages}
            width={570}
            height={570}
            radius="8px"
            showThumbs
          />
        </div>

        <div className="w-full">
          <BuyBox
            name={product.name}
            reference={product.reference}
            stars={product.stars}
            rating={product.rating}
            price={Number(product.price)}
            priceDiscount={
              product.priceDiscount != null ? Number(product.priceDiscount) : null
            }
            description={product.description}
          />
        </div>
      </div>

      <div className="mt-10 lg:mt-14">
        <Section title="Você também pode gostar" titleAlign="left">
          <p className="text-dark-gray-3">
            Depois colocamos produtos relacionados aqui 😉
          </p>
        </Section>
      </div>
    </div>
  );
}
