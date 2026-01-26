import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-light-gray-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
