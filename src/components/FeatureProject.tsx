import React from "react";

interface Project {
  img: string;
  title: string;
  tagline: string;
  description: string;
}

const projects: Project[] = [
  {
    img: "https://cdn.in.emaar.com/wp-content/uploads/2025/01/Featured-Image-2-320x415.jpg",
    title: "ELITE OASIS",
    tagline: "AN OASIS OF LUXURY",
    description: "3 & 4 BHK residences",
  },
  {
    img: "https://cdn.in.emaar.com/wp-content/uploads/2024/10/Featured-Image-320-415-Revised.jpg",
    title: "URBAN ASCENT, GURUGRAM",
    tagline: "RISE ABOVE THE ORDINARY",
    description: "3 & 4 BHK residences",
  },
  {
    img: "https://cdn.in.emaar.com/wp-content/uploads/2024/10/Entry-Gate-View-320x415-1.jpg",
    title: "AMARIS, GURUGRAM",
    tagline: "A MEANINGFUL LIFE STARTS HERE.",
    description: "2, 3 & 4 BHK Residences",
  },
  {
    img: "https://cdn.in.emaar.com/wp-content/uploads/2024/03/Featured-Image-320-415-Portrait-03.jpg",
    title: "CASA VENERO, ALIBAG",
    tagline: "HAVEN OF PURE LEISURE",
    description: "4 and 5 BHK Luxury Villas",
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="px-4 md:px-12 lg:px-20 py-10">
      {/* Section Title */}
      <div className="mb-8">
        <p className="uppercase tracking-widest text-gray-500 text-sm">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-light border-b border-gray-200 pb-2 inline-block">
          FEATURED PROJECTS
        </h2>
      </div>

      {/* Projects Grid / Slider */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
            <p className="uppercase tracking-widest text-xs text-gray-500 mt-1">
              {project.tagline}
            </p>
            <p className="text-sm text-gray-700 mt-1">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
