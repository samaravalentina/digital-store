import { Link } from "react-router-dom";

export default function FooterInfo({ title, informations }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-white font-semibold text-lg">
        {title}
      </h4>

      <ul className="flex flex-col gap-2">
        {informations.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="text-white text-sm hover:underline"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
