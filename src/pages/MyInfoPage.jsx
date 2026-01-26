import AccountSidebar from "../components/AccountSidebar/AccountSidebar";

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <span className="text-light-gray-2 min-w-[72px]">{label}:</span>
      <span className="text-dark-gray-2">{value}</span>
    </div>
  );
}

export default function MyInfoPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between pb-4 border-b border-light-gray-2">
        <h2 className="text-base font-semibold text-dark-gray-2">Minhas Informações</h2>
        <button className="text-sm text-primary">Editar</button>
      </div>

      <div className="pt-6">
        <h3 className="text-sm font-semibold text-dark-gray-2 mb-3">Informações Pessoais</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-dark-gray-2">
          <div>
            <p className="text-xs text-dark-gray-3">Nome:</p>
            <p>Francisco Antonio Pereira</p>
          </div>
          <div>
            <p className="text-xs text-dark-gray-3">CPF:</p>
            <p>123.456.789-35</p>
          </div>
          <div>
            <p className="text-xs text-dark-gray-3">Email:</p>
            <p>francisco@gmail.com</p>
          </div>
          <div>
            <p className="text-xs text-dark-gray-3">Celular:</p>
            <p>(85) 5555-5555</p>
          </div>
        </div>

        <hr className="my-8 border-light-gray-2" />

        <h3 className="text-sm font-semibold text-dark-gray-2 mb-3">Informações de Entrega</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-dark-gray-2">
          <div>
            <p className="text-xs text-dark-gray-3">Endereço:</p>
            <p>Rua João Pessoa, 333</p>
          </div>
          <div>
            <p className="text-xs text-dark-gray-3">Bairro:</p>
            <p>Centro</p>
          </div>
          <div>
            <p className="text-xs text-dark-gray-3">Cidade:</p>
            <p>Fortaleza, Ceará</p>
          </div>
          <div>
            <p className="text-xs text-dark-gray-3">CEP:</p>
            <p>433-8800</p>
          </div>
        </div>
      </div>
    </div>
  );
}
