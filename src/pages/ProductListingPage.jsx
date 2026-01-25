import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";

import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import FilterGroup from "../components/FilterGroup/FilterGroup";


export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "";

  // Ordenar por
  const [sort, setSort] = useState("menor-preco");

  // Filtrar por categoria
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filteredProducts = useMemo(() => {
    // filtro por query string (nome)
    let result = PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );

    // filtro por categorias (checkbox)
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // ordenação
    result = [...result].sort((a, b) => {
      const aPrice = a.priceDiscount ?? a.price;
      const bPrice = b.priceDiscount ?? b.price;

      if (sort === "menor-preco") return aPrice - bPrice;
      if (sort === "maior-preco") return bPrice - aPrice;
      return 0;
    });

    return result;
  }, [filter, sort, selectedCategories]);

  function toggleCategory(value) {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[308px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          {/* Ordenar por */}
          <div className="w-[308px]">
            <label className="text-dark-gray-2 text-base block mb-2">
              Ordenar por
            </label>

            <select
              className="w-[308px] h-[60px] border border-light-gray-2 rounded px-4 text-dark-gray-2 bg-white"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
            </select>
          </div>

          {/* Filtrar por */}
          <div className="w-[308px] bg-white p-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-dark-gray-2 text-base">Filtrar por</h3>
              <hr className="border-light-gray-2" />
            </div>

            <div className="mt-4 flex flex-col gap-6">
              {/* (Opcional) Mantém seu FilterGroup na tela */}
              <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={[
                  { text: "Tênis", value: "tenis" },
                  { text: "Camisetas", value: "camisetas" },
                  { text: "Calças", value: "calcas" },
                ]}
              />

              {/* ✅ Checkboxes controlados (os que realmente filtram) */}
              <div className="flex flex-col gap-2">
                {["tenis", "camisetas", "calcas"].map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-3 text-sm text-dark-gray-2"
                  >
                    <input
                      type="checkbox"
                      className="w-[22px] h-[22px] accent-primary"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    {cat === "tenis"
                      ? "Tênis"
                      : cat === "camisetas"
                      ? "Camisetas"
                      : "Calças"}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Conteúdo (lista) */}
        <section>
          <Section
            title={`${filteredProducts.length} produtos encontrados`}
            titleAlign="left"
          >
            {filteredProducts.length === 0 ? (
              <p className="text-dark-gray-2 mt-10">Nenhum produto encontrado</p>
            ) : (
              <ProductListing products={filteredProducts} />
            )}
          </Section>
        </section>
      </div>
    </div>
  );
}
