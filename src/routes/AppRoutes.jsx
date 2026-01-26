import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";

import AccountLayout from "../pages/AccountLayout";
import MyOrdersPage from "../pages/MyOrdersPage";
import MyInfoPage from "../pages/MyInfoPage";
import PaymentMethodsPage from "../pages/PaymentMethodsPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="produtos" element={<ProductListingPage />} />
        <Route path="produto/:id" element={<ProductViewPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="pedidos" element={<AccountLayout />}>
          <Route index element={<MyOrdersPage />} />
          <Route path="minhas-informacoes" element={<MyInfoPage />} />
          <Route path="metodos-pagamento" element={<PaymentMethodsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
