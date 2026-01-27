import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductListing from "../components/ProductListing/ProductListing";
import { PRODUCTS } from "../data/products";

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const queryLabel = (searchParams.get("filter") || "").trim();
  const headerLabel = queryLabel || "Tênis";

  const [sort, setSort] = useState("relevantes");
  const [selectedBrands, setSelectedBrands] = useState(["adidas", "k-swiss"]);
  const [selectedCategories, setSelectedCategories] = useState(["esporte"]);
  const [selectedGenders, setSelectedGenders] = useState(["masculino", "feminino"]);
  const [selectedState, setSelectedState] = useState("novo");

  const [filtersOpen, setFiltersOpen] = useState(false);

  function toggle(listSetter, currentList, value) {
    listSetter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (sort === "menor-preco") {
      result = [...result].sort(
        (a, b) => (a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price)
      );
    }

    if (sort === "maior-preco") {
      result = [...result].sort(
        (a, b) => (b.priceDiscount ?? b.price) - (a.priceDiscount ?? a.price)
      );
    }

    return result;
  }, [sort]);

  function FiltersCard() {
    return (
      <div className="w-full bg-white border border-light-gray-2 rounded p-6">
        <h2 className="text-dark-gray-2 font-semibold">Filtrar por</h2>
        <hr className="my-4 border-light-gray-2" />

        <div className="mb-6">
          <p className="text-dark-gray-2 font-semibold mb-3">Marca</p>
          <div className="flex flex-col gap-3 text-sm text-dark-gray-2">
            {[
              { label: "Adiddas", value: "adidas" },
              { label: "Calenciaga", value: "balenciaga" },
              { label: "K-Swiss", value: "k-swiss" },
              { label: "Nike", value: "nike" },
              { label: "Puma", value: "puma" },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] accent-primary"
                  checked={selectedBrands.includes(opt.value)}
                  onChange={() => toggle(setSelectedBrands, selectedBrands, opt.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-dark-gray-2 font-semibold mb-3">Categoria</p>
          <div className="flex flex-col gap-3 text-sm text-dark-gray-2">
            {[
              { label: "Esporte e lazer", value: "esporte" },
              { label: "Casual", value: "casual" },
              { label: "Utilitário", value: "utilitario" },
              { label: "Corrida", value: "corrida" },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] accent-primary"
                  checked={selectedCategories.includes(opt.value)}
                  onChange={() =>
                    toggle(setSelectedCategories, selectedCategories, opt.value)
                  }
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-dark-gray-2 font-semibold mb-3">Gênero</p>
          <div className="flex flex-col gap-3 text-sm text-dark-gray-2">
            {[
              { label: "Masculino", value: "masculino" },
              { label: "Feminino", value: "feminino" },
              { label: "Unisex", value: "unisex" },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] accent-primary"
                  checked={selectedGenders.includes(opt.value)}
                  onChange={() => toggle(setSelectedGenders, selectedGenders, opt.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-dark-gray-2 font-semibold mb-3">Estado</p>
          <div className="flex flex-col gap-3 text-sm text-dark-gray-2">
            {[
              { label: "Novo", value: "novo" },
              { label: "Usado", value: "usado" },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-3">
                <input
                  type="radio"
                  name="estado"
                  className="w-[18px] h-[18px] accent-primary"
                  checked={selectedState === opt.value}
                  onChange={() => setSelectedState(opt.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light-gray-3 min-h-screen">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[308px_1fr] gap-6 lg:gap-10">
          <aside className="hidden lg:block">
            <FiltersCard />
          </aside>

          <section>
            <div className="mb-6 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-sm text-dark-gray-2">
                <span className="font-semibold">Resultados para </span>
                <span className="font-semibold">“{headerLabel}”</span>
                <span className="text-dark-gray-3"> – {filteredProducts.length} produtos</span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
                <button
                  type="button"
                  className="h-11 rounded border border-light-gray-2 bg-white px-4 text-sm font-semibold text-dark-gray-2 lg:hidden"
                  onClick={() => setFiltersOpen((v) => !v)}
                >
                  {filtersOpen ? "Fechar filtros" : "Filtrar"}
                </button>

                <div className="w-full sm:w-[280px] lg:w-[332px]">
                  <select
                    className="w-full h-[60px] bg-white border border-light-gray-2 rounded px-4 text-dark-gray-2"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="relevantes">Ordenar por: mais relevantes</option>
                    <option value="menor-preco">Ordenar por: menor preço</option>
                    <option value="maior-preco">Ordenar por: maior preço</option>
                  </select>
                </div>
              </div>
            </div>

            {filtersOpen && (
              <div className="mb-6 lg:hidden">
                <FiltersCard />
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <p className="text-dark-gray-2">Nenhum produto encontrado</p>
            ) : (
              <ProductListing products={filteredProducts} />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
