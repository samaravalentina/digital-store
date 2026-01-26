import AccountSidebar from "../components/AccountSidebar/AccountSidebar";
import OrderItem from "../components/OrderItem/OrderItem";

const ORDERS = [
  {
    id: "44958102",
    title: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Produto em trânsito",
    statusColor: "text-warning",
    image: "/src/assets/product-thumb-1.jpeg",
  },
  {
    id: "44958103",
    title: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Finalizado",
    statusColor: "text-light-gray",
    image: "/src/assets/product-thumb-1.jpeg",
  },
  {
    id: "44958104",
    title: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Cancelado",
    statusColor: "text-primary",
    image: "/src/assets/product-thumb-1.jpeg",
  },
  {
    id: "44958105",
    title: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Finalizado",
    statusColor: "text-light-gray",
    image: "/src/assets/product-thumb-1.jpeg",
  },
  {
    id: "44958106",
    title: "Tênis Nike Revolution 6 Next Nature Masculino",
    status: "Finalizado",
    statusColor: "text-light-gray",
    image: "/src/assets/product-thumb-1.jpeg",
  },
];

export default function MyOrdersPage() {
  const orders = [
    { id: "223491032", name: "Tênis Nike Revolution 6 Next Nature Masculino", status: "Produto em trânsito" },
    { id: "223491033", name: "Tênis Nike Revolution 6 Next Nature Masculino", status: "Finalizado" },
    { id: "223491034", name: "Tênis Nike Revolution 6 Next Nature Masculino", status: "Cancelado" },
    { id: "223491035", name: "Tênis Nike Revolution 6 Next Nature Masculino", status: "Finalizado" },
  ];

  function statusClass(status) {
    if (status === "Produto em trânsito") return "text-warning";
    if (status === "Cancelado") return "text-primary";
    return "text-dark-gray-3";
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between pb-4 border-b border-light-gray-2">
        <h2 className="text-base font-semibold text-dark-gray-2">Meus Pedidos</h2>
        <span className="text-xs font-semibold text-dark-gray-3">STATUS</span>
      </div>

      <div className="divide-y divide-light-gray-2">
        {orders.map((o) => (
          <div key={o.id} className="py-6 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-[56px] h-[56px] bg-light-gray-3 rounded" />
              <div>
                <p className="text-[10px] text-dark-gray-3">Pedido nº {o.id}</p>
                <p className="text-sm font-semibold text-dark-gray-2">{o.name}</p>
              </div>
            </div>

            <p className={`text-sm font-semibold ${statusClass(o.status)}`}>{o.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
