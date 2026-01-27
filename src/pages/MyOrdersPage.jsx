import productThumb from "../assets/product-thumb-1.jpeg";

const ORDERS = [
  {
    id: "223491032",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Produto em trânsito",
    image: productThumb,
  },
  {
    id: "223491033",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Finalizado",
    image: productThumb,
  },
  {
    id: "223491034",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Cancelado",
    image: productThumb,
  },
  {
    id: "223491035",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Finalizado",
    image: productThumb,
  },
];

function statusClass(status) {
  if (status === "Produto em trânsito") return "text-warning";
  if (status === "Cancelado") return "text-primary";
  return "text-dark-gray-3";
}

export default function MyOrdersPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between pb-4 border-b border-light-gray-2">
        <h2 className="text-base font-semibold text-dark-gray-2">
          Meus Pedidos
        </h2>

        <span className="hidden sm:inline text-xs font-semibold text-dark-gray-3">
          STATUS
        </span>
      </div>

      <div className="divide-y divide-light-gray-2">
        {ORDERS.map((o) => (
          <div
            key={o.id}
            className="py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded bg-light-gray-3">
                <img
                  src={o.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] text-dark-gray-3">
                  Pedido nº {o.id}
                </p>

                <p className="text-sm font-semibold text-dark-gray-2 truncate">
                  {o.name}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:block">
              <span className="text-xs font-semibold text-dark-gray-3 sm:hidden">
                Status
              </span>

              <p className={`text-sm font-semibold ${statusClass(o.status)}`}>
                {o.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
