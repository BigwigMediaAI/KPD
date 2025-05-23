import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Mail, MessageSquareText, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Footer from "../components/Footer";
import Navbar from "../components/nav";

export default function ContactPage() {
  return (
    <div className=" bg-white min-h-screen text-black">
      <Navbar />

      <section className="w-full md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8  mt-20 md:mt-32">
        <div className="pt-4">
          <h2 className="text-2xl mb-2 font-semibold">Dubai</h2>
          <hr />
          <h2 className="text-xl mb-2 font-semibold">Head Office</h2>
          <p className="mb-1 text-lg">Dubai</p>
          <p className="mb-4">
            1703, Damac XL tower, Marasi Drive, Business bay, Dubai, UAE.
          </p>
          <h2 className="text-2xl mb-2 font-semibold">India</h2>
          <hr />
          <h2 className="text-xl mb-2 font-semibold">Branch Offices</h2>
          <p className="mb-1 text-lg font-semibold">Delhi</p>
          <p className="mb-4">
            Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
          </p>
          <p className="mb-1 text-lg font-semibold">Delhi</p>
          <p className="mb-4">
            S-1, 3rd Floor, Janta Market, Rajouri Garden New Delhi - 110027
          </p>
          <h2 className="text-2xl mb-2 font-semibold">Australia</h2>
          <hr />
          <p className="mb-1 text-lg font-semibold">Melbourne</p>
          <p className="mb-4">80 Lsabella way, Tarneit 3029 Melbourne</p>

          <h2 className="text-2xl mb-2 font-semibold">New Zealand</h2>
          <hr />
          <p className="mb-1 text-lg font-semibold">Auckland</p>
          <p className="mb-4">
            9/136 Marua Road, Mount Wellington, Auckland 1051
          </p>

          <p className="text-gray-400 mt-8">
            Our business operating hours are as follows:
          </p>
          <p className="mt-2">Monday to Saturday: 10:30am - 7:30pm</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 font-sans">Get in Touch</h2>
          <p className="mb-4 text-gray-400 font-sans">
            Please contact us via phone or email below or visit us at our Head
            Office in Business Bay during operating hours.
          </p>

          <div className="flex flex-col gap-4">
            {/* Phone Button */}
            <div className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans">
              <Phone className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">
                +971 505029471 (Dubai)
              </span>
            </div>
            <div className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans">
              <Phone className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">
                +91 83685 73451 (India)
              </span>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+918368573451"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <FaWhatsapp className="w-6 h-6 text-green-600" />
              <span className="text-sm text-gray-700">+91 83685 73451</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:vipul@bigwigmedia.in"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <Mail className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">
                vipul@bigwigmedia.in
              </span>
            </a>

            {/* SMS Button */}
            <a
              href="sms:+918368573451"
              className="bg-white rounded-md p-4 flex items-center gap-4 shadow-sm hover:bg-gray-200 transition font-sans"
            >
              <MessageSquareText className="w-6 h-6 text-gray-700" />
              <span className="text-sm text-gray-700">+91 83685 73451</span>
            </a>
          </div>
        </div>
      </section>

      <h2 className="px-5 w-full md:w-[90%] mx-auto text-lg text-[var(--secondary-color)]">
        Have questions, need marketing advice, or interested in growing your
        brand online?
      </h2>
      <p className="px-5 w-full md:w-[90%] mx-auto text-md text-gray-400">
        Reach out to us via email, phone, or simply fill out the form below.
        Your inquiry will be directed to the right Bigwig Digital marketing
        expert, and we’ll get back to you within 24 hours.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start w-full md:w-[90%] mx-auto px-6 py-8 gap-10 mb-7  ">
        {/* Form Section */}
        <div className="w-full md:w-1/2 max-w-lg bg-gray-100 rounded-lg p-8 shadow-lg text-left  border border-[#D7B865]">
          <form className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              className="bg-white border border-gray-600 placeholder-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="bg-white border border-gray-600  placeholder-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />

            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="IN"
              international
              className="bg-white border border-gray-600 px-4 py-3 text-[16px] rounded-lg w-full text-black placeholder-gray-400"
              onChange={function (_value?: Value): void {
                throw new Error("Function not implemented.");
              }}
            />

            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              className="bg-white border border-gray-600 placeholder-gray-400 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-[#D7B865] hover:opacity-80 text-white py-3 px-6 rounded-lg w-full transition font-semibold"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2 h-[450px] rounded-lg overflow-hidden shadow-lg border border-[#D7B865]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.668560792657!2d55.264871674024235!3d25.18066683237258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69004a524faf%3A0x13d5b1575adb574a!2sBusiness%20Bay!5e0!3m2!1sen!2sin!4v1744201890505!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
