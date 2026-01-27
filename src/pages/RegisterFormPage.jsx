import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput/FormInput";
import AuthTopBar from "../components/AuthTopBar/AuthTopBar";

export default function RegisterFormPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    cpf: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    cep: "",
    complement: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!acceptTerms) {
      alert("Aceite os termos para continuar");
      return;
    }

    console.log("Cadastro completo:", form);
    navigate("/login");
  }

  return (
    <main className="bg-[#F9F8FE]">
      <AuthTopBar />

      <section className="py-8 sm:py-10">
        <div className="mx-auto w-full max-w-3xl px-4">
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-sm border border-light-gray-2">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Criar Conta
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Complete seus dados para finalizar o cadastro
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Informações Pessoais
                </h2>
                <div className="mt-4 space-y-4">
                  <FormInput
                    label="Nome Completo"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Insira seu nome"
                    required
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormInput
                      label="CPF"
                      name="cpf"
                      value={form.cpf}
                      onChange={handleChange}
                      placeholder="Insira seu CPF"
                    />

                    <FormInput
                      label="Celular"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Insira seu celular"
                    />
                  </div>

                  <FormInput
                    label="E-mail"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Insira seu e-mail"
                    required
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormInput
                      label="Senha"
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Insira sua senha"
                      required
                    />

                    <FormInput
                      label="Confirmar Senha"
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirme sua senha"
                      required
                    />
                  </div>
                </div>
              </div>

              <hr className="border-light-gray-2" />

              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Informações de Entrega
                </h2>

                <div className="mt-4 space-y-4">
                  <FormInput
                    label="Endereço"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Rua, avenida, etc"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormInput
                      label="Número"
                      name="number"
                      value={form.number}
                      onChange={handleChange}
                      placeholder="Ex: 123"
                    />

                    <FormInput
                      label="Bairro"
                      name="neighborhood"
                      value={form.neighborhood}
                      onChange={handleChange}
                      placeholder="Ex: Centro"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormInput
                      label="Cidade"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Ex: Fortaleza"
                    />

                    <FormInput
                      label="Estado"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="Ex: CE"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormInput
                      label="CEP"
                      name="cep"
                      value={form.cep}
                      onChange={handleChange}
                      placeholder="Ex: 60000-000"
                    />

                    <FormInput
                      label="Complemento"
                      name="complement"
                      value={form.complement}
                      onChange={handleChange}
                      placeholder="Opcional"
                    />
                  </div>
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-light-gray-2 bg-white p-4 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-primary"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                />
                <span className="leading-relaxed">
                  Declaro que li e concordo com os termos de uso e política de
                  privacidade.
                </span>
              </label>

              <button
                type="submit"
                className="h-11 w-full rounded bg-primary text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                Criar Conta
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
