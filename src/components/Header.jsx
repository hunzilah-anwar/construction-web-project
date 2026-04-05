import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";

// Image Paths
import logo from "../assets/logo.png";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Project", path: "/project" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className="font-saira relative overflow-hidden sm:px-16 px-10 py-14 flex flex-wrap lg:justify-between justify-center items-center gap-14">
        <div className="lg:block hidden absolute -right-28 top-0 -z-10 bg-black opacity-[.04] w-[70%] h-full -skew-x-45"></div>
        <Link to="/" className="">
          <img src={logo} className="w-70" alt="Buildify Logo" />
        </Link>
        <div className="flex sm:flex-row flex-col flex-wrap md:justify-start justify-center items-center gap-6">
          <div className="flex gap-4 items-start">
            <TiLocationArrow size={30} />
            <div className="mt-1">
              <h2 className="text-sm font-bold">12 Main Street Pt.</h2>
              <h2 className="text-sm">London England</h2>
            </div>
          </div>
          <div className="flex gap-4 items-start sm:border-l border-gray-300 pl-4">
            <FaRegClock size={20} />
            <div className="">
              <h2 className="text-sm font-bold">Mon-Fri</h2>
              <h2 className="text-sm">09:00 - 17:00</h2>
            </div>
          </div>
          <div className="flex gap-4 items-start sm:border-l border-gray-300 pl-4">
            <FaPhoneAlt size={20} />
            <div className="">
              <h2 className="text-sm font-bold">+(123) 456-7890</h2>
              <h2 className="text-sm">contact@buildify.com</h2>
            </div>
          </div>
        </div>
        <div className="lg:hidden block">
          <RiMenu3Fill
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            size={40}
            className="cursor-pointer z-50 absolute right-4 top-8 bg-gray-500/30 p-2 transform -translate-y-1/2 border border-gray-400/40 rounded-md text-black hover:text-white transition-all"
          />
        </div>
      </div>
      <header className="px-28 bg-primary text-white p-4 hidden lg:block relative">
        <nav className="flex justify-between items-center">
          <ul className="flex gap-8 text-light font-saira font-bold">
            {navLinks.map((link) => (
              <Link
                className="relative group text-light hover:text-white transition ease-in-out duration-200"
                to={link.path}
              >
                {link.name}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-secondary transition-all ease-in-out duration-300"></div>
              </Link>
            ))}
          </ul>
          <div className="border-l border-light pl-4">
            <IoIosSearch
              className="cursor-pointer text-light hover:text-white transition-all"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              size={30}
            />
          </div>
        </nav>
      </header>
      {isSearchOpen && (
        <div
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="absolute inset-0 z-50 w-full h-full bg-black/55 flex items-center justify-center"
        >
          <form className="relative" onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 bg-white w-80 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary text-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <IoIosSearch
              onClick={handleSearchSubmit}
              size={40}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-secondary cursor-pointer hover:text-primary transition-all p-2"
            />
          </form>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-primary text-white flex flex-col items-center gap-4 py-14 lg:hidden">
          <Link to="/" className=" pb-10">
            <img src={logo} className="w-70" alt="Buildify Logo" />
          </Link>
          {navLinks.map((link) => (
            <Link
              className="text-light hover:text-white transition ease-in-out duration-200"
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </Link>
          ))}
          <div className="">
            <IoIosSearch
              className="cursor-pointer text-light hover:text-white transition-all"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              size={30}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
