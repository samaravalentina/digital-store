import { useState } from "react";

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
    if (!isFirst) setCurrentIndex(currentIndex - 1);
  }

  function nextImage() {
    if (!isLast) setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className={className}>
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "auto",
        }}
      >
        <button
          onClick={prevImage}
          disabled={isFirst}
          className={`absolute left-4 z-10 bg-white/80 p-2 rounded-full shadow ${
          isFirst ? "opacity-40 cursor-not-allowed" : "hover:bg-white"
  }`}
        >
          <img src="/assets/images/arrow-left.svg" 
          alt="Anterior" 
          className="w-6 h-6"
          />
        </button>

        <img
          src={images[currentIndex].src}
          alt="Produto"
          className="object-cover w-full h-full"
          style={{ borderRadius: radius }}
        />

        <button
          onClick={nextImage}
          disabled={isLast}
          className={`absolute left-4 z-10 bg-white/80 p-2 rounded-full shadow ${
          isFirst ? "opacity-40 cursor-not-allowed" : "hover:bg-white"
           }`}
        >
          <img src="/assets/images/arrow-right.svg" 
          alt="Próxima"
          className="w-6 h-6" />
        </button>
      </div>

      {showThumbs && (
        <div className="flex gap-3 mt-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumb ${index}`}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-[117px] h-[95px] object-cover ${
                currentIndex === index
                  ? "border-2 border-primary"
                  : "border border-transparent"
              }`}
              style={{ borderRadius: radius }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
