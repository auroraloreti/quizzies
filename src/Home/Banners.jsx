import React, { useState, useEffect } from "react";
import Shoppies from "../Assets/Shoppies.jpg";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Shoppies,
      title: "Il tuo cuore è pronto per un nuovo amore?",
      subtitle:
        "Scopri i nostri animali in cerca di casa e trova il tuo amico perfetto!",
      buttonText: "Scopri di più",
      buttonLink: "./adozioni",
    },
    {
      image: Shoppies,
      title: "Fai la differenza!",
      subtitle:
        "Contribuisci a migliorare la vita dei nostri amici a quattro zampe. Ogni donazione è preziosa.",
      buttonText: "Dona Ora",
      buttonLink: "./donate",
    },
    {
      image: Shoppies,
      title: "Non sai da dove iniziare?",
      subtitle:
        "Visita il nostro blog per trovare articoli e suggerimenti pratici per accogliere e curare i tuoi animali con amore.",
      buttonText: "Scopri di più",
      buttonLink: "./blog",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="
      relative 
      overflow-hidden 
      h-[24rem] 
      sm:h-[30rem] 
      md:h-[36rem] 
      lg:h-[40rem]"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 
            transition-opacity duration-1000 ease-in-out 
            ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="h-full w-full flex items-center justify-center p-4">
            <div
              className="
              bg-white bg-opacity-70 
              hover:bg-opacity-90 transition duration-300 
              drop-shadow-2xl 
              px-4 py-6 
              sm:px-6 sm:py-8 
              md:px-8 md:py-10 
              max-w-lg 
              text-center
            "
            >
              <p
                className="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                text-dark-green font-bold 
                mb-3 sm:mb-4 md:mb-6 
                drop-shadow-lg
              "
              >
                {slide.title}
              </p>
              <p
                className="
                text-md sm:text-lg md:text-xl lg:text-2xl 
                text-dark-grey 
                mb-5 sm:mb-6 md:mb-8 
                drop-shadow-lg
              "
              >
                {slide.subtitle}
              </p>
              <a
                href={slide.buttonLink}
                className="
                  bg-pink text-dark-grey 
                  px-3 py-2 sm:px-4 sm:py-3 
                  rounded-lg drop-shadow-lg 
                  hover:bg-dark-green hover:text-light-grey 
                  transition duration-300
                "
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`
              w-3 h-3 sm:w-4 sm:h-4 
              rounded-full 
              ${index === currentSlide ? "bg-purple-800" : "bg-purple-400"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
