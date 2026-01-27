import { Link } from "react-router-dom";

export default function AuthTopBar() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center px-4">
        <Link to="/" className="flex items-center gap-2">
          {/* ícone simples igual o do layout */}
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-primary text-white font-bold">
            &gt;
          </span>

          <span className="text-xl font-bold text-primary">Digital Store</span>
        </Link>
      </div>
    </div>
  );
}
