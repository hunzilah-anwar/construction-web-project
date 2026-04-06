import React from "react";
import projectBG from "../assets/page-title-background.jpg";
import PostImage1 from "../assets/company-1.jpg";
import PostImage2 from "../assets/company-2.jpg";
import PostImage3 from "../assets/company-3.jpg";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${projectBG})` }}
        className="relative bg-cover bg-center py-20 px-10 flex justify-center items-center"
      >
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <div className="max-w-5xl m-auto text-center z-10">
          <h1 className="relative text-white font-saira text-4xl font-bold">
            Projects that made by this company
            <div className="absolute left-[50%] -translate-x-[50%] -bottom-1.5 w-[60%] h-1 bg-secondary rounded-full"></div>
          </h1>
          <h4 className="text-white font-saira text-xl mt-8">
            Mega Construction Projects
          </h4>
        </div>
      </section>
      <section className="max-w-5xl m-auto py-20 px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-0 gap-10">
          <div className="mb-6">
            <div className="relative group overflow-hidden">
              <img
                src={PostImage1}
                alt=""
                className="w-full h-60 object-cover group-hover:scale-[1.1] transition ease-in-out duration-500"
              />
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300"></div>
              <BiSearch className="absolute inset-0 cursor-pointer m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Link
              to="/project/london-bank-headquarter"
              className="font-saira text-xl font-bold mt-4"
            >
              London Bank Headquarter
            </Link>
            <h6 className="text-sm text-gray-400 mt-1">Bank, Buildling</h6>
          </div>
          <div className="mb-6">
            <div className="relative group overflow-hidden">
              <img
                src={PostImage2}
                alt=""
                className="w-full h-60 object-cover group-hover:scale-[1.1] transition ease-in-out duration-500"
              />
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300"></div>
              <BiSearch className="absolute inset-0 cursor-pointer m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Link
              to="/project/international-airport"
              className="font-saira text-xl font-bold mt-4"
            >
              International Airport
            </Link>
            <h6 className="text-sm text-gray-400 mt-1">
              Airport, Construction
            </h6>
          </div>
          <div className="mb-6">
            <div className="relative group overflow-hidden">
              <img
                src={PostImage3}
                alt=""
                className="w-full h-60 object-cover group-hover:scale-[1.1] transition ease-in-out duration-500"
              />
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300"></div>
              <BiSearch className="absolute inset-0 cursor-pointer m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Link
              to="/project/solar-roof-installation"
              className="font-saira text-xl font-bold mt-4"
            >
              Solar Roof Installation
            </Link>
            <h6 className="text-sm text-gray-400 mt-1">Power Source, Solar</h6>
          </div>
          <div className="mb-6">
            <div className="relative group overflow-hidden">
              <img
                src={service1}
                alt=""
                className="w-full h-60 object-cover group-hover:scale-[1.1] transition ease-in-out duration-500"
              />
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300"></div>
              <BiSearch className="absolute inset-0 cursor-pointer m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Link
              to="/project/ak-copper-mine"
              className="font-saira text-xl font-bold mt-4"
            >
              AK Copper Mine
            </Link>
            <h6 className="text-sm text-gray-400 mt-1">Mining</h6>
          </div>
          <div className="mb-6">
            <div className="relative group overflow-hidden">
              <img
                src={service2}
                alt=""
                className="w-full h-60 object-cover group-hover:scale-[1.1] transition ease-in-out duration-500"
              />
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300"></div>
              <BiSearch className="absolute inset-0 cursor-pointer m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Link
              to="/project/mega-mall-construction"
              className="font-saira text-xl font-bold mt-4"
            >
              Mega Mall Construction
            </Link>
            <h6 className="text-sm text-gray-400 mt-1">Building, Mall</h6>
          </div>
          <div className="mb-6">
            <div className="relative group overflow-hidden">
              <img
                src={service3}
                alt=""
                className="w-full h-60 object-cover group-hover:scale-[1.1] transition ease-in-out duration-500"
              />
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300"></div>
              <BiSearch className="absolute inset-0 cursor-pointer m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Link
              to="/project/highway-repaired"
              className="font-saira text-xl font-bold mt-4"
            >
              High Way Repaired
            </Link>
            <h6 className="text-sm text-gray-400 mt-1">Highway, Reparing</h6>
          </div>
          <div className="mb-6">
            <div className="relative group overflow-hidden">
              <img
                src={service1}
                alt=""
                className="w-full h-60 object-cover group-hover:scale-[1.1] transition ease-in-out duration-500"
              />
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300"></div>
              <BiSearch className="absolute inset-0 cursor-pointer m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Link
              to="/project/shanghai-arena"
              className="font-saira text-xl font-bold mt-4"
            >
              Shanghai Arena
            </Link>
            <h6 className="text-sm text-gray-400 mt-1">Arena, Stadium</h6>
          </div>
          <div className="mb-6">
            <div className="relative group overflow-hidden">
              <img
                src={service2}
                alt=""
                className="w-full h-60 object-cover group-hover:scale-[1.1] transition ease-in-out duration-500"
              />
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300"></div>
              <BiSearch className="absolute inset-0 cursor-pointer m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Link
              to="/project/goodlayers-headquarter"
              className="font-saira text-xl font-bold mt-4"
            >
              GoodLayers Headquater
            </Link>
            <h6 className="text-sm text-gray-400 mt-1">
              Building, Construction
            </h6>
          </div>
          <div className="mb-6">
            <div className="relative group overflow-hidden">
              <img
                src={service3}
                alt=""
                className="w-full h-60 object-cover group-hover:scale-[1.1] transition ease-in-out duration-500"
              />
              <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300"></div>
              <BiSearch className="absolute inset-0 cursor-pointer m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <Link
              to="/project/piping-system-engineering"
              className="font-saira text-xl font-bold mt-4"
            >
              Piping System Engineering
            </Link>
            <h6 className="text-sm text-gray-400 mt-1">Piping, Planning</h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
