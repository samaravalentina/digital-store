export default function PaymentMethodsPage() {
  return (
    <div className="p-4 sm:p-6">
      <div className="pb-4 border-b border-light-gray-2">
        <h2 className="text-base font-semibold text-dark-gray-2">
          Métodos de Pagamento
        </h2>
      </div>

      <div className="pt-6">
        <div className="rounded border border-light-gray-2 bg-light-gray-3 p-4 sm:p-5">
          <p className="text-sm text-dark-gray-2">
            Conteúdo mock (depois a gente implementa cartões/salvos).
          </p>

          <p className="mt-2 text-xs text-dark-gray-3">
            Sugestão: mostrar “Cartões salvos” + botão “Adicionar novo cartão”.
          </p>
        </div>
      </div>
    </div>
  );
}
