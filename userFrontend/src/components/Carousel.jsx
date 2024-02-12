/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center p-2 item-center">
        <div className="ml-0 my-auto">
          <ChevronLeft
            size={40}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            onClick={prev}
          />
        </div>
        <div className="mr-0 my-auto">
          <ChevronRight
            size={40}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            onClick={next}
          />
        </div>
      </div>
      <div className="absolute bottom-2 right-0 left-0">
        <div className="flex items-center justify-center gap-2 w-[25%]">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-black rounded-full ${
                curr === i ? "p-1.2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
