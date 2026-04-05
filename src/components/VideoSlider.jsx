import React, { useState, useEffect } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      type: "video 1",
      src: "https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/02/construction-medium.mp4",
    },
    {
      type: "image 2",
      src: "https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/03/slider-2.jpg",
    },
    {
      type: "image 3",
      src: "https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/02/slider-1.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentItem = slides[currentIndex];

  return (
    <section className="relative w-full max-h-[90vh] overflow-hidden group">
      {currentItem.type === "video 1" ? (
        <div className="relative">
          <video
            key={currentIndex}
            autoPlay
            muted
            loop
            className="w-full h-[90vh] object-cover"
          >
            <source src={currentItem.src} type="video/mp4" />
          </video>
          <div className="absolute top-0 right-0 w-full h-full sm:px-22 px-5 flex flex-col justify-center  sm:items-center items-start bg-black/50">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-saira text-white font-bold">
              <span className="text-secondary">We Do</span> Big Things
            </h1>
            <p className="font-saira md:max-w-120 max-w-100 sm:text-right md:text-lg sm:text-sm text-white mt-6">
              MegaProject delivers construction management service to clients
              around the globe from planning stage to completion stage.
            </p>
            <Link to="/" className="mt-5">
              <h1 className="text-white border-b-2">Learn More</h1>
            </Link>
          </div>
        </div>
      ) : currentItem.type === "image 2" ? (
        <div className="relative">
          <img
            src={currentItem.src}
            alt="slide"
            className="w-full h-[90vh] object-cover"
          />
          <div className="absolute top-0 right-0 w-full h-full sm:px-22 px-5 flex flex-col justify-center  sm:items-center items-start bg-black/20"></div>
          <div className="absolute top-0 right-0 h-full sm:px-22 px-5 flex flex-col justify-center sm:items-end items-start">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-saira text-white font-bold">
              Construction <span className="text-primary">Services</span>
            </h1>
            <p className="font-saira md:max-w-120 max-w-100 sm:text-right md:text-lg sm:text-sm text-white mt-6">
              MegaProject delivers construction management service to clients
              around the globe from planning stage to completion stage.
            </p>
            <Link to="/" className="mt-5">
              <h1 className="text-white border-b-2">Learn More</h1>
            </Link>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={currentItem.src}
            alt="slide"
            className="w-full h-[90vh] object-cover"
          />
          <div className="absolute top-0 right-0 w-full h-full sm:px-22 px-5 flex flex-col justify-center  sm:items-center items-start bg-black/40"></div>
          <div className="absolute top-0 right-0 w-full h-full sm:px-22 px-5 flex flex-col justify-center sm:items-end items-start">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-saira text-white font-bold">
              We Are <span className="text-secondary">Mega Project</span>
            </h1>
            <p className="font-saira md:max-w-120 max-w-100 sm:text-right md:text-lg sm:text-sm text-white mt-6">
              MegaProject is the leading construction company of buildings and
              interior constructions. We have more than 20 years of experience in
              this field.
            </p>
            <Link to="/" className="mt-5">
              <h1 className="text-white border-b-2">Learn More</h1>
            </Link>
          </div>
        </div>
      )}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute sm:block hidden left-5 top-1/2 -translate-y-1/2 cursor-pointer text-white group-hover:opacity-100 opacity-0 transition-all"
      >
        <RiArrowLeftWideFill size={60} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute sm:block hidden right-5 top-1/2 -translate-y-1/2 cursor-pointer text-white group-hover:opacity-100 opacity-0 transition-all"
      >
        <RiArrowRightWideFill size={60} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-[50%] -translate-x-[50%] flex gap-1">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 bg-transparent border-2 border-white ${currentIndex === index ? "bg-white" : ""} rounded-full cursor-pointer`}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoSlider;