function InfoRow({ label, value }) {
  return (
    <div className="min-w-0">
      <p className="text-xs text-dark-gray-3">{label}:</p>
      <p className="text-sm text-dark-gray-2 break-words">{value}</p>
    </div>
  );
}

export default function MyInfoPage() {
  const personal = {
    nome: "Francisco Antonio Pereira",
    cpf: "123.456.789-35",
    email: "francisco@gmail.com",
    celular: "(85) 5555-5555",
  };

  const delivery = {
    endereco: "Rua João Pessoa, 333",
    bairro: "Centro",
    cidade: "Fortaleza, Ceará",
    cep: "433-8800",
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-light-gray-2">
        <h2 className="text-base font-semibold text-dark-gray-2">
          Minhas Informações
        </h2>

        <button
          type="button"
          className="h-10 rounded border border-light-gray-2 bg-white px-4 text-sm font-semibold text-primary hover:bg-light-gray-3"
          onClick={() => alert("Fluxo mockado: editar informações")}
        >
          Editar
        </button>
      </div>

      <div className="pt-6">
        <h3 className="text-sm font-semibold text-dark-gray-2 mb-3">
          Informações Pessoais
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <InfoRow label="Nome" value={personal.nome} />
          <InfoRow label="CPF" value={personal.cpf} />
          <InfoRow label="Email" value={personal.email} />
          <InfoRow label="Celular" value={personal.celular} />
        </div>

        <hr className="my-8 border-light-gray-2" />
        <h3 className="text-sm font-semibold text-dark-gray-2 mb-3">
          Informações de Entrega
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <InfoRow label="Endereço" value={delivery.endereco} />
          <InfoRow label="Bairro" value={delivery.bairro} />
          <InfoRow label="Cidade" value={delivery.cidade} />
          <InfoRow label="CEP" value={delivery.cep} />
        </div>
      </div>
    </div>
  );
}
