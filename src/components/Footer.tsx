import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import logo from "../assets/logo-inner.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white px-6 py-10 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* Left Column: Company Info */}
        <div className="flex-1">
          <img src={logo} alt="Saraswati Properties" className="h-24 mb-4" />
          <p className="text-sm leading-relaxed text-gray-300">
            Saraswati Properties is an accomplished best property dealer in
            Delhi operational in Rohini and Pitampura, New Delhi since 1982.
            Saraswati Properties has an experience of 35+ years in Real Estate.
            Saraswati Properties has 8+ offices situated in Delhi and NCR and
            delivered millions of projects on time.
          </p>
        </div>

        {/* Center Columns: Quick Links + Property Type */}
        <div className="flex flex-row gap-10 flex-wrap flex-1">
          {/* Quick Links */}
          <div className="min-w-[150px]">
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="text-gray-300 space-y-1">
              <li>› Home</li>
              <li>› About Us</li>
              <li>› Upcoming Projects</li>
              <li>› Commercial</li>
              <li>› Residential</li>
              <li>› Blog</li>
              <li>› Contact</li>
            </ul>
          </div>

          {/* Property Type */}
          <div className="min-w-[150px]">
            <h3 className="font-semibold text-lg mb-3">Property Type</h3>
            <ul className="text-gray-300 space-y-1">
              <li>› Commercial</li>
              <li>› Residential</li>
              <li>› Builder Floor</li>
              <li>› Plots</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Info */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
          <div className="text-sm space-y-3 text-gray-300">
            <p className="flex items-start">
              <MapPin className="w-5 h-5 mt-1 mr-2" />
              PLOT NO.68-69, POCKET A-1, SECTOR-36, ROHINI, New Delhi–110085
            </p>
            <p className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              info@saraswatiproperties.co
            </p>
            <p className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              08037 89 89 89
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Facebook className="w-6 h-6 text-white hover:text-[#4267B2]" />
            <Instagram className="w-6 h-6 text-white hover:text-[#C13584]" />
            <Youtube className="w-6 h-6 text-white hover:text-[#FF0000]" />
            <Linkedin className="w-6 h-6 text-white hover:text-[#0077B5]" />
          </div>

          {/* Subscription */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Unlock the vault of deals</p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="px-3 py-2 text-black text-sm flex-grow mb-2 sm:mb-0 sm:mr-2"
              />
              <button className="bg-[#c9a368] text-black font-semibold px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
