import Logo from "../Logo/Logo";
import FooterInfo from "../FooterInfo/FooterInfo";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="flex flex-col gap-4">
          <Logo color="white" />

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex gap-4">
            <a href="https://facebook.com">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>

        <FooterInfo
          title="Informações"
          informations={[
            { text: "Sobre Drip Store", link: "/about" },
            { text: "Blog", link: "/blog" },
            { text: "Trabalhe conosco", link: "/jobs" },
            { text: "Contato", link: "/contact" },
          ]}
        />

        <FooterInfo
          title="Categorias"
          informations={[
            { text: "Tênis", link: "/products?filter=tenis" },
            { text: "Camisetas", link: "/products?filter=camisetas" },
            { text: "Calças", link: "/products?filter=calcas" },
          ]}
        />

        <FooterInfo
          title="Minha Conta"
          informations={[
            { text: "Meus pedidos", link: "/orders" },
            { text: "Entrar", link: "/login" },
            { text: "Cadastrar", link: "/register" },
          ]}
        />
      </div>

      <hr className="border-dark-gray-2" />

      <p className="text-center text-sm py-4">
        © 2024 Digital Store
      </p>
    </footer>
  );
}
