import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <span className="mb-4 text-5xl">😕</span>

      <h1 className="text-2xl sm:text-4xl font-bold text-dark-gray">
        Página não encontrada
      </h1>

      <p className="mt-3 max-w-md text-sm sm:text-base text-dark-gray-2">
        A página que você tentou acessar não existe ou foi removida.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex h-11 w-full max-w-xs items-center justify-center rounded bg-primary px-6 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}
