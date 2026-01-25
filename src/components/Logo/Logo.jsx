import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <Link to="/" aria-label="Digital Store - Página inicial">
      <img
        src={logo}
        alt="Digital Store"
        width={253}
        height={44}
        className="block"
      />
    </Link>
  );
}
