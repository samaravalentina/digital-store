import starIcon from "../../assets/star-icon.svg";

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  const basePrice = Number(price);
  const salePrice =
    typeof priceDiscount === "number" ? Number(priceDiscount) : null;

  function formatBRL(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-dark-gray text-xl sm:text-2xl font-semibold leading-tight">
        {name}
      </h1>

      <span className="text-xs text-dark-gray-3">Ref: {reference}</span>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1 bg-warning px-2 py-1 rounded text-sm text-dark-gray">
          <span>{stars}</span>
          <img src={starIcon} alt="" className="h-4 w-4" />
        </div>

        <span className="text-sm text-light-gray">({rating} avaliações)</span>
      </div>

      <div className="flex flex-wrap items-baseline gap-3">
        {salePrice && salePrice < basePrice ? (
          <>
            <span className="text-light-gray-2 text-sm line-through">
              {formatBRL(basePrice)}
            </span>

            <span className="text-dark-gray-2 text-2xl sm:text-3xl font-semibold">
              {formatBRL(salePrice)}
            </span>
          </>
        ) : (
          <span className="text-dark-gray-2 text-2xl sm:text-3xl font-semibold">
            {formatBRL(basePrice)}
          </span>
        )}
      </div>

      <p className="text-sm sm:text-base text-dark-gray-2 leading-relaxed">
        {description}
      </p>

      {children ? <div className="pt-2">{children}</div> : null}

      <button
        type="button"
        className="h-12 w-full rounded bg-warning text-white text-sm sm:text-base font-bold hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-warning/30"
      >
        COMPRAR
      </button>
    </div>
  );
}
