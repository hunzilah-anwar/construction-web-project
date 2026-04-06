import React, { useState, useEffect, useRef } from "react";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";
import sectionBG from "../assets/section-bg1.jpg";
import { FaInstagram, FaRegDotCircle } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaCogs, FaLayerGroup, FaTruck, FaBuilding } from "react-icons/fa";
import Personnel1 from "../assets/personnel-4.jpg";
import Personnel2 from "../assets/personnel-5.jpg";
import Personnel3 from "../assets/personnel-6.jpg";
import Personnel4 from "../assets/personnel-7.jpg";
import Personnel5 from "../assets/personnel-11.jpg";
import Personnel6 from "../assets/personnel-21.jpg";

const Services = () => {
  const [isActiveTab, setIsActiveTab] = useState(1);

  const team = [
    {
      id: 1,
      image: Personnel1,
      name: "Ali Khan",
      position: "Project Manager",
      desc: "Expert in managing large scale construction projects efficiently.",
    },
    {
      id: 2,
      image: Personnel2,
      name: "Sara Ahmed",
      position: "Architect",
      desc: "Creative architect with modern and sustainable design ideas.",
    },
    {
      id: 3,
      image: Personnel3,
      name: "Usman Tariq",
      position: "Site Engineer",
      desc: "Handles on-site operations with precision and expertise.",
    },
    {
      id: 4,
      image: Personnel4,
      name: "Ayesha Noor",
      position: "Interior Designer",
      desc: "Designs beautiful and functional interior spaces.",
    },
    {
      id: 5,
      image: Personnel5,
      name: "Bilal Hussain",
      position: "Supervisor",
      desc: "Ensures smooth workflow and team coordination.",
    },
    {
      id: 6,
      image: Personnel6,
      name: "Hina Ali",
      position: "Planner",
      desc: "Strategic planning expert for project execution.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const timeoutRef = useRef(null);

  const totalSlides = team.length;

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

  // Responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(4);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalSlides) setCurrentIndex(0);
    else if (currentIndex < 0) setCurrentIndex(totalSlides - 1);
  };

  const displayTeam = [...team, ...team.slice(0, visibleCount)];

  const data = [
    {
      icon: <FaCogs />,
      title: "Sollicitudin Consectetur",
      desc: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Ultricies Tortor",
      desc: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    },
    {
      icon: <FaTruck />,
      title: "Sit Vehicula",
      desc: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    },
    {
      icon: <FaBuilding />,
      title: "Dolor Ligula",
      desc: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    },
  ];

  return (
    <>
      <section className="max-w-5xl m-auto py-16 px-5">
        <div className="flex md:flex-nowrap flex-wrap justify-start items-start gap-8">
          <ul className="flex flex-col justify-start items-start gap-1 border-r-2 border-[#99A6BA] md:w-50 w-full">
            <li
              onClick={() => setIsActiveTab(1)}
              className={`text-[14px] cursor-pointer w-full text-right font-saira px-2 py-3
                ${isActiveTab === 1 ? "text-white bg-[#99A6BA]" : "bg-[#F4F4F4] text-black"}
              `}
            >
              Construction
            </li>
            <li
              onClick={() => setIsActiveTab(2)}
              className={`text-[14px] cursor-pointer w-full text-right font-saira px-2 py-3
                ${isActiveTab === 2 ? "text-white bg-[#99A6BA]" : "bg-[#F4F4F4] text-black"}
              `}
            >
              Architecture
            </li>
            <li
              onClick={() => setIsActiveTab(3)}
              className={`text-[14px] cursor-pointer w-full text-right font-saira px-2 py-3
                ${isActiveTab === 3 ? "text-white bg-[#99A6BA]" : "bg-[#F4F4F4] text-black"}
              `}
            >
              Engineer Consulting
            </li>
            <li
              onClick={() => setIsActiveTab(4)}
              className={`text-[14px] cursor-pointer w-full text-right font-saira px-2 py-3
                ${isActiveTab === 4 ? "text-white bg-[#99A6BA]" : "bg-[#F4F4F4] text-black"}
              `}
            >
              Pipe System
            </li>
            <li
              onClick={() => setIsActiveTab(5)}
              className={`text-[14px] cursor-pointer w-full text-right font-saira px-2 py-3
                ${isActiveTab === 5 ? "text-white bg-[#99A6BA]" : "bg-[#F4F4F4] text-black"}
              `}
            >
              Interior
            </li>
          </ul>
          <div>
            {isActiveTab === 1 && (
              <div className="flex justify-start items-start gap-4">
                <img
                  src={service1}
                  alt=""
                  className="rounded-full w-18 h-18 object-cover"
                />
                <div className="max-w-2xl">
                  <h2 className="font-saira text-lg font-bold">Construction</h2>
                  <p className="text-gray-500 text-sm font-light mt-4">
                    Maecenas faucibus mollis interdum. Sed posuere consectetur
                    est at lobortis. Donec ullamcorper nulla non metus auctor
                    fringilla. Sed posuere consectetur est at lobortis. Nulla
                    vitae elit libero, a pharetra augue. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Vestibulum id ligula porta felis euismod semper. Nullam id
                    dolor id nibh ultricies vehicula ut id elit. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. Aenean lacinia bibendum nulla sed consectetur.
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Vestibulum id ligula porta felis
                    euismod semper. Aenean lacinia bibendum nulla sed
                    consectetur. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Integer posuere erat a ante venenatis
                    dapibus posuere velit aliquet. Donec ullamcorper nulla non
                    metus auctor fringilla. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros. Maecenas sed diam eget
                    risus varius blandit sit amet non magna. Donec id elit non
                    mi porta gravida at eget metus. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem
                    nec elit.
                  </p>
                </div>
              </div>
            )}
            {isActiveTab === 2 && (
              <div className="flex justify-start items-start gap-4">
                <img
                  src={service2}
                  alt=""
                  className="rounded-full w-18 h-18 object-cover"
                />
                <div className="max-w-2xl">
                  <h2 className="font-saira text-lg font-bold">Architecture</h2>
                  <p className="text-gray-500 text-sm font-light mt-4">
                    Maecenas faucibus mollis interdum. Sed posuere consectetur
                    est at lobortis. Donec ullamcorper nulla non metus auctor
                    fringilla. Sed posuere consectetur est at lobortis. Nulla
                    vitae elit libero, a pharetra augue. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Vestibulum id ligula porta felis euismod semper. Nullam id
                    dolor id nibh ultricies vehicula ut id elit. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. Aenean lacinia bibendum nulla sed consectetur.
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Vestibulum id ligula porta felis
                    euismod semper. Aenean lacinia bibendum nulla sed
                    consectetur. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Integer posuere erat a ante venenatis
                    dapibus posuere velit aliquet. Donec ullamcorper nulla non
                    metus auctor fringilla. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros. Maecenas sed diam eget
                    risus varius blandit sit amet non magna. Donec id elit non
                    mi porta gravida at eget metus. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem
                    nec elit.
                  </p>
                </div>
              </div>
            )}
            {isActiveTab === 3 && (
              <div className="flex justify-start items-start gap-4">
                <img
                  src={service3}
                  alt=""
                  className="rounded-full w-18 h-18 object-cover"
                />
                <div className="max-w-2xl">
                  <h2 className="font-saira text-lg font-bold">
                    Engineer Consulting
                  </h2>
                  <p className="text-gray-500 text-sm font-light mt-4">
                    Maecenas faucibus mollis interdum. Sed posuere consectetur
                    est at lobortis. Donec ullamcorper nulla non metus auctor
                    fringilla. Sed posuere consectetur est at lobortis. Nulla
                    vitae elit libero, a pharetra augue. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Vestibulum id ligula porta felis euismod semper. Nullam id
                    dolor id nibh ultricies vehicula ut id elit. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. Aenean lacinia bibendum nulla sed consectetur.
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Vestibulum id ligula porta felis
                    euismod semper. Aenean lacinia bibendum nulla sed
                    consectetur. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Integer posuere erat a ante venenatis
                    dapibus posuere velit aliquet. Donec ullamcorper nulla non
                    metus auctor fringilla. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros. Maecenas sed diam eget
                    risus varius blandit sit amet non magna. Donec id elit non
                    mi porta gravida at eget metus. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem
                    nec elit.
                  </p>
                </div>
              </div>
            )}
            {isActiveTab === 4 && (
              <div className="flex justify-start items-start gap-4">
                <img
                  src={sectionBG}
                  alt=""
                  className="rounded-full w-18 h-18 object-cover"
                />
                <div className="max-w-2xl">
                  <h2 className="font-saira text-lg font-bold">Pipe System</h2>
                  <p className="text-gray-500 text-sm font-light mt-4">
                    Maecenas faucibus mollis interdum. Sed posuere consectetur
                    est at lobortis. Donec ullamcorper nulla non metus auctor
                    fringilla. Sed posuere consectetur est at lobortis. Nulla
                    vitae elit libero, a pharetra augue. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Vestibulum id ligula porta felis euismod semper. Nullam id
                    dolor id nibh ultricies vehicula ut id elit. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. Aenean lacinia bibendum nulla sed consectetur.
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Vestibulum id ligula porta felis
                    euismod semper. Aenean lacinia bibendum nulla sed
                    consectetur. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Integer posuere erat a ante venenatis
                    dapibus posuere velit aliquet. Donec ullamcorper nulla non
                    metus auctor fringilla. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros. Maecenas sed diam eget
                    risus varius blandit sit amet non magna. Donec id elit non
                    mi porta gravida at eget metus. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem
                    nec elit.
                  </p>
                </div>
              </div>
            )}
            {isActiveTab === 5 && (
              <div className="flex justify-start items-start gap-4">
                <img
                  src={sectionBG}
                  alt=""
                  className="rounded-full w-18 h-18 object-cover"
                />
                <div className="max-w-2xl">
                  <h2 className="font-saira text-lg font-bold">Interior</h2>
                  <p className="text-gray-500 text-sm font-light mt-4">
                    Maecenas faucibus mollis interdum. Sed posuere consectetur
                    est at lobortis. Donec ullamcorper nulla non metus auctor
                    fringilla. Sed posuere consectetur est at lobortis. Nulla
                    vitae elit libero, a pharetra augue. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Vestibulum id ligula porta felis euismod semper. Nullam id
                    dolor id nibh ultricies vehicula ut id elit. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. Aenean lacinia bibendum nulla sed consectetur.
                    Donec sed odio dui. Cras justo odio, dapibus ac facilisis
                    in, egestas eget quam. Vestibulum id ligula porta felis
                    euismod semper. Aenean lacinia bibendum nulla sed
                    consectetur. Praesent commodo cursus magna, vel scelerisque
                    nisl consectetur et. Integer posuere erat a ante venenatis
                    dapibus posuere velit aliquet. Donec ullamcorper nulla non
                    metus auctor fringilla. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros. Maecenas sed diam eget
                    risus varius blandit sit amet non magna. Donec id elit non
                    mi porta gravida at eget metus. Duis mollis, est non commodo
                    luctus, nisi erat porttitor ligula, eget lacinia odio sem
                    nec elit.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="bg-[#F2F2F2] px-5">
        <div className="max-w-5xl m-auto py-16 grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="">
            <h2 className="font-saira text-4xl font-bold">
              Something About Us
            </h2>
            <p className="text-gray-500 text-sm font-light mt-4">
              <b className="font-bold">Maecenas sed diam eget risus</b> varius
              blandit sit amet non magna. Vivamus sagittis lacus vel augue
              laoreet rutrum faucibus dolor auctor. Nu lla vitae elit libero, a
              pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas
              eget quam. Duis mollis, est non commodo luctus, nisi erat
              porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Integer posuere erat
              a ante venenatis dapibus posuere velit aliquet.
              <br />
              <br />
              Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio
              dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mae
              cenas sed diam eget risus varius blandit sit amet non magna.
              Integer posu. Nullam quis risus eget urna mollis ornare vel eu
              leo.
            </p>
          </div>
          <div className="">
            <h2 className="font-saira text-4xl font-bold">Our Vision</h2>
            <p className="text-gray-500 text-sm font-light mt-4">
              Maecenas sed diam eget risus varius blandit sit amet non magna.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Nu lla vitae elit libero.
            </p>
            <ul>
              <li className="text-gray-500 text-sm font-light mt-4 flex items-center gap-2">
                <FaRegDotCircle /> Porta Condimentum Ultricies Purus Sit
              </li>
              <li className="text-gray-500 text-sm font-light mt-4 flex items-center gap-2">
                <FaRegDotCircle /> Maecenas sed diam eget risus varius blandit
                sit amet non magna.
              </li>
              <li className="text-gray-500 text-sm font-light mt-4 flex items-center gap-2">
                <FaRegDotCircle /> Vestibulum id ligula porta felis euismod
                semper.
              </li>
              <li className="text-gray-500 text-sm font-light mt-4 flex items-center gap-2">
                <FaRegDotCircle /> Integer posuere erat a ante venenatis dapibus
                posuere velit aliquet.
              </li>
              <li className="text-gray-500 text-sm font-light mt-4 flex items-center gap-2">
                <FaRegDotCircle /> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-5xl m-auto py-16 px-5">
        <div className="">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {data.map((item, index) => (
              <div key={index} className="text-center">
                {/* ICON */}
                <div className="text-4xl text-white p-4 inline-block bg-primary rounded mb-4 justify-center transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-primary font-saira mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full h-150 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="https://demo.goodlayers.com/megaproject/wp-content/uploads/2015/02/construction-medium.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="max-w-6xl m-auto py-16 px-5">
        <div
          className=""
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* SAME HEADER STRUCTURE */}
          <div className="text-center mb-20 relative">
            <h2 className="text-4xl font-bold font-saira text-gray-800">
              Meet The Team
            </h2>
            <p className="text-gray-500 mt-2 italic">
              Here are people behind our success
            </p>

            {/* SAME BUTTON POSITION */}
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

          {/* SAME SLIDER */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-700 ease-in-out"
              style={{
                width: `${(displayTeam.length / visibleCount) * 100}%`,
                transform: `translateX(-${(currentIndex * 100) / displayTeam.length}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {displayTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-white"
                  style={{ width: `${100 / displayTeam.length}%` }}
                >
                  {/* IMAGE */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-60 object-cover"
                  />

                  {/* CONTENT */}
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-gray-800 font-saira">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 italic text-sm mb-2">
                      {member.position}
                    </p>
                    <p className="text-gray-400 text-sm mt-4">{member.desc}</p>

                    {/* ICONS */}
                    <div className="flex justify-center gap-4 mt-6">
                      <div className="p-2 rounded-full border border-gray-300 cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110">
                        <FaFacebookF />
                      </div>

                      <div className="p-2 rounded-full border border-gray-300 cursor-pointer transition-all duration-300 hover:bg-sky-500 hover:text-white hover:scale-110">
                        <FaTwitter />
                      </div>

                      <div className="p-2 rounded-full border border-gray-300 cursor-pointer transition-all duration-300 hover:bg-blue-700 hover:text-white hover:scale-110">
                        <FaLinkedinIn />
                      </div>

                      <div className="p-2 rounded-full border border-gray-300 cursor-pointer transition-all duration-300 hover:bg-pink-500 hover:text-white hover:scale-110">
                        <FaInstagram />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
