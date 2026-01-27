import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput/FormInput";
import tenisImg from "../assets/tenis.png";
import AuthTopBar from "../components/AuthTopBar/AuthTopBar";

export default function CreateAccountPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleContinue(e) {
    e.preventDefault();
    if (!form.email) return alert("Digite seu e-mail para continuar.");
    setStep(2);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!acceptTerms) return alert("Você precisa aceitar os termos para continuar.");
    if (!form.name || !form.email || !form.password) return alert("Preencha os campos obrigatórios.");
    if (form.password !== form.confirmPassword) return alert("As senhas não coincidem.");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/register");
    }, 600);
  }

  const isDisabledFull =
    loading ||
    !acceptTerms ||
    !form.name ||
    !form.email ||
    !form.password ||
    !form.confirmPassword;

  return (
    <main>
      <AuthTopBar />
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-b from-[#B9B7FF] via-[#C7C6FF] to-[#DAD9FF]">
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="relative flex min-h-[520px] items-center py-12">
              <div className="z-10 w-full max-w-[420px] rounded-lg bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
                <h1 className="text-2xl font-semibold text-gray-900">Crie sua conta</h1>

                <p className="mt-1 text-sm text-gray-600">
                  Já possui uma conta?{" "}
                  <Link to="/login" className="text-primary font-semibold hover:underline">
                    Entre aqui.
                  </Link>
                </p>

                {step === 1 && (
                  <>
                    <form onSubmit={handleContinue} className="mt-6 space-y-4">
                      <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Insira seu email"
                        required
                        autoComplete="email"
                        className="h-[48px] w-full bg-light-gray-3 rounded px-4 text-sm text-dark-gray-2 placeholder:text-light-gray-2 outline-none focus:ring-2 focus:ring-primary/30"
                      />

                      <button
                        type="submit"
                        className="h-11 w-full rounded bg-primary text-sm font-semibold text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/30"
                      >
                        Criar Conta
                      </button>
                    </form>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-px flex-1 bg-gray-200" />
                      <span className="text-xs text-gray-500">Ou faça login com</span>
                      <span className="h-px flex-1 bg-gray-200" />
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => alert("Login Google (mockado)")}
                        className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white hover:bg-gray-50"
                        aria-label="Login com Google"
                      >
                        <span className="text-sm font-bold">G</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => alert("Login Facebook (mockado)")}
                        className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white hover:bg-gray-50"
                        aria-label="Login com Facebook"
                      >
                        <span className="text-sm font-bold">f</span>
                      </button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <FormInput
                      label="Nome completo"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Digite seu nome"
                      required
                      autoComplete="name"
                    />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormInput
                        label="CPF"
                        name="cpf"
                        value={form.cpf}
                        onChange={handleChange}
                        placeholder="000.000.000-00"
                        inputMode="numeric"
                      />
                      <FormInput
                        label="Telefone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        inputMode="tel"
                        autoComplete="tel"
                      />
                    </div>

                    <FormInput
                      label="E-mail"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seuemail@email.com"
                      required
                      autoComplete="email"
                    />

                    <FormInput
                      label="Senha"
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Digite sua senha"
                      required
                      autoComplete="new-password"
                    />

                    <FormInput
                      label="Confirmar senha"
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Repita sua senha"
                      required
                      autoComplete="new-password"
                    />

                    <label className="flex cursor-pointer items-start gap-3 rounded border border-gray-200 p-4 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                      />
                      <span className="leading-relaxed">
                        Li e aceito os{" "}
                        <button type="button" className="font-semibold text-gray-900 hover:underline">
                          Termos de uso
                        </button>{" "}
                        e a{" "}
                        <button type="button" className="font-semibold text-gray-900 hover:underline">
                          Política de Privacidade
                        </button>
                        .
                      </span>
                    </label>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="h-11 flex-1 rounded border border-gray-200 bg-white text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Voltar
                      </button>

                      <button
                        type="submit"
                        disabled={isDisabledFull}
                        className="h-11 flex-1 rounded bg-primary text-sm font-semibold text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {loading ? "Criando..." : "Finalizar"}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              <img
                src={tenisImg}
                alt="Tênis"
                className="pointer-events-none absolute right-[-60px] top-1/2 hidden w-[520px] -translate-y-1/2 select-none lg:block"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
