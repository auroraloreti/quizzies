import React from "react";
import "tailwindcss/tailwind.css";

function Carousel() {
  const squares = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="flex flex-col items-center flex-shrink-0">
      <div
        className="
          w-16 h-16 sm:w-20 sm:h-20 
          bg-lilac rounded-full mb-2
        "
      ></div>
      <p className="text-center text-purple text-sm sm:text-base">
        {index + 1}° posto
      </p>
      <p className="text-center text-purple text-sm sm:text-base">
        @nickname
      </p>
      
    </div>
  ));

  return (
    <div
      className="
      w-full 
      flex 
      space-x-4 
      overflow-x-auto 
      py-4
      scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-300
    "
    >
      {squares}
    </div>
  );
}

export default Carousel;
