import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "PULKIT",
    message:
      "I recently relocated to a new city and enlisted the services Saraswati Properties to help me find a new home.",
  },
  {
    name: "KIRTI BEDI",
    message:
      "I had the pleasure of working with Saraswati Properties for the sale of my property, and I couldn’t be happier with the results.",
  },
  {
    name: "SAURAV SHARMA",
    message:
      "I am extremely grateful to Saraswati Properties for their exceptional service and expertise in helping me find my dream home.",
  },
  {
    name: "ANITA DESAI",
    message:
      "Saraswati Properties made buying my first home a smooth and stress-free experience.",
  },
  {
    name: "RAHUL VERMA",
    message:
      "Professional and courteous team. Highly recommended for real estate needs.",
  },
  {
    name: "PRIYA KAPOOR",
    message:
      "Their attention to detail and commitment to clients is outstanding.",
  },
  {
    name: "RAJ SINGH",
    message:
      "My selling experience was fast and efficient thanks to Saraswati Properties.",
  },
  {
    name: "NEHA GUPTA",
    message:
      "They helped me find the perfect rental home within my budget. Thank you!",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div style={{ marginTop: "0px" }}>
        <ul
          style={{ margin: "0px", display: "flex", justifyContent: "center" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "var(--primary-color)",
        }}
      />
    ),
  };

  return (
    <section className="py-12 mx-auto">
      <div className=" w-11/12 md:w-5/6 mx-auto px-4">
        <p className="uppercase tracking-widest text-gray-500 text-md">
          Tesitmonial
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-6 font-amatic border-l-4 border-[var(--primary-color)] pl-3">
          WHAT PEOPLE SAY
        </h2>
      </div>
      <div className=" w-11/12 md:w-5/6 mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between min-h-[250px] h-full transition-transform ">
                <div>
                  <span className="text-5xl font-serif text-[var(--primary-color)] leading-none">
                    “
                  </span>
                  <p className="mt-3 text-gray-700 text-xl leading-relaxed font-annie ">
                    {testimonial.message}
                  </p>
                </div>
                <p className="mt-6 text-sm font-semibold text-[var(--primary-color)]">
                  — {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
