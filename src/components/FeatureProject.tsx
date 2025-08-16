import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/IMG-20211025-WA0004 (1).jpg";
import img2 from "/IMG-20211025-WA0005.jpg";
import img3 from "/IMG-20211025-WA0006 (1).jpg";
import img4 from "/J-3-10_Elevation_View_2nd_Option (1).jpg";

interface Project {
  img: string;
  title: string;
  tagline: string;
  description: string;
}

const projects: Project[] = [
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

const FeaturedProjects: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // hide default arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-10">
      <div className="w-11/12 md:w-5/6 mx-auto">
        {/* Title + Arrows */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <p className="uppercase tracking-widest text-gray-500 text-md">
              Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-6 font-amatic border-l-4 border-[var(--primary-color)] pl-3">
              FEATURED PROJECTS
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="text-[var(--primary-color)] text-3xl md:text-5xl"
            >
              ←
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="text-[var(--primary-color)] text-3xl md:text-5xl"
            >
              →
            </button>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, idx) => (
            <div key={idx} className="px-3">
              <div className="aspect-[4/5] overflow-hidden rounded-md">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-fill hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="uppercase tracking-widest text-xs text-gray-500 mt-1">
                {project.tagline}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                {project.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProjects;
