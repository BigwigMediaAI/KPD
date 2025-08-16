import img1 from "/C-829a_Elevation_View (1).jpg";
import React, { useState } from "react";
import PopupForm from "./PopUpForm";

interface Launch {
  img: string;
  title: string;
  subtitle: string;
  large?: boolean; // for the tall image
}

const launches: Launch[] = [
  {
    img: img1,
    title: "ELITE OASIS",
    subtitle: "ELITE OASIS",
    large: true,
  },
  {
    img: "https://cdn.in.emaar.com/wp-content/uploads/2020/11/HI-4-706x385.jpg",
    title: "MOHALI HILLS RESIDENTIAL PLOTS",
    subtitle: "MOHALI HILLS, MOHALI",
  },
  {
    img: "https://cdn.in.emaar.com/wp-content/uploads/2024/03/Featured-Image-706-385-1.jpg",
    title: "AMARIS",
    subtitle: "AMARIS, GURUGRAM",
  },
  {
    img: "https://cdn.in.emaar.com/wp-content/uploads/2025/01/Featured-Image-1.jpg",
    title: "URBAN ASCENT",
    subtitle: "URBAN ASCENT, GURUGRAM",
  },
  {
    img: "https://cdn.in.emaar.com/wp-content/uploads/2024/10/Featured-Image-2.jpg",
    title: "CASA VENERO",
    subtitle: "CASA VENERO, ALIBAG",
  },
];

const LatestLaunches: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section className=" py-12">
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Text Section */}
        <div>
          <p className="uppercase tracking-widest text-gray-500 text-sm mb-2">
            Properties
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-6 font-amatic border-l-4 border-[var(--primary-color)] pl-3">
            LATEST LAUNCHES
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700  text-justify">
            Each of our properties reflects unique design aesthetics, offering
            an aspirational lifestyle within a thriving community. All projects
            are exclusively developed and sold by Khalsa Property’s own team,
            ensuring complete ownership and commitment from start to finish.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="px-6 py-2 bg-[var(--primary-color)] text-white rounded hover:bg-[#bfa14f] transition-colors"
          >
            Contact Us
          </button>
        </div>

        {/* Right Image Layout */}
        <div
          className="lg:col-span-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ gridAutoRows: "250px" }} // consistent row height
        >
          {launches.map((item, idx) => (
            <div
              key={idx}
              className={`${
                item.large ? "row-span-2" : "row-span-1"
              } flex flex-col`}
            >
              {/* Image container with fixed height for normal cards */}
              <div
                className={`overflow-hidden ${
                  item.large ? "h-full" : "h-[250px]"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text below image */}
              <div className="mt-3">
                <p className="text-sm font-medium tracking-wide uppercase">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">{item.subtitle}</p>
                <div className="w-12 border-t border-gray-300 mt-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
    </section>
  );
};

export default LatestLaunches;
