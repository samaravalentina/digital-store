import { NavLink, Outlet } from "react-router-dom";

export default function AccountLayout() {
  const links = [
    { label: "Meus Pedidos", to: "/pedidos" },
    { label: "Minhas Informações", to: "/pedidos/minhas-informacoes" },
    { label: "Métodos de Pagamento", to: "/pedidos/metodos-pagamento" },
  ];

  const linkClass = ({ isActive }) =>
    `whitespace-nowrap text-sm font-medium ${
      isActive ? "text-primary" : "text-dark-gray-2"
    }`;

  return (
    <div className="bg-light-gray-3 min-h-screen">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 lg:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr] lg:gap-10">
          <div className="lg:hidden">
            <div className="bg-white border border-light-gray-2 rounded p-4">
              <h3 className="text-sm font-semibold text-dark-gray-2">
                Meu Perfil
              </h3>

              <div className="mt-4 -mx-4 px-4 overflow-x-auto">
                <nav className="flex items-center gap-6">
                  {links.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      end={l.to === "/pedidos"}
                      className={linkClass}
                    >
                      {({ isActive }) => (
                        <span className="relative pb-2">
                          <span
                            className={
                              isActive
                                ? "text-primary font-semibold"
                                : "text-dark-gray-2"
                            }
                          >
                            {l.label}
                          </span>
                          {isActive ? (
                            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-primary" />
                          ) : null}
                        </span>
                      )}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block bg-white border border-light-gray-2 rounded p-6 h-fit">
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
                      isActive
                        ? "text-primary font-semibold"
                        : "text-dark-gray-2"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </aside>

          <main className="bg-white border border-light-gray-2 rounded p-4 sm:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
