import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  price,
  priceDiscount,
  image,
  category = "Tênis",
}) {
  const navigate = useNavigate();

  const basePrice = Number(price);
  const salePrice =
    typeof priceDiscount === "number" ? Number(priceDiscount) : null;

  const hasDiscount = typeof salePrice === "number" && salePrice < basePrice;

  const discountPercent = useMemo(() => {
    if (!hasDiscount) return null;
    return Math.round(((basePrice - salePrice) / basePrice) * 100);
  }, [hasDiscount, basePrice, salePrice]);

  return (
    <div
      className="w-full max-w-[292px] cursor-pointer"
      onClick={() => navigate(`/produto/${id}`)}
    >
      <div className="bg-white rounded-lg shadow-sm">
        <div className="relative p-6">
          {hasDiscount && (
            <span className="absolute top-4 left-4 bg-[#E7FF86] text-dark-gray text-xs font-semibold px-3 py-1 rounded-full">
              {discountPercent}% OFF
            </span>
          )}

          <div className="h-[321px] flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="max-h-[260px] w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs text-light-gray">{category}</p>

        <h2 className="mt-1 text-base text-dark-gray-2">{name}</h2>

        <div className="mt-2 flex items-baseline gap-2">
          {hasDiscount ? (
            <>
              <span className="text-sm text-light-gray line-through">
                {basePrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>

              <span className="text-lg font-bold text-dark-gray">
                {salePrice.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-dark-gray">
              {basePrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
