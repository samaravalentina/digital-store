import { NavLink, Outlet } from "react-router-dom";

export default function AccountLayout() {
  const links = [
    { label: "Meus Pedidos", to: "/pedidos" },
    { label: "Minhas Informações", to: "/pedidos/minhas-informacoes" },
    { label: "Métodos de Pagamento", to: "/pedidos/metodos-pagamento" },
  ];

  return (
    <div className="bg-light-gray-3 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          <aside className="bg-white border border-light-gray-2 rounded p-6 h-fit">
            <h3 className="text-sm font-semibold text-dark-gray-2">Meu Perfil</h3>
            <hr className="my-4 border-light-gray-2" />

            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/pedidos"}
                  className={({ isActive }) =>
                    `text-sm ${
                      isActive ? "text-primary font-semibold" : "text-dark-gray-2"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <main className="bg-white border border-light-gray-2 rounded">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
