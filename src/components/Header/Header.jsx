import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../Logo/Logo";
import cartIcon from "../../assets/mini-cart.svg";

export default function Header() {
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch() {
    const value = search.trim();
    if (!value) return;
    navigate(`/produtos?filter=${encodeURIComponent(value)}`);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false); // lg
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { label: "Home", to: "/" },
    { label: "Produtos", to: "/produtos" },
    { label: "Meus Pedidos", to: "/pedidos" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded lg:hidden hover:bg-light-gray-3"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <span className="text-xl">{mobileMenuOpen ? "✕" : "☰"}</span>
            </button>

            <Logo />
          </div>

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
              type="button"
              onClick={handleSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-light-gray"
              aria-label="Pesquisar"
            >
              🔍
            </button>
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <NavLink to="/create-account" className="text-sm text-dark-gray-2 underline">
              Cadastre-se
            </NavLink>

            <NavLink
              to="/login"
              className="flex h-10 w-[114px] items-center justify-center rounded bg-primary text-sm font-bold text-white"
            >
              Entrar
            </NavLink>

            <button type="button" className="relative" aria-label="Carrinho">
              <img src={cartIcon} alt="" className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <NavLink
              to="/login"
              className="flex h-10 items-center justify-center rounded bg-primary px-4 text-sm font-bold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Entrar
            </NavLink>

            <button type="button" className="relative" aria-label="Carrinho">
              <img src={cartIcon} alt="" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full rounded border border-light-gray-2 px-4 py-3 pr-10 text-sm outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-light-gray"
                aria-label="Pesquisar"
              >
                🔍
              </button>
            </div>

            <nav className="mt-4 flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-light-gray-3 text-primary" : "text-dark-gray-2 hover:bg-light-gray-3"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <NavLink
                to="/create-account"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 rounded px-3 py-2 text-sm font-medium text-dark-gray-2 underline"
              >
                Cadastre-se
              </NavLink>
            </nav>
          </div>
        )}

        <nav className="hidden gap-8 pb-3 lg:flex">
          {links.map((link) => (
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
