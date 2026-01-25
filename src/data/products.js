// src/data/products.js

import p1 from "../assets/product-thumb-1.jpeg";
import p2 from "../assets/product-thumb-2.jpeg";
import p3 from "../assets/product-thumb-3.jpeg";
import p4 from "../assets/product-thumb-4.jpeg";

export const PRODUCTS = [
  {
    id: 1,
    name: "Tênis Nike Air",
    price: 299.9,
    priceDiscount: 249.9,
    image: p1,
    category: "tenis",
    reference: "NIKE-001",
    stars: 4.7,
    rating: 125,
    description:
      "Tênis confortável para o dia a dia, com amortecimento e ótimo custo-benefício.",
    images: [{ src: p1 }, { src: p2 }, { src: p3 }],
  },
  {
    id: 2,
    name: "Tênis Adidas Run",
    price: 249.9,
    image: p2,
    category: "tenis",
    reference: "ADIDAS-002",
    stars: 4.7,
    rating: 125,
    description: "Modelo leve e versátil, ideal para caminhadas e treinos leves.",
    images: [{ src: p2 }],
  },
  {
    id: 3,
    name: "Tênis Puma Street",
    price: 199.9,
    priceDiscount: 179.9,
    image: p3,
    category: "tenis",
    reference: "PUMA-003",
    stars: 4.7,
    rating: 125,
    description: "Estilo urbano com conforto, perfeito para o dia a dia.",
    images: [{ src: p3 }],
  },
  {
    id: 4,
    name: "Camiseta Basic",
    price: 79.9,
    image: p4,
    category: "camisetas",
    reference: "BASIC-004",
    stars: 4.7,
    rating: 125,
    description: "Camiseta básica, tecido macio e caimento confortável.",
    images: [{ src: p4 }],
  },
];

/**
 * Alias para compatibilidade:
 * - se alguma página estiver fazendo `import { products } from "../data/products"`
 *   ela vai funcionar.
 */
export const products = PRODUCTS;

/**
 * Export default (opcional) para compatibilidade com:
 * - `import products from "../data/products"`
 */
export default PRODUCTS;
