import offerImg from "../../assets/tenis-amarelo.png";

export default function SpecialOffer() {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -z-10 left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/30 sm:h-[320px] sm:w-[320px]" />

              <img
                src={offerImg}
                alt="Air Jordan edição de colecionador"
                className="w-full max-w-[420px] sm:max-w-[520px] object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-primary text-sm font-bold">Oferta especial</p>

            <h2 className="mt-2 text-2xl sm:text-4xl font-bold leading-tight text-dark-gray">
              Air Jordan edição de colecionador
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-dark-gray-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip.
            </p>

            <button className="mt-8 h-12 w-full sm:w-auto rounded bg-primary px-10 text-sm font-bold text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/30">
              Ver Oferta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
