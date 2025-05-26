import React from "react";
import aboutImg from "../assets/logo-inner.png"; // Replace with actual image
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import ContactSidebar from "../components/ContactSidebar";

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[80px] md:pt-[128px] px-4 md:px-20 text-[#04365b] font-[Raleway] bg-white">
        {/* About Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 py-12">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p>
              With our area ability and accomplished professionals, we are able
              to accommodate our clients Construction and Architectural
              Services. We take affairs for accomplishment residential
              apartments, Kothis, Villas & barrio as per the claim of customer.
            </p>
            <p>
              Also we are in Real Estate Consultancy Services like Industrial
              Property, Warehouse Services, Commercial Property Services and
              Property Renting Services in Delhi/NCR. Our aggregation of
              adolescent, acute and professionals is competent and self-assured
              to appease our clients optimally.
            </p>
            <p>
              These Services have won accolades all over the area due to their
              acquiescence with industry specific standards. In addition, we
              also ensure that the endered Services accommodate optimum
              achievement to our clients as per their diversified demands.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src={aboutImg}
              alt="About Us"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-[#f5f5f5] rounded-xl p-6 md:p-10 my-12">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Develop premium quality real estate providing high class
              construction services.
            </li>
            <li>
              To offer consistent and reliable construction and real estate
              services.
            </li>
            <li>Be recognized as a leader in our own field.</li>
          </ul>
        </section>

        {/* Our Founders */}
        <section className="py-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Founders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "https://img.freepik.com/free-photo/man-portrait-posing-loft-modern-space_158595-5365.jpg?semt=ais_hybrid&w=740",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrjS8FQcaIi2_sS18KNaKc2xcINMnDm8yWIuZnG9A07MKddJZu_LLtvkuKbZyfCcx86A&usqp=CAU",
              "https://media.istockphoto.com/id/1450788989/photo/portrait-of-happy-african-businesswoman-holding-digital-tablet-in-the-office.jpg?s=612x612&w=0&k=20&c=aalIPdiN9iTx45CkGrGMlGn-LVyICKzNvgoARsyAArg=",
            ].map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
              >
                <img
                  src={img}
                  alt={`Founder ${idx + 1}`}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-lg">Founder {idx + 1}</h4>
                  <p className="text-sm text-gray-600">Co-Founder & Director</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
      <ContactSidebar />
    </div>
  );
};

export default About;
