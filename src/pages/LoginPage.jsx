import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput/FormInput";
import tenisImg from "../assets/tenis.png";
import AuthTopBar from "../components/AuthTopBar/AuthTopBar";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.password) return alert("Preencha e-mail e senha.");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 500);
  }

  const isDisabled = loading || !form.email || !form.password;

  return (
    <main>
      <AuthTopBar />
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-b from-[#B9B7FF] via-[#C7C6FF] to-[#DAD9FF]">
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="relative flex min-h-[520px] items-center py-12">
              <div className="z-10 w-full max-w-[420px] rounded-lg bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
                <h1 className="text-2xl font-semibold text-gray-900">Login</h1>

                <p className="mt-1 text-sm text-gray-600">
                  Não tem conta?{" "}
                  <Link to="/create-account" className="text-primary font-semibold hover:underline">
                    Criar agora
                  </Link>
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <FormInput
                    label="E-mail"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Insira seu email"
                    autoComplete="email"
                    required
                    className="h-[48px]"
                  />

                  <FormInput
                    label="Senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Digite sua senha"
                    autoComplete="current-password"
                    required
                    className="h-[48px]"
                  />

                  <div className="flex items-center justify-between gap-3 text-sm">
                    <label className="flex cursor-pointer items-center gap-2 text-gray-700">
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                      />
                      Lembrar de mim
                    </label>

                    <button
                      type="button"
                      className="font-semibold text-gray-900 hover:underline"
                      onClick={() => alert("Fluxo mockado: recuperar senha")}
                    >
                      Esqueci a senha
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isDisabled}
                    className="h-11 w-full rounded bg-primary text-sm font-semibold text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Entrando..." : "Entrar"}
                  </button>
                </form>
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
