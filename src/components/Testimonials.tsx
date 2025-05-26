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
    slidesToScroll: 1, // Scroll one by one
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#D7B865] mb-6 text-center">
        WHAT PEOPLE SAYS
      </h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#c59b57] rounded-md p-6 text-white flex flex-col justify-between min-h-[250px] h-full">
                <div>
                  <span className="text-4xl font-serif">“</span>
                  <p className="mt-2 text-sm leading-relaxed">
                    {testimonial.message}
                  </p>
                </div>
                <p className="mt-6 text-sm font-semibold">
                  by {testimonial.name}
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
