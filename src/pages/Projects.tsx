import { useState } from "react";
import ContactSidebar from "../components/ContactSidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import PopupForm from "../components/PopUpForm";
import img1 from "/IMG-20211025-WA0004 (1).jpg";
import img2 from "/IMG-20211025-WA0005.jpg";
import img3 from "/IMG-20211025-WA0006 (1).jpg";
import img4 from "/J-3-10_Elevation_View_2nd_Option (1).jpg";

const projects = [
  {
    img: img1,
    title: "ELITE OASIS",
    tagline: "AN OASIS OF LUXURY",
    description: "3 & 4 BHK residences",
  },
  {
    img: img2,
    title: "URBAN ASCENT, GURUGRAM",
    tagline: "RISE ABOVE THE ORDINARY",
    description: "3 & 4 BHK residences",
  },
  {
    img: img3,
    title: "AMARIS, GURUGRAM",
    tagline: "A MEANINGFUL LIFE STARTS HERE.",
    description: "2, 3 & 4 BHK Residences",
  },
  {
    img: img4,
    title: "CASA VENERO, ALIBAG",
    tagline: "HAVEN OF PURE LEISURE",
    description: "4 and 5 BHK Luxury Villas",
  },
];

function Projects() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div>
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#D7B865] py-12 mt-28 text-center text-white">
        <h1 className="text-3xl font-bold">Our Projects</h1>
        <p className="mt-2 text-lg">Explore our exclusive developments</p>
      </section>

      {/* Projects Grid */}
      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="uppercase tracking-widest text-xs text-gray-500 mt-1">
                  {project.tagline}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-[#D7B865] text-white text-center py-10 px-4 mt-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Dream Project?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Let’s bring your vision to life with our expert team. Get in touch
          today and take the first step toward your future.
        </p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-white text-[#D7B865] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </button>
      </div>
      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
      <ContactSidebar />
      <Footer />
    </div>
  );
}

export default Projects;
