import React from "react";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";

import service1 from "./assets/service-1.jpg";
import service2 from "./assets/service-2.jpg";
import service3 from "./assets/service-3.jpg";
import PostImage1 from "./assets/company-1.jpg";
import PostImage2 from "./assets/company-2.jpg";
import PostImage3 from "./assets/company-3.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-start items-start gap-20">
        {/* About Us */}
        <div>
          <h3 className="text-lg text-white mb-4 font-saira">About Us</h3>
          <p className="text-gray-500 max-w-2xs text-sm">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac,
            vestibulum at eros.
          </p>
          <div className="flex mt-4">
            <a href="" className="text-gray-500 hover:text-white">
              <IoLogoLinkedin />
            </a>
            <a href="" className="text-gray-500 hover:text-white ml-4">
              <IoLogoFacebook />
            </a>
            <a href="" className="text-gray-500 hover:text-white ml-4">
              <IoLogoTiktok />
            </a>
            <a href="" className="text-gray-500 hover:text-white ml-4">
              <IoLogoYoutube />
            </a>
          </div>
        </div>

        {/* Company's News */}
        <div>
          <h3 className="text-lg font-saira text-white mb-4">Company’s News</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <LiaAngleRightSolid />
              <a href="" className="hover:text-white">
                Sem Porta Mollis Parturient
              </a>
            </li>
            <li className="flex items-center gap-3">
              <LiaAngleRightSolid />
              <a href="" className="hover:text-white">
                Nullam Lorem Mattis Purus
              </a>
            </li>
            <li className="flex items-center gap-3">
              <LiaAngleRightSolid />
              <a href="" className="hover:text-white">
                Nibh Sem Sit Ullamcorper
              </a>
            </li>
            <li className="flex items-center gap-3">
              <LiaAngleRightSolid />
              <a href="" className="hover:text-white">
                Donec luctus imperdiet
              </a>
            </li>
          </ul>
        </div>

        {/* Recent Projects */}
        <div>
          <h3 className="text-lg font-saira text-white mb-4">
            Recent Projects
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 max-w-xl">
            <a href="" className="hover:opacity-80 transition-opacity duration-300 h-25 w-30">
              <img src={service1} alt="Project 1" className="w-full h-full object-cover" />
            </a>
            <a href="" className="hover:opacity-80 transition-opacity duration-300 h-25 w-30">
              <img src={service2} alt="Project 2" className="w-full h-full object-cover" />
            </a>
            <a href="" className="hover:opacity-80 transition-opacity duration-300 h-25 w-30">
              <img src={service3} alt="Project 3" className="w-full h-full object-cover" />
            </a>
            <a href="" className="hover:opacity-80 transition-opacity duration-300 h-25 w-30">
              <img src={PostImage1} alt="Project 4" className="w-full h-full object-cover" />
            </a>
            <a href="" className="hover:opacity-80 transition-opacity duration-300 h-25 w-30">
              <img src={PostImage2} alt="Project 5" className="w-full h-full object-cover" />
            </a>
            <a href="" className="hover:opacity-80 transition-opacity duration-300 h-25 w-30">
              <img src={PostImage3} alt="Project 6" className="w-full h-full object-cover" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
