import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "PULKIT",
    message:
      "I recently worked with KPD to buy my new home, and their team made the entire process smooth and hassle-free.",
  },
  {
    name: "KIRTI BEDI",
    message:
      "KPD helped me sell my property quickly and at the best price. Their expertise is unmatched.",
  },
  {
    name: "SAURAV SHARMA",
    message:
      "I am extremely satisfied with KPD’s services. They guided me professionally through every step of buying my dream home.",
  },
  {
    name: "ANITA DESAI",
    message:
      "Buying my first property with KPD was a stress-free experience. Highly recommended!",
  },
  {
    name: "RAHUL VERMA",
    message:
      "The team at KPD is professional and trustworthy. They made selling my property easy and efficient.",
  },
  {
    name: "PRIYA KAPOOR",
    message:
      "KPD’s attention to detail and commitment to clients is outstanding. I couldn’t ask for a better experience.",
  },
  {
    name: "RAJ SINGH",
    message:
      "Thanks to KPD, my property sale was fast and smooth. Truly reliable real estate experts.",
  },
  {
    name: "NEHA GUPTA",
    message:
      "KPD helped me find the perfect home within my budget. Excellent service and guidance throughout!",
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
