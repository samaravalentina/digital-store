import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout"; // ajuste o caminho conforme onde está seu Layout
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/produtos" element={<ProductListingPage />} />
      <Route path="/produto/:id" element={<ProductViewPage />} />
      <Route path="*" element={<div className="p-10">Página não encontrada</div>} />

    </Routes>
  );
};

export default AppRoutes;
