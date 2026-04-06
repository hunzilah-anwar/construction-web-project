import React from "react";
import projectBG from "../assets/page-title-background.jpg";
import BlogTemplate from "../components/BlogTemplate";
import PostImage1 from "../assets/company-1.jpg";
import PostImage2 from "../assets/company-2.jpg";
import PostImage3 from "../assets/company-3.jpg";
import { CgChevronDoubleRight } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { BiMessageRounded, BiSearch } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa6";
import { FaHardHat, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LiaAngleRightSolid } from "react-icons/lia";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in culpa...",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/12/photodune-1221793-office-m-750x330.jpg",
      date: "2024-06-01",
      name: "John Doe",
      comments: 5,
    },
    {
      id: 2,
      title: "Blog Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in culpa...",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/11/photodune-3260123-construction-m-750x330.jpg",
      date: "2024-06-02",
      name: "Jane Smith",
      comments: 3,
    },
    {
      id: 3,
      title: "Blog Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in culpa...",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/11/photodune-8945686-construction-site-digger-excavator-and-dumper-truck-industrial-m-750x330.jpg",
      date: "2024-06-03",
      name: "Alice Johnson",
      comments: 8,
    },
    {
      id: 4,
      title: "Blog Title 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere. Magna pars studiorum, prodita quaerimus. Magna pars studiorum, prodita quaerimus. Fabio vel iudice vincam, sunt in culpa...",
      image:
        "https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/11/photodune-352724-construction-m-750x330.jpg",
      date: "2024-06-04",
      name: "Bob Brown",
      comments: 2,
    },
  ];

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
      <section
        style={{ backgroundImage: `url(${projectBG})` }}
        className="relative bg-cover bg-center py-20 px-10 flex justify-center items-center"
      >
        <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>
        <div className="max-w-5xl m-auto text-center z-10">
          <h1 className="relative text-white font-saira text-4xl font-bold">
            Blog Full With Right Sidebar
            <div className="absolute left-[50%] -translate-x-[50%] -bottom-1.5 w-[60%] h-1 bg-secondary rounded-full"></div>
          </h1>
          <h4 className="text-white font-saira text-xl mt-8">
            Caption placed here
          </h4>
        </div>
      </section>
      <section className="max-w-6xl m-auto">
        <div className="grid lg:grid-cols-3 grid-cols-1">
          <div className="lg:col-span-2">
            <BlogTemplate blogs={blogs} />
          </div>
          <div className="px-2 py-16">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="w-full relative">
                <input
                  type="text"
                  name="keywords"
                  id="keywords"
                  placeholder="Search Keywords..."
                  className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <BiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 hover:text-secondary transition ease-in-out duration-300 cursor-pointer" />
              </div>
              <h1 className="text-xl font-saira font-light text-gray-800">
                Text Widget
              </h1>
              <p className="text-gray-500 text-sm font-light mt-2">
                Sed posuere consectetur est at lobortis. Donec id elit non mi
                porta gravida at eget metus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam id dolor id nibh ultricies
                vehicula ut id elit.
              </p>
            </div>
            <div>
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex justify-start items-center gap-4 mt-8 cursor-pointer border-b border-gray-200 pb-4 hover:bg-gray-50 transition-colors duration-300"
                >
                  <img
                    src={post.image}
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div className="">
                    <h2 className="font-saira text-md font-bold text-[#6F798B] hover:text-primary transition-colors duration-300">
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
            <div className="mt-12">
              <h3 className="text-lg font-saira text-primary mb-4">
                Recent Comments
              </h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3 text-sm border-b border-gray-200 pb-2">
                  <LiaAngleRightSolid />
                  <div className="flex items-center gap-1">
                    <p>John Doe on</p>
                    <a
                      href=""
                      className="text-primary hover:text-secondary transition-colors duration-300"
                    >
                      Magna pars studiorum
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-sm border-b border-gray-200 pb-2">
                  <LiaAngleRightSolid />
                  <div className="flex items-center gap-1">
                    <p>Jane Smith on</p>
                    <a
                      href=""
                      className="text-primary hover:text-secondary transition-colors duration-300"
                    >
                      Idque Caesaris facere
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-sm border-b border-gray-200 pb-2">
                  <LiaAngleRightSolid />
                  <div className="flex items-center gap-1">
                    <p>Alice Johnson on</p>
                    <a
                      href=""
                      className="text-primary hover:text-secondary transition-colors duration-300"
                    >
                      Fabio vel iudice vincam
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-sm border-b border-gray-200 pb-2">
                  <LiaAngleRightSolid />
                  <div className="flex items-center gap-1">
                    <p>Bob Brown on</p>
                    <a
                      href=""
                      className="text-primary hover:text-secondary transition-colors duration-300"
                    >
                      Magna pars studiorum
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-sm border-b border-gray-200 pb-2">
                  <LiaAngleRightSolid />
                  <div className="flex items-center gap-1">
                    <p>Emily Davis on</p>
                    <a
                      href=""
                      className="text-primary hover:text-secondary transition-colors duration-300"
                    >
                      Idque Caesaris facere
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <h3 className="text-lg font-saira text-primary mb-4">
                Tag Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Construction
                </Link>
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Architecture
                </Link>
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Design
                </Link>
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Engineering
                </Link>
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Project Management
                </Link>
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Sustainability
                </Link>
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Innovation
                </Link>
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Safety
                </Link>
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Technology
                </Link>
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Materials
                </Link>
                <Link
                  to=""
                  className="text-sm border border-gray-300 px-3 py-2 bg-primary text-white hover:bg-secondary transition-colors duration-300"
                >
                  Urban Planning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
