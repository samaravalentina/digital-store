import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  const { pathname } = useLocation();
  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/create-account") ||
    pathname.startsWith("/register");

  return (
    <>
      {!isAuthPage && <Header />}

      <Outlet />

      {!isAuthPage && <Footer />}
    </>
  );
}
