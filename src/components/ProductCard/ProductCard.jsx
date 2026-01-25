import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ id, name, price, priceDiscount, image }) {
  const navigate = useNavigate();

   const hasDiscount = typeof priceDiscount === "number" && priceDiscount < price;

  const discountPercent = useMemo(() => {
    if (!hasDiscount) return null;
    return Math.round(((price - priceDiscount) / price) * 100);
  }, [hasDiscount, price, priceDiscount]);

  return (
    <div className="group border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white"
      onClick={() => navigate(`/produto/${id}`)}>
      {/* Imagem com zoom no hover */}
      <div className="relative overflow-hidden rounded-md">
        {/* Badge de desconto */}
        {hasDiscount && (
          <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            -{discountPercent}%
          </span>
        )}

        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <h2 className="mt-4 text-lg font-semibold text-dark-gray">{name}</h2>

      <div className="mt-2 flex items-center gap-2">
        {hasDiscount ? (
          <>
            <p className="text-light-gray line-through">
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className="text-dark-gray font-bold">
              {priceDiscount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </>
        ) : (
          <p className="text-dark-gray font-bold">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        )}
      </div>
    </div>
  );
}
