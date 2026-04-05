import React, { useState } from "react";
import VideoSlider from "../components/VideoSlider";
import { Link } from "react-router-dom";
import { PiCaretCircleDoubleRightThin } from "react-icons/pi";
import { CgChevronDoubleRight } from "react-icons/cg";
import { FaBuilding, FaHardHat, FaProjectDiagram } from "react-icons/fa";

// Image Paths
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";
import sectionBG from "../assets/section-bg1.jpg";
import ProjectSlider from "../components/ProjectSlider";
import Testimonial from "../components/Testimonial";
import PostImage1 from "../assets/company-1.jpg";
import PostImage2 from "../assets/company-2.jpg";
import PostImage3 from "../assets/company-3.jpg";
import { CiCalendar } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import ClientSlider from "../components/ClientSlider";

const Home = () => {
  const [isActiveTab, setIsActiveTab] = useState(1);
  const posts = [
    {
      id: 1,
      icon: <FaBuilding className="text-blue-500 w-6 h-6" />,
      image: PostImage1,
      title: "Sem Porta Mollis Parturient",
      date: "21 Mar 2014",
      comments: 0,
    },
    {
      id: 2,
      icon: <FaHardHat className="text-green-500 w-6 h-6" />,
      image: PostImage2,
      title: "Construction Made Easy",
      date: "15 Apr 2015",
      comments: 3,
    },
    {
      id: 3,
      icon: <FaProjectDiagram className="text-red-500 w-6 h-6" />,
      image: PostImage3,
      title: "Architectural Designs",
      date: "10 Jun 2016",
      comments: 1,
    },
  ];
  return (
    <>
      <VideoSlider />
      <section className="max-w-5xl m-auto">
        <div className="bg-primary text-white p-8 flex flex-wrap justify-center items-center gap-8 font-saira">
          <h2 className="sm:text-lg text-sm text-center">
            We provide fast and affordable service for your projects. Hire us!
          </h2>
          <Link
            to="/contact"
            className="sm:text-lg text-sm text-secondary uppercase font-bold border-l border-secondary pl-8"
          >
            Get the quote
          </Link>
        </div>
      </section>
      <section className="max-w-5xl m-auto py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-5">
          <div className="">
            <img src={service1} className="grayscale" alt="" />
            <h2 className=" font-saira font-semibold my-4 text-lg">
              Egestas Aenean Condimentum
            </h2>
            <p className="text-gray-400 text-sm font-light mb-4">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
              lacinia bibendum nulla sed consectetur.
            </p>
            <Link
              to="/contact"
              className="flex items-center gap-1 text-primary hover:text-secondary transition-colors duration-300 text-sm uppercase"
            >
              Learn More <PiCaretCircleDoubleRightThin size={20} />
            </Link>
          </div>
          <div className="">
            <img src={service2} className="grayscale" alt="" />
            <h2 className=" font-saira font-semibold my-4 text-lg">
              Egestas Mattis Ipsum
            </h2>
            <p className="text-gray-400 text-sm font-light mb-4">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
              lacinia bibendum nulla sed consectetur.
            </p>
            <Link
              to="/contact"
              className="flex items-center gap-1 text-primary hover:text-secondary transition-colors duration-300 text-sm uppercase"
            >
              Learn More <PiCaretCircleDoubleRightThin size={20} />
            </Link>
          </div>
          <div className="">
            <img src={service3} className="grayscale" alt="" />
            <h2 className=" font-saira font-semibold my-4 text-lg">
              Tortor Consectetur Dapibus Adipiscing
            </h2>
            <p className="text-gray-400 text-sm font-light mb-4">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
              lacinia bibendum nulla sed consectetur.
            </p>
            <Link
              to="/contact"
              className="flex items-center gap-1 text-primary hover:text-secondary transition-colors duration-300 text-sm uppercase"
            >
              Learn More <PiCaretCircleDoubleRightThin size={20} />
            </Link>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${sectionBG})` }}
        className="bg-cover bg-center py-20 px-10"
      >
        <div className="max-w-5xl m-auto">
          <h2 className="relative md:text-4xl sm:text-2xl text-xl text-white font-saira font-bold pb-4 mb-8">
            We Have Story Of Us For You To Discover
            <div className="absolute bottom-0 left-0 bg-white w-[5%] h-0.5"></div>
          </h2>
          <Link
            to="/contact"
            className="text-sm text-secondary hover:bg-black/30 transition-all border border-secondary px-4 py-2"
          >
            Get The Quote
          </Link>
        </div>
      </section>
      <section className="max-w-5xl m-auto py-16 px-5">
        <div className="flex md:flex-nowrap flex-wrap justify-start items-start gap-8">
          <ul className="flex flex-col justify-start items-start gap-1 border-r-2 border-[#99A6BA] md:w-50 w-full">
            <li
              onClick={() => setIsActiveTab(1)}
              className={`text-[14px] cursor-pointer w-full text-right font-saira px-2 py-3
                ${isActiveTab === 1 ? "text-white bg-[#99A6BA]" : "bg-[#F4F4F4] text-black"}
              `}
            >
              WHY CHOOSE US?
            </li>
            <li
              onClick={() => setIsActiveTab(2)}
              className={`text-[14px] cursor-pointer w-full text-right font-saira px-2 py-3
                ${isActiveTab === 2 ? "text-white bg-[#99A6BA]" : "bg-[#F4F4F4] text-black"}
              `}
            >
              OUR COMMITMENT
            </li>
            <li
              onClick={() => setIsActiveTab(3)}
              className={`text-[14px] cursor-pointer w-full text-right font-saira px-2 py-3
                ${isActiveTab === 3 ? "text-white bg-[#99A6BA]" : "bg-[#F4F4F4] text-black"}
              `}
            >
              STORY ABOUT US
            </li>
            <li
              onClick={() => setIsActiveTab(4)}
              className={`text-[14px] cursor-pointer w-full text-right font-saira px-2 py-3
                ${isActiveTab === 4 ? "text-white bg-[#99A6BA]" : "bg-[#F4F4F4] text-black"}
              `}
            >
              OUR VISION
            </li>
          </ul>
          <div>
            {isActiveTab === 1 && (
              <div className="flex justify-start items-start gap-4">
                <img
                  src={service1}
                  alt=""
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="max-w-2xl">
                  <h2 className="font-saira text-lg font-bold">
                    Why Choose Us?
                  </h2>
                  <p className="text-gray-500 text-sm font-light mt-4">
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Vivamus sagittis lacus vel augue laoreet rutrum
                    faucibus dolor auctor. Nulla vitae elit libero, a pharetra
                    augue. Cras justo odio, dapibus ac facilisis in, egestas
                    eget quam. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros. Integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.
                    Donec ullamcorper nulla non metus auctor fringilla. Donec
                    sed odio dui. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas sed diam eget risus varius blandit
                    sit amet non magna. Integer posu.
                  </p>
                </div>
              </div>
            )}
            {isActiveTab === 2 && (
              <div className="flex justify-start items-start gap-4">
                <img
                  src={service2}
                  alt=""
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="max-w-2xl">
                  <h2 className="font-saira text-lg font-bold">
                    OUR COMMITMENT
                  </h2>
                  <p className="text-gray-500 text-sm font-light mt-4">
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Vivamus sagittis lacus vel augue laoreet rutrum
                    faucibus dolor auctor. Nulla vitae elit libero, a pharetra
                    augue. Cras justo odio, dapibus ac facilisis in, egestas
                    eget quam. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros. Integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.
                    Donec ullamcorper nulla non metus auctor fringilla. Donec
                    sed odio dui. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas sed diam eget risus varius blandit
                    sit amet non magna. Integer posu.
                  </p>
                </div>
              </div>
            )}
            {isActiveTab === 3 && (
              <div className="flex justify-start items-start gap-4">
                <img
                  src={service3}
                  alt=""
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="max-w-2xl">
                  <h2 className="font-saira text-lg font-bold">
                    STORY ABOUT US
                  </h2>
                  <p className="text-gray-500 text-sm font-light mt-4">
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Vivamus sagittis lacus vel augue laoreet rutrum
                    faucibus dolor auctor. Nulla vitae elit libero, a pharetra
                    augue. Cras justo odio, dapibus ac facilisis in, egestas
                    eget quam. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros. Integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.
                    Donec ullamcorper nulla non metus auctor fringilla. Donec
                    sed odio dui. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas sed diam eget risus varius blandit
                    sit amet non magna. Integer posu.
                  </p>
                </div>
              </div>
            )}
            {isActiveTab === 4 && (
              <div className="flex justify-start items-start gap-4">
                <img
                  src={sectionBG}
                  alt=""
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="max-w-2xl">
                  <h2 className="font-saira text-lg font-bold">OUR VISION</h2>
                  <p className="text-gray-500 text-sm font-light mt-4">
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna. Vivamus sagittis lacus vel augue laoreet rutrum
                    faucibus dolor auctor. Nulla vitae elit libero, a pharetra
                    augue. Cras justo odio, dapibus ac facilisis in, egestas
                    eget quam. Duis mollis, est non commodo luctus, nisi erat
                    porttitor ligula, eget lacinia odio sem nec elit. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros. Integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.
                    Donec ullamcorper nulla non metus auctor fringilla. Donec
                    sed odio dui. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas sed diam eget risus varius blandit
                    sit amet non magna. Integer posu.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <ProjectSlider />
      <section className="bg-[#F2F2F2]">
        <div className="max-w-5xl m-auto py-16 grid md:grid-cols-2 grid-cols-1 gap-8">
          <Testimonial />
          <div className="px-2">
            <div className="flex flex-wrap justify-between items-center">
              <h1 className="text-3xl font-saira font-bold text-gray-800">
                Company's News
              </h1>
              <Link
                to="/"
                className="text-secondary text-sm font-saira font-semibold"
              >
                Read All News
                <CgChevronDoubleRight className="inline-block" size={20} />
              </Link>
            </div>
            <div>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex justify-start items-center gap-4 mt-8 bg-white cursor-pointer shadow-[1px_1px_0px_1px_rgb(221,221,221)]"
                >
                  <img
                    src={post.image}
                    alt=""
                    className="w-20 h-20 object-cover"
                  />
                  <div className="">
                    <h2 className="font-saira text-lg font-bold text-[#6F798B] hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-[12px] font-light flex items-center gap-4">
                      <span className="flex items-center gap-1 text-[#6F798B] hover:text-primary transition-colors duration-300">
                        <CiCalendar /> {post.date}
                      </span>{" "}
                      <span className="flex items-center gap-1 text-[#6F798B] hover:text-primary transition-colors duration-300">
                        <BiMessageRounded /> {post.comments} Comments
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl m-auto py-16 px-5">
        <ClientSlider />
      </section>
    </>
  );
};

export default Home;
