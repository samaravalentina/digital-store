export default function Section({
  title,
  titleAlign = "left",
  link,
  children,
}) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 my-12">

      {/* Cabeçalho da seção */}
      <div
        className={`flex items-center mb-6 ${
          titleAlign === "center"
            ? "justify-center"
            : "justify-between"
        }`}
      >
        <h2
          className={`text-2xl text-dark-gray-2 ${
            titleAlign === "center" ? "text-center" : ""
          }`}
        >
          {title}
        </h2>

        {link && titleAlign === "left" && (
          <a
            href={link.href}
            className="text-primary text-lg"
          >
            {link.text}
          </a>
        )}
      </div>

      {/* Conteúdo */}
      <div>
        {children}
      </div>
    </section>
  );
}
