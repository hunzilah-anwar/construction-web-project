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
  const projects = [
    {
      id: 1,
      title: "London Bank Headquarter",
      category: "Bank, Buildling",
      image: PostImage1,
      link: "/project/london-bank-headquarter",
    },
    {
      id: 2,
      title: "International Airport",
      category: "Airport, Construction",
      image: PostImage2,
      link: "/project/international-airport",
    },
    {
      id: 3,
      title: "Solar Roof Installation",
      category: "Power Source, Solar",
      image: PostImage3,
      link: "/project/solar-roof-installation",
    },
    {
      id: 4,
      title: "AK Copper Mine",
      category: "Mining",
      image: service1,
      link: "/project/ak-copper-mine",
    },
    {
      id: 5,
      title: "Mega Mall Construction",
      category: "Building, Mall",
      image: service2,
      link: "/project/mega-mall-construction",
    },
    {
      id: 6,
      title: "High Way Repaired",
      category: "Highway, Reparing",
      image: service3,
      link: "/project/highway-repaired",
    },
    {
      id: 7,
      title: "Shanghai Arena",
      category: "Arena, Stadium",
      image: service1,
      link: "/project/shanghai-arena",
    },
    {
      id: 8,
      title: "GoodLayers Headquater",
      category: "Building, Construction",
      image: service2,
      link: "/project/goodlayers-headquarter",
    },
    {
      id: 9,
      title: "Piping System Engineering",
      category: "Piping, Planning",
      image: service3,
      link: "/project/piping-system-engineering",
    },
  ];


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
          {projects.map((project) => (
            <div key={project.id} className="mb-8">
              <div className="relative group overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-60 object-cover group-hover:scale-[1.1] transition ease-in-out duration-500"
                />
                <div className="absolute top-0 right-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/70 transition-opacity duration-300"></div>
                <BiSearch className="absolute inset-0 cursor-pointer m-auto text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <Link
                to={project.link}
                className="font-saira text-xl font-bold"
              >
                {project.title}
              </Link>
              <h6 className="text-sm text-gray-400 mt-1 italic">{project.category}</h6>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
