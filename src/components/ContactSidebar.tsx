import React from "react";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import "../index.css";

const ContactSidebar: React.FC = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex flex-col items-center rounded-l-xl overflow-hidden shadow-lg">
      <a
        href="mailto:info@example.com"
        className="w-12 h-24 bg-[#c49a58] flex items-center justify-center text-white cursor-pointer"
      >
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-xs rotate-180 writing-vertical">
            Contact Us
          </span>
          <FaEnvelope />
        </div>
      </a>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-14 bg-green-500 flex items-center justify-center text-white cursor-pointer"
      >
        <FaWhatsapp />
      </a>

      <a
        href="tel:+1234567890"
        className="w-12 h-14 bg-black flex items-center justify-center text-white cursor-pointer"
      >
        <FaPhone />
      </a>
    </div>
  );
};

export default ContactSidebar;
