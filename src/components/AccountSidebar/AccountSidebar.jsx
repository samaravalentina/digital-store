import { NavLink } from "react-router-dom";

export default function AccountSidebar({ active = "meus-pedidos" }) {
  const linkBase =
    "block text-sm text-dark-gray-2 py-2 hover:text-primary";

  const activeClass = "text-primary font-semibold";

  return (
    <div className="bg-white border border-light-gray-2 rounded p-6">
      <h2 className="text-dark-gray-2 font-semibold">Meu Perfil</h2>
      <hr className="my-4 border-light-gray-2" />

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/meus-pedidos"
          className={({ isActive }) =>
            `${linkBase} ${isActive || active === "meus-pedidos" ? activeClass : ""}`
          }
        >
          Meus Pedidos
        </NavLink>

        <NavLink
          to="/minhas-informacoes"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClass : ""}`
          }
        >
          Minhas Informações
        </NavLink>

        <NavLink
          to="/minhas-informacoes"
          className={({ isActive }) =>
            `${linkBase} ${isActive || active === "minhas-informacoes" ? activeClass : ""}`
          }
        >
          Metodos de Pagamento
        </NavLink>
      </nav>
    </div>
  );
}
