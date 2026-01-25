import ProductCard from "../ProductCard/ProductCard";

export default function ProductListing({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          image={product.image}
        />
      ))}
    </div>
  );
}
