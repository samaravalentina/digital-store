# 🛍️ Digital Store — Projeto Front-end

Este projeto é uma aplicação web desenvolvida em **React**, baseada no design oficial do **Digital Store**, seguindo fielmente os requisitos funcionais e visuais disponibilizados no Figma.

O objetivo do projeto é aplicar conceitos de **componentização**, **roteamento**, **boas práticas de código**, **organização de pastas** e **fidelidade visual ao layout**.

---

## 🎯 Objetivo do Projeto

Desenvolver uma aplicação front-end completa que simule uma loja virtual, contendo:

* Página Inicial (Home)
* Página de Listagem de Produtos
* Página de Visualização do Produto
* Área de Conta do Usuário (Meus Pedidos, Minhas Informações, Métodos de Pagamento)

---

## 🧩 Funcionalidades Implementadas

* ✅ Layout global com **Header** e **Footer**
* ✅ Campo de busca com query string (`/produtos?filter=`)
* ✅ Navegação com **React Router DOM**
* ✅ Listagem de produtos reutilizável
* ✅ Página de detalhes do produto
* ✅ Galeria de imagens com setas e thumbnails
* ✅ Filtros e ordenação (visual)
* ✅ Área de conta do usuário
* ✅ Estrutura de pastas organizada
* ✅ Estilização com **Tailwind CSS**
* ✅ Fidelidade ao layout do Figma

---

## 🛠️ Tecnologias Utilizadas

* **React**
* **React Router DOM**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **Git & GitHub**

---

## 📂 Estrutura de Pastas

src/
├── assets/
├── components/
│ ├── Header
│ ├── Footer
│ ├── Layout
│ ├── ProductCard
│ ├── ProductListing
│ ├── Gallery
│ ├── BuyBox
│ ├── Section
│ ├── FilterGroup
│ └── ...
├── pages/
│ ├── HomePage.jsx
│ ├── ProductListingPage.jsx
│ ├── ProductViewPage.jsx
│ ├── AccountLayout.jsx
│ ├── MyOrdersPage.jsx
│ ├── MyInfoPage.jsx
│ └── PaymentMethodsPage.jsx
├── routes/
│ └── AppRoutes.jsx
├── data/
│ └── products.js
├── App.jsx
└── main.jsx

---

## ▶️ Como Rodar o Projeto Localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/samaravalentina/digital-store.git
cd digital-store
npm install
npm run dev
http://localhost:5173
🎨 Design

Layout baseado no Figma oficial do Digital Store

Fidelidade visual priorizada

Responsividade considerada

🚀 Deploy

O deploy pode ser realizado utilizando:
Vercel

👩‍💻 Autoria

Projeto desenvolvido por:

Samara Valentina da Silva

(Projeto acadêmico — Digital College)

📌 Observações

As funcionalidades de ordenar e filtrar são visuais, conforme permitido no escopo do projeto.

O consumo de API real é opcional e não foi implementado nesta versão.

Projeto focado em boas práticas, organização e componentização.

📄 Licença

Este projeto é de uso educacional.
