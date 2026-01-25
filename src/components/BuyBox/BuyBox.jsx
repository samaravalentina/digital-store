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
  return (
    <div className="flex flex-col gap-4 max-w-md">

      {/* Nome */}
      <h1 className="text-dark-gray text-2xl font-semibold">
        {name}
      </h1>

      {/* Referência */}
      <span className="text-xs text-dark-gray-3">
        Ref: {reference}
      </span>

      {/* Avaliação */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 bg-warning px-2 py-1 rounded text-sm text-dark-gray">
          <span>{stars}</span>
          <img src={starIcon} alt="Estrela" />
        </div>

        <span className="text-sm text-light-gray">
          ({rating} avaliações)
        </span>
      </div>

      {/* Preços */}
      <div className="flex items-center gap-3">
        {priceDiscount ? (
          <>
            <span className="text-light-gray-2 text-sm line-through">
              R$ {price.toFixed(2)}
            </span>
            <span className="text-dark-gray-2 text-2xl font-semibold">
              R$ {priceDiscount.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="text-dark-gray-2 text-2xl font-semibold">
            R$ {price.toFixed(2)}
          </span>
        )}
      </div>

      {/* Descrição */}
      <p className="text-sm text-dark-gray-2">
        {description}
      </p>

      {/* Opções (children) */}
      {children}

      {/* Botão comprar */}
      <button className="bg-warning text-white text-base py-3 rounded">
        COMPRAR
      </button>
    </div>
  );
}
