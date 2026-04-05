import React, { useState, useEffect, useRef } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import Testimonial1 from "../assets/testimonial-1.jpg";
import Testimonial2 from "../assets/testimonial-2.jpg";
import Testimonial3 from "../assets/testimonial-3.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: `Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem males uada magna mollis euismod. Etiam porta m males uada ma gna mollis euismod. Praesent commodo cursus magn a, vel scele risque nisl conse ctetur et. Aenean eu leo quam. Pellentesque orna re sem lacinia quam. Praesent commodo cursus magna, vel scelerisque nisl.`,
      author: "John Smith",
      role: "Senior Engineer, The Building Co",
      image: Testimonial1,
    },
    {
      id: 2,
      text: `Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem males uada magna mollis euismod. Etiam porta m males uada ma gna mollis euismod. Praesent commodo cursus magn a, vel scele risque nisl conse ctetur et. Aenean eu leo quam. Nia quam. Praesent commodo cursus magna, vel.`,
      author: "Jane Doe",
      role: "Project Manager, BuildRight",
      image: Testimonial2,
    },
    {
      id: 3,
      text: `Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem males uada magna mollis euismod. Etiam porta m males uada ma gna mollis euismod. Praesent commodo cursus magn a, vel scele risque nisl conse ctetur et. Aenean eu leo quam. Nia quam. Praesent commodo cursus magna, vel.`,
      author: "Mike Johnson",
      role: "Architect, ConstructCo",
      image: Testimonial3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 4000);
    }
    return () => {
      resetTimeout();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8 px-2">
        <h1 className="text-3xl font-saira font-bold text-gray-800">
          Testimonial
        </h1>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="px-6 py-2 text-gray-400 cursor-pointer border border-gray-300"
          >
            <RiArrowLeftWideFill />
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-2 text-gray-400 cursor-pointer border border-gray-300"
          >
            <RiArrowRightWideFill />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full shrink-0 px-2">
              <div className="text-sm text-gray-400 font-light bg-white p-6 shadow-[1px_1px_0px_1px_rgb(221,221,221)]">
                <p>{testimonial.text}</p>
                <h2 className="text-right mt-6">
                  <span className="text-secondary font-saira font-semibold">
                    {testimonial.author}
                  </span>
                  , {testimonial.role}
                </h2>
              </div>
              <div className="flex justify-end pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-18 h-18 object-cover shadow-[1px_1px_0px_1px_rgb(221,221,221)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;