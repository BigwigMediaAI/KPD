import React from "react";

const About: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-12 px-6 md:px-20"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Text Column */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D7B865] mb-6">
            ABOUT KHALSA PROPERTY DEALERS
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-black">
            KHALSA PROPERTY DEALERS Properties is an accomplished best property
            dealer in Delhi operational in
            <strong> Rohini and Pitampura, New Delhi</strong> since 1982. With
            35+ years of experience and 8+ offices in Delhi and NCR, we’ve
            delivered millions of projects on time. We believe home is not a
            place—it’s a feeling. Our mission is to connect buyers, sellers, and
            agents through a next-gen platform, empowering them with the right
            tools at every step of the process. Whether you're buying your dream
            home or selling, we’ll help you make the most informed decision.
          </p>
          <a
            href="#"
            className="inline-block bg-[#D7B865] text-white font-semibold py-2 px-6 rounded shadow-md"
          >
            Read More
          </a>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2">
          {[
            { label: "PROPERTY SOLD", value: "100,000+" },
            { label: "KHALSA PROPERTY DEALERS TEAM", value: "50+" },
            { label: "HAPPY CUSTOMERS", value: "150,000+" },
            { label: "PROJECT HANDLED", value: "25+" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 text-[#D7B865] border border-[#D7B865] p-6 rounded shadow-md text-center"
            >
              <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
