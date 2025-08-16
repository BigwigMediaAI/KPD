import {
  Phone,
  Mail,
  Home,
  ClipboardList,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import banner from "../assets/7bc4232d-4d39-4869-97ff-543208aa7894.png";

function Sell() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-[80px] md:pt-[128px] h-[60vh] flex flex-col justify-center items-center text-center px-6">
        {/* Background Image */}
        <img
          src={banner} // replace with your local image path
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        {/* Overlay content */}
        <div className="relative text-gray-800">
          <h1 className="text-3xl md:text-5xl font-bold">
            Sell Your Property With Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-700 mx-auto">
            Get the best value for your property with our seamless selling
            process, expert guidance, and trusted network of buyers.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-16 bg-white w-11/12 md:w-5/6 text-[var(--primary-color)] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Selling Process
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <ClipboardList size={40} className="text-[#c9a368] mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Step 1: Share Your Details
            </h3>
            <p className="text-gray-600">
              Fill out our form or call us directly to provide basic information
              about your property.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <Home size={40} className="text-[#c9a368] mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Step 2: Property Evaluation
            </h3>
            <p className="text-gray-600">
              Our experts will evaluate your property and suggest the best
              market price.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <DollarSign size={40} className="text-[#c9a368] mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Step 3: Close the Deal
            </h3>
            <p className="text-gray-600">
              We connect you with genuine buyers and ensure a hassle-free
              closing process.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#f9f9f9]  text-[var(--primary-color)] ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Sell With Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 w-11/12 md:w-5/6 mx-auto">
          <div className="flex items-center gap-4 p-6 rounded-xl bg-white shadow">
            <CheckCircle className="text-[#c9a368]" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Trusted Network</h3>
              <p className="text-gray-600">
                Access to genuine buyers & investors.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-xl bg-white shadow">
            <CheckCircle className="text-[#c9a368]" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Best Market Price</h3>
              <p className="text-gray-600">
                Get accurate valuation and maximum returns.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 rounded-xl bg-white shadow">
            <CheckCircle className="text-[#c9a368]" size={32} />
            <div>
              <h3 className="text-lg font-semibold">Hassle-Free Process</h3>
              <p className="text-gray-600">
                We handle the legal and documentation work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white w-11/12 md:w-5/6 mx-auto text-[var(--primary-color)] ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In Touch With Us
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Want to sell your property quickly and easily? Fill out the form
              or contact us directly.
            </p>
            <div className="flex items-center gap-3">
              <Phone className="text-[#c9a368]" />
              <span className="text-lg">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-[#c9a368]" />
              <span className="text-lg">sales@granthproperties.com</span>
            </div>
          </div>

          {/* Form */}
          <form className="bg-[#f9f9f9] p-8 rounded-2xl shadow-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a368] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a368] outline-none"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a368] outline-none"
            />
            <textarea
              placeholder="Tell us about your property"
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c9a368] outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[var(--primary-color)] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Submit Property
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Sell;
