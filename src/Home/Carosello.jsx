import React from 'react';
import 'tailwindcss/tailwind.css';

function Carousel() {
  const squares = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="w-20 h-20 bg-lilac rounded-full mb-2"  ></div>
      <p className="text-center text-purple ">{index + 1} posto</p>
    </div>
  ));

  return (
    <div className="flex overflow-x-auto space-x-4 mb-5">
      {squares}
    </div>
  );
}

export default Carousel;