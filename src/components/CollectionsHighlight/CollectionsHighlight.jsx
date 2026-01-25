import { useState } from "react";

// Ajuste os caminhos se seus ícones estiverem em outra pasta
import tshirtIcon from "../../assets/blusa.png";
import pantsIcon from "../../assets/calca.png";
import capIcon from "../../assets/bones.png";
import headphonesIcon from "../../assets/fone.png";
import shoesIcon from "../../assets/teniss.png";

const DEFAULT_ITEMS = [
  { id: "camisetas", label: "Camisetas", icon: tshirtIcon },
  { id: "calcas", label: "Calças", icon: pantsIcon },
  { id: "bones", label: "Bonés", icon: capIcon },
  { id: "headphones", label: "Headphones", icon: headphonesIcon },
  { id: "tenis", label: "Tênis", icon: shoesIcon },
];

export default function CollectionsHighlight({
  title = "Coleções em destaque",
  items = DEFAULT_ITEMS,
  defaultActiveId = "camisetas",
}) {
  const [activeId, setActiveId] = useState(defaultActiveId);

  return (
    <section className="mx-auto max-w-[1440px] px-4 py-10">
      <h2 className="text-center text-sm font-semibold text-dark-gray-2">
        {title}
      </h2>

      <div className="mt-6 flex justify-center">
        <div className="flex w-full max-w-[712px] items-center justify-between gap-6">
          {items.map((item) => {
            const isActive = item.id === activeId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className="flex flex-col items-center gap-2 outline-none"
                aria-label={item.label}
              >
                {/* bolinha do ícone */}
                <span
                  className={[
                    "grid h-20 w-20 place-items-center rounded-full bg-white",
                    "border border-light-gray-3",
                    isActive ? "text-primary" : "text-light-gray",
                  ].join(" ")}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className={[
                      "h-10 w-10",
                      isActive ? "opacity-100" : "opacity-70",
                    ].join(" ")}
                  />
                </span>

                <span
                  className={[
                    "text-xs font-semibold",
                    isActive ? "text-primary" : "text-dark-gray-2",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
