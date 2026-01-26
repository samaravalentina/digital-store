import ProductCard from "../ProductCard/ProductCard";

export default function ProductListing({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
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
