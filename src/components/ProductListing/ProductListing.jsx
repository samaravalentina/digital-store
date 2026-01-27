import ProductCard from "../ProductCard/ProductCard";

export default function ProductListing({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          image={product.image}
          category="Tênis"
        />
      ))}
    </div>
  );
}
