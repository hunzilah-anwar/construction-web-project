import React, { useState } from "react";
import { 
  FaCheckCircle, 
  FaRocket, 
  FaEye, 
  FaHistory, 
  FaHardHat, 
  FaUsers, 
  FaAward, 
  FaArrowRight 
} from "react-icons/fa";
import Personnel1 from "../assets/personnel-4.jpg";
import Personnel2 from "../assets/personnel-5.jpg";
import Personnel3 from "../assets/personnel-6.jpg";
import Personnel4 from "../assets/personnel-7.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  // Data for the Interactive Tabs
  const tabData = {
    mission: {
      title: "Our Mission",
      desc: "To deliver high-quality, sustainable construction solutions that exceed client expectations through innovation and technical excellence.",
      icon: <FaRocket className="text-amber-500" />,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
    },
    vision: {
      title: "Our Vision",
      desc: "To be the global leader in innovative construction, recognized for transforming complex challenges into iconic landmarks.",
      icon: <FaEye className="text-amber-500" />,
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80"
    },
    history: {
      title: "Our History",
      desc: "Founded in 2005, we started with a small team and a big dream. Today, we stand as a multi-award winning construction firm.",
      icon: <FaHistory className="text-amber-500" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
    }
  };

  const team = [
    { name: "James Harrison", role: "Senior Architect", img: Personnel1 },
    { name: "Emily Davis", role: "Project Manager", img: Personnel2 },
    { name: "Michael Lee", role: "Lead Engineer", img: Personnel3 },
    { name: "Sarah Wilson", role: "Design Director", img: Personnel4 },
  ]

  return (
    <div className="bg-white font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-28 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://demo.goodlayers.com/megaproject/wp-content/uploads/2013/12/5890431924_e41f158e2d_b-750x330.jpg" 
            alt="background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Since 2005</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-4 mb-6 tracking-tight">
            Engineering <span className="text-amber-500">Excellence</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
            We combine traditional craftsmanship with modern technology to build 
            infrastructure that stands the test of time.
          </p>
        </div>
      </section>

      {/* --- FUNCTIONAL TABS SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text & Tabs */}
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-tight text-slate-800">
              A Legacy Built on <br />
              <span className="text-amber-600 italic font-serif leading-normal">Trust & Innovation</span>
            </h2>

            {/* Tab Buttons */}
            <div className="flex space-x-2 bg-slate-100 p-1 rounded-xl mb-8 w-fit">
              {Object.keys(tabData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                    activeTab === key 
                    ? "bg-white text-amber-600 shadow-md scale-105" 
                    : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tabData[key].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-40 transition-opacity duration-500">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{tabData[activeTab].icon}</span>
                <h3 className="text-2xl font-bold">{tabData[activeTab].title}</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {tabData[activeTab].desc}
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {["Certified Materials", "Safety First", "On-time Delivery", "Eco-Friendly"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <FaCheckCircle className="text-amber-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Interactive Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500"></div>
            <img
              src={tabData[activeTab].image}
              alt="construction"
              className="relative rounded-2xl shadow-2xl w-full h-112.5 object-cover transition-all duration-700"
            />
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-8 rounded-xl hidden md:block">
              <p className="text-4xl font-bold text-amber-500">18+</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION (Grid with Borders) --- */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200 text-center">
          {[
            { icon: <FaHardHat />, label: "Projects Done", value: "850+" },
            { icon: <FaUsers />, label: "Expert Workers", value: "120+" },
            { icon: <FaAward />, label: "Global Awards", value: "35+" },
            { icon: <FaCheckCircle />, label: "Client Satisfied", value: "100%" },
          ].map((stat, idx) => (
            <div key={idx} className="py-16 px-6 group hover:bg-white transition-colors duration-300">
              <div className="text-3xl text-slate-400 group-hover:text-amber-500 flex justify-center mb-4 transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-slate-800 mb-1">{stat.value}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODERN TEAM SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold font-saira text-slate-900 mb-4 tracking-tight">Our Leadership</h2>
            <p className="text-slate-500 text-lg">Meet the visionaries behind MegaProject's success and reputation.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-slate-200 mb-4 h-80">
                <img
                  src={member.img}
                  alt="Team"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <div className="flex gap-3 text-white text-lg">
                    {/* Social icons would go here */}
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-xl group-hover:text-amber-600 transition-colors">{member.name}</h3>
              <p className="text-slate-500 text-sm font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MODERN CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto rounded-4xl bg-slate-900 p-10 md:p-20 text-center relative overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Want to build something <span className="text-amber-500 italic">extraordinary?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 cursor-pointer hover:bg-amber-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-amber-900/20 active:scale-95">
                Start Your Project
              </button>
              <button className="bg-white/10 cursor-pointer hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-xl font-bold transition-all backdrop-blur-sm active:scale-95">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;