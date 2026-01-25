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
      <div className="max-w-7xl mx-auto px-6 py-10">
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
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Galeria */}
        <div>
          <Gallery
            images={galleryImages}
            width={570}     // ✅ número
            height={570}    // ✅ número
            radius="8px"
            showThumbs
          />
        </div>

        {/* BuyBox */}
        <div>
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
          >
            {/* quando você criar ProductOptions, entra aqui */}
          </BuyBox>
        </div>
      </div>

      <div className="mt-14">
        <Section title="Você também pode gostar" titleAlign="left">
          <p className="text-dark-gray-3">
            Depois colocamos produtos relacionados aqui 😉
          </p>
        </Section>
      </div>
    </div>
  );
}
