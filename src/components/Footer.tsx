import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import logo from "../assets/logo.png";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setMessage("");
    console.log(BASE_URL);

    try {
      const res = await fetch(`${BASE_URL}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");

      setMessage("🎉 Subscription successful!");
      setEmail("");
    } catch (error) {
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#0f0f0f] text-white px-6 pt-10 pb-16 md:px-16 lg:px-24">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* Left Column: Company Info */}
        <div className="flex-1">
          <img
            src={logo}
            alt="KHALSA PROPERTY DEALERS Properties"
            className="h-24 mb-4"
            draggable="false"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            KHALSA PROPERTY DEALERS Properties is an accomplished best property
            dealer in Delhi operational in Rohini and Pitampura, New Delhi since
            1982. KHALSA PROPERTY DEALERS Properties has an experience of 35+
            years in Real Estate. KHALSA PROPERTY DEALERS Properties has 8+
            offices situated in Delhi and NCR and delivered millions of projects
            on time.
          </p>
        </div>

        {/* Center Columns */}
        <div className="flex flex-row gap-10 flex-wrap flex-1">
          {/* Quick Links */}
          <div className="min-w-[150px]">
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="text-gray-300 space-y-1">
              <li>
                <a href="/about">› About Us</a>
              </li>
              <li>
                <a href="/projects">› Projects</a>
              </li>
              <li>
                <a href="/blogs">› Blog</a>
              </li>
              <li>
                <a href="/contact">› Contact</a>
              </li>
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

        {/* Right Column */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
          <div className="text-sm space-y-3 text-gray-300">
            <p className="flex items-start">
              <MapPin className="w-5 h-5 mt-1 mr-2" />
              Plot 2, Sanjay Nagar, Gulabi Bagh, Delhi - 110007
            </p>
            <p className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:info@khalsaproperty.in">info@khalsaproperty.in</a>
            </p>
            <p className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +91 8368607860
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/khalsaproperties"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-white hover:text-[#4267B2]" />
            </a>

            <a
              href="https://www.instagram.com/kpd_developers?igsh=MXV5bzI4bjZwczR2bA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-white hover:text-[#C13584]" />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6 text-white hover:text-[#FF0000]" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-white hover:text-[#0077B5]" />
            </a>
          </div>

          {/* Subscription */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Unlock the vault of deals</p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="px-3 py-2 text-black text-sm flex-grow mb-2 sm:mb-0 sm:mr-2"
              />
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="bg-[var(--primary-color)] text-white font-semibold px-4 py-2 disabled:opacity-50"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            {message && <p className="mt-2 text-sm">{message}</p>}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
