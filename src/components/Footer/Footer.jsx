import Logo from "../Logo/Logo";
import FooterInfo from "../FooterInfo/FooterInfo";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo color="white" />

            <p className="text-sm text-white/90 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded hover:bg-white/10"
                aria-label="Facebook"
              >
                <img src={facebook} alt="" className="h-5 w-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded hover:bg-white/10"
                aria-label="Instagram"
              >
                <img src={instagram} alt="" className="h-5 w-5" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded hover:bg-white/10"
                aria-label="Twitter"
              >
                <img src={twitter} alt="" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterInfo
            title="Informações"
            informations={[
              { text: "Sobre Digital Store", link: "/about" },
              { text: "Blog", link: "/blog" },
              { text: "Trabalhe conosco", link: "/jobs" },
              { text: "Contato", link: "/contact" },
            ]}
          />

          <FooterInfo
            title="Categorias"
            informations={[
              { text: "Tênis", link: "/produtos?filter=tenis" },
              { text: "Camisetas", link: "/produtos?filter=camisetas" },
              { text: "Calças", link: "/produtos?filter=calcas" },
            ]}
          />

          <FooterInfo
            title="Minha Conta"
            informations={[
              { text: "Meus pedidos", link: "/pedidos" },
              { text: "Entrar", link: "/login" },
              { text: "Cadastrar", link: "/create-account" },
            ]}
          />
        </div>

        <hr className="mt-10 border-dark-gray-2" />

        <p className="text-center text-sm py-4 text-white/80">
          © 2026 Digital Store
        </p>
      </div>
    </footer>
  );
}
