import { useState } from "react";
import FormInput from "../components/FormInput/FormInput";

export default function CreateAccountPage() {
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    email: "",
    phone: "",
    address: "",
    neighborhood: "",
    city: "",
    cep: "",
    complement: "",
  });

  function setField(key) {
    return (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Criar conta:", form);
    alert("Conta criada (mock) ✅");
  }

  return (
    <div className="bg-light-gray-3 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold text-dark-gray-2">Criar Conta</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="bg-white border border-light-gray-2 rounded px-10 py-8">
            <h2 className="text-sm font-semibold text-dark-gray-2 mb-6">
              Informações Pessoais
            </h2>

            <div className="grid grid-cols-1 gap-6">
              <FormInput
                label="Nome Completo"
                placeholder="Insira seu nome"
                value={form.name}
                onChange={setField("name")}
                required
              />

              <FormInput
                label="CPF"
                placeholder="Insira seu CPF"
                value={form.cpf}
                onChange={setField("cpf")}
                required
              />

              <FormInput
                label="E-mail"
                placeholder="Insira seu email"
                type="email"
                value={form.email}
                onChange={setField("email")}
                required
              />

              <FormInput
                label="Celular"
                placeholder="Insira seu celular"
                value={form.phone}
                onChange={setField("phone")}
                required
              />
            </div>
          </div>

          <div className="bg-white border border-light-gray-2 rounded px-10 py-8">
            <h2 className="text-sm font-semibold text-dark-gray-2 mb-6">
              Informações de Entrega
            </h2>

            <div className="grid grid-cols-1 gap-6">
              <FormInput
                label="Endereço"
                placeholder="Insira seu endereço"
                value={form.address}
                onChange={setField("address")}
                required
              />

              <FormInput
                label="Bairro"
                placeholder="Insira seu bairro"
                value={form.neighborhood}
                onChange={setField("neighborhood")}
                required
              />

              <FormInput
                label="Cidade"
                placeholder="Insira sua cidade"
                value={form.city}
                onChange={setField("city")}
                required
              />

              <FormInput
                label="CEP"
                placeholder="Insira seu CEP"
                value={form.cep}
                onChange={setField("cep")}
                required
              />

              <FormInput
                label="Complemento"
                placeholder="Insira complemento"
                value={form.complement}
                onChange={setField("complement")}
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="h-[48px] px-10 rounded bg-primary text-white font-semibold hover:brightness-95 transition"
            >
              Criar Conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
