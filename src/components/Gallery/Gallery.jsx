import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

export default function Gallery({
  images,
  width,
  height,
  radius = "0px",
  showThumbs,
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  function prevImage() {
    if (!isFirst) setCurrentIndex((prev) => prev - 1);
  }

  function nextImage() {
    if (!isLast) setCurrentIndex((prev) => prev + 1);
  }

  const containerStyle = {
    width: width ? `${width}px` : "100%",
    maxWidth: "100%",
    height: height ? `${height}px` : "auto",
    borderRadius: radius,
  };

  return (
    <div className={className}>
      <div
        className="relative overflow-hidden bg-white flex items-center justify-center w-full"
        style={containerStyle}
      >

        <button
          type="button"
          onClick={prevImage}
          disabled={isFirst}
          className={`absolute left-3 sm:left-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 shadow transition ${
            isFirst ? "opacity-40 cursor-not-allowed" : "hover:bg-white"
          }`}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" className="h-5 w-5" />
        </button>

        <img
          src={images[currentIndex]?.src}
          alt="Produto"
          className="w-full h-full object-cover"
          style={{ borderRadius: radius }}
        />

        <button
          type="button"
          onClick={nextImage}
          disabled={isLast}
          className={`absolute right-3 sm:right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 shadow transition ${
            isLast ? "opacity-40 cursor-not-allowed" : "hover:bg-white"
          }`}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" className="h-5 w-5" />
        </button>
      </div>

      {showThumbs && (
        <div className="mt-4 -mx-4 px-4 overflow-x-auto">
          <div className="flex gap-3 w-max">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`shrink-0 rounded border ${
                  currentIndex === index
                    ? "border-primary border-2"
                    : "border-transparent"
                }`}
                aria-label={`Ver imagem ${index + 1}`}
                style={{ borderRadius: radius }}
              >
                <img
                  src={image.src}
                  alt={`Thumb ${index + 1}`}
                  className="h-[78px] w-[96px] sm:h-[95px] sm:w-[117px] object-cover"
                  style={{ borderRadius: radius }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
