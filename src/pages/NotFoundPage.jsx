import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold text-dark-gray mb-4">
        Página não encontrada
      </h1>

      <p className="text-dark-gray-2 mb-8">
        A página que você tentou acessar não existe ou foi removida.
      </p>

      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
