import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const clients = [
  { id: 1, image: "https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/02/banner-1.jpg", link: "/company/1" },
  { id: 2, image: "https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/02/banner-2.jpg", link: "/company/2" },
  { id: 3, image: "https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/02/banner-3.jpg", link: "/company/3" },
  { id: 4, image: "https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/02/banner-4.jpg", link: "/company/4" },
  { id: 5, image: "https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/02/banner-5.jpg", link: "/company/5" },
  { id: 6, image: "https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/02/banner-6.jpg", link: "/company/6" },
  { id: 7, image: "https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/02/banner-7.jpg", link: "/company/7" },
];

const ClientSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const timeoutRef = useRef(null);

  const totalSlides = clients.length;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  // Auto slide
  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => nextSlide(), 3000);
    }
    return () => resetTimeout();
  }, [currentIndex, isHovered]);

  // Responsive visible count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisibleCount(5); // xl
      else if (window.innerWidth >= 1024) setVisibleCount(4); // lg
      else if (window.innerWidth >= 768) setVisibleCount(3); // md
      else if (window.innerWidth >= 480) setVisibleCount(2); // sm
      else setVisibleCount(1); // xs
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset position when reaching cloned slides
  const handleTransitionEnd = () => {
    if (currentIndex >= totalSlides) setCurrentIndex(0);
    else if (currentIndex < 0) setCurrentIndex(totalSlides - 1);
  };

  const displayClients = [...clients, ...clients.slice(0, visibleCount)];

  return (
    <div
      className=""
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center mb-20 relative">
        <h2 className="text-4xl font-bold font-saira text-gray-800">Our Clients</h2>
        <p className="text-gray-500 mt-2">
          Many big companies trust in our quality
        </p>

        <div className="absolute top-20 right-0 flex mt-2">
          <button
            onClick={prevSlide}
            className="bg-white py-1 px-6 border border-gray-300 text-gray-400 cursor-pointer"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="bg-white py-1 px-6 border border-gray-300 text-gray-400 cursor-pointer"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-700 ease-in-out"
          style={{
            width: `${(displayClients.length / visibleCount) * 100}%`,
            transform: `translateX(-${(currentIndex * 100) / displayClients.length}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {displayClients.map((client, index) => (
            <Link
              to={client.link}
              key={index}
              className="flex justify-center items-center px-2 border border-gray-400"
              style={{ width: `${100 / displayClients.length}%` }}
            >
              <img
                src={client.image}
                alt={`Client ${client.id}`}
                className="h-20 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;