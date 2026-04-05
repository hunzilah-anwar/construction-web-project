import React, { useState, useEffect, useRef } from "react";
import projectBG from "../assets/project-bg.jpg";
import { FaBuilding, FaHardHat, FaProjectDiagram } from "react-icons/fa";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProjectSlider = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(300);
  const [isHovered, setIsHovered] = useState(false);

  const sliderRef = useRef(null);

  // Responsive cards
  const updateResponsive = () => {
    if (window.innerWidth < 640) setVisibleCards(1);
    else if (window.innerWidth < 1024) setVisibleCards(2);
    else setVisibleCards(3);
  };

  useEffect(() => {
    const handleResize = () => updateResponsive();

    // Initial call
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Services Data
  const services = [
    {
      id: 1,
      name: "Building Construction",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/12/photodune-1221793-office-m-700x450.jpg",
      icon: FaBuilding,
      category: "Building",
      url: "https://example.com/building-construction",
    },
    {
      id: 2,
      name: "House Renovation",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/12/2463697763_2ed6bf2114_b-700x450.jpg",
      icon: FaHardHat,
      category: "Constructions",
      url: "https://example.com/house-renovation",
    },
    {
      id: 3,
      name: "Project Planning",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/11/photodune-3360129-installing-photovoltaic-solar-panels-m-700x450.jpg",
      icon: FaProjectDiagram,
      category: "Project Planning",
      url: "https://example.com/project-planning",
    },
    {
      id: 4,
      name: "Commercial Building",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/12/photodune-3708768-construction-m-700x450.jpg",
      icon: FaBuilding,
      category: "Building",
      url: "https://example.com/commercial-building",
    },
    {
      id: 5,
      name: "Interior Construction",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/11/Fotolia_13762570_Subscription_Monthly_XXL-700x450.jpg",
      icon: FaHardHat,
      category: "Constructions",
      url: "https://example.com/interior-construction",
    },
    {
      id: 6,
      name: "Urban Planning",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/11/photodune-695134-donbass-arena-stadium-aerial-view-m-700x450.jpg",
      icon: FaProjectDiagram,
      category: "Project Planning",
      url: "https://example.com/urban-planning",
    },
    {
      id: 7,
      name: "Industrial Construction",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/12/photodune-1232401-construction-m-700x450.jpg",
      icon: FaBuilding,
      category: "Building",
      url: "https://example.com/industrial-construction",
    },
  ];

  // Filtered Services
  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((item) => item.category === activeCategory);

  // Clone for infinite loop
  const cloned = [
    ...filtered.slice(-visibleCards),
    ...filtered,
    ...filtered.slice(0, visibleCards),
  ];

  // Reset index when category or visibleCards change
  useEffect(() => {
    const resetSlider = () => {
      setIsTransitioning(false);
      setCurrentIndex(visibleCards);

      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    };

    resetSlider();
  }, [visibleCards, activeCategory]);

  // Update card width dynamically
  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setCardWidth(sliderRef.current.offsetWidth / visibleCards);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [visibleCards]);

  // Slide controls
  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  // Infinite loop fix
  const handleTransitionEnd = () => {
    if (currentIndex >= filtered.length + visibleCards) {
      setIsTransitioning(false);
      setCurrentIndex(visibleCards);
    }
    if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(filtered.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  // Auto slide
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  return (
    <section
      style={{ backgroundImage: `url(${projectBG})` }}
      className="py-16 px-5 bg-cover bg-center"
    >
      <div className="max-w-5xl m-auto flex flex-wrap justify-between items-center">
        <h2 className="font-saira text-2xl font-bold text-secondary">
          OUR PROJECTS
        </h2>

        <div className="flex flex-wrap gap-4">
          {/* Filters */}
          <div className="flex gap-4">
            {["All", "Building", "Constructions", "Project Planning"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`font-saira cursor-pointer underline underline-offset-4 ${
                    activeCategory === cat ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === "Constructions" ? "Construction" : cat}
                </button>
              ),
            )}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="px-6 py-2 text-white cursor-pointer bg-black/50 hover:bg-black/30"
            >
              <RiArrowLeftWideFill />
            </button>
            <button
              onClick={nextSlide}
              className="px-6 py-2 text-white cursor-pointer bg-black/50 hover:bg-black/30"
            >
              <RiArrowRightWideFill />
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        className="max-w-5xl m-auto mt-8 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={sliderRef}
      >
        <div
          className="flex"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
            transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {cloned.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                to={service.url}
                style={{ width: `${cardWidth}px` }}
                className="h-48 relative group overflow-hidden shrink-0"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

                <div className="absolute bottom-4 left-4 text-white z-10 flex items-center gap-2">
                  <Icon />
                  <h3 className="font-bold">{service.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
