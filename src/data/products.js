import p1 from "../assets/product-thumb-1.jpeg";
import p2 from "../assets/product-thumb-2.jpeg";
import p3 from "../assets/product-thumb-3.jpeg";
import p4 from "../assets/product-thumb-4.jpeg";

function with30Off(price) {
  const base = Number(price);
  const discount = Number((base * 0.7).toFixed(2));
  return { price: base, priceDiscount: discount };
}

export const PRODUCTS = [
  {
    id: 1,
    name: "K-Swiss V8 - Masculino",
    ...with30Off(200),
    image: p1,
    category: "tenis",
    reference: "TENIS-001",
    stars: 4.7,
    rating: 125,
    description: "Tênis confortável para o dia a dia.",
    images: [{ src: p1 }, { src: p2 }, { src: p3 }],
  },
  {
    id: 2,
    name: "K-Swiss V8 - Masculino",
    ...with30Off(200),
    image: p2,
    category: "tenis",
    reference: "TENIS-002",
    stars: 4.7,
    rating: 125,
    description: "Tênis confortável para o dia a dia.",
    images: [{ src: p2 }],
  },
  {
    id: 3,
    name: "K-Swiss V8 - Masculino",
    ...with30Off(200),
    image: p3,
    category: "tenis",
    reference: "TENIS-003",
    stars: 4.7,
    rating: 125,
    description: "Tênis confortável para o dia a dia.",
    images: [{ src: p3 }],
  },
  {
    id: 4,
    name: "K-Swiss V8 - Masculino",
    ...with30Off(200),
    image: p1,
    category: "tenis",
    reference: "TENIS-004",
    stars: 4.7,
    rating: 125,
    description: "Tênis confortável para o dia a dia.",
    images: [{ src: p1 }],
  },
  {
    id: 5,
    name: "K-Swiss V8 - Masculino",
    ...with30Off(200),
    image: p2,
    category: "tenis",
    reference: "TENIS-005",
    stars: 4.7,
    rating: 125,
    description: "Tênis confortável para o dia a dia.",
    images: [{ src: p2 }],
  },
  {
    id: 6,
    name: "K-Swiss V8 - Masculino",
    ...with30Off(200),
    image: p3,
    category: "tenis",
    reference: "TENIS-006",
    stars: 4.7,
    rating: 125,
    description: "Tênis confortável para o dia a dia.",
    images: [{ src: p3 }],
  },
];

export const products = PRODUCTS;
export default PRODUCTS;
