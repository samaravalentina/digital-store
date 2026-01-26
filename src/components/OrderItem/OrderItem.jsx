export default function OrderItem({ order }) {
  return (
    <div className="py-5 border-b border-light-gray-2 flex items-center justify-between gap-6">
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-[72px] h-[56px] bg-light-gray-3 rounded flex items-center justify-center overflow-hidden">
          <img
            src={order.image}
            alt={order.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="min-w-0">
          <p className="text-[10px] text-light-gray-2 mb-1">
            Pedido nº {order.id}
          </p>
          <p className="text-sm text-dark-gray-2 font-semibold truncate">
            {order.title}
          </p>
        </div>
      </div>

      <div className={`text-xs font-semibold ${order.statusColor} whitespace-nowrap`}>
        {order.status}
      </div>
    </div>
  );
}
