import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../Logo/Logo";
import cartIcon from "../../assets/mini-cart.svg";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (!search.trim()) return;
    navigate(`/produtos?filter=${encodeURIComponent(search)}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-[1440px] px-4">
        {/* Linha superior */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo />

          {/* Busca */}
          <div className="relative hidden w-full max-w-md lg:block">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full rounded border border-light-gray-2 px-4 py-2 pr-10 text-sm outline-none focus:border-primary"
            />

            <button
              onClick={handleSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-light-gray"
              aria-label="Pesquisar"
            >
              🔍
            </button>
          </div>

          {/* Ações */}
          <div className="flex items-center gap-6">
            <a
              href="/cadastro"
              className="text-sm text-dark-gray-2 underline"
            >
              Cadastre-se
            </a>

            <a
              href="/login"
              className="flex h-10 w-[114px] items-center justify-center rounded bg-primary text-sm font-bold text-white"
            >
              Entrar
            </a>

            <img
              src={cartIcon}
              alt="Carrinho"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
        </div>

        {/* Navegação */}
        <nav className="flex gap-8 pb-3">
          {[
            { label: "Home", to: "/" },
            { label: "Produtos", to: "/produtos" },
            { label: "Categorias", to: "/categorias" },
            { label: "Meus Pedidos", to: "/pedidos" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-sm font-medium ${
                  isActive
                    ? "text-primary after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-primary"
                    : "text-dark-gray-2"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}