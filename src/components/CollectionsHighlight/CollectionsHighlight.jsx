import { useState } from "react";

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
    <section className="mx-auto max-w-[1440px] px-4 py-8 sm:py-10">
      <h2 className="text-center text-sm font-semibold text-dark-gray-2">
        {title}
      </h2>

      <div className="mt-6 -mx-4 px-4 overflow-x-auto sm:mx-0 sm:px-0 sm:overflow-visible">
        <div className="flex w-max gap-4 sm:w-full sm:max-w-[712px] sm:mx-auto sm:justify-between sm:gap-6">
          {items.map((item) => {
            const isActive = item.id === activeId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className="flex shrink-0 flex-col items-center gap-2 outline-none"
                aria-label={item.label}
              >
                <span
                  className={[
                    "grid h-16 w-16 sm:h-20 sm:w-20 place-items-center rounded-full bg-white",
                    "border transition",
                    isActive
                      ? "border-primary shadow-sm"
                      : "border-light-gray-3",
                  ].join(" ")}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className={[
                      "h-8 w-8 sm:h-10 sm:w-10 transition",
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
