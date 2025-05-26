import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-inner.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#c9a368] text-white text-sm px-4 py-1 flex justify-end items-center space-x-4">
        <div className="flex items-center space-x-1">
          <span className="text-xs">📞</span>
          <span>+91-9212717362</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-xs">✉️</span>
          <span>info@kpd.co</span>
        </div>
      </div>

      {/* Main Header */}
      <div className=" flex items-center justify-between px-4 py-3 md:px-10">
        {/* Logo */}
        <div className="flex-1 text-center md:text-left">
          <a href="/">
            <img
              src={logo}
              alt="Saraswati Properties"
              className="mx-auto md:mx-0 h-16 object-contain"
              draggable="false"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-[#04365b] font-medium">
          <a href="/">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="#">PROJECTS</a>

          <a href="#">BLOGS</a>
          <a href="/contact">CONTACT US</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              onClick={() => setMenuOpen(false)}
              className="w-6 h-6 text-[#04365b]"
            />
          ) : (
            <Menu
              onClick={() => setMenuOpen(true)}
              className="w-6 h-6 text-[#04365b]"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-[#04365b] font-medium">
          <a href="/" className="block">
            HOME
          </a>
          <a href="/about" className="block">
            ABOUT US
          </a>
          <a href="#" className="block">
            PROJECTS ▼
          </a>
          <a href="#" className="block">
            BLOGS
          </a>
          <a href="/contact" className="block">
            CONTACT US
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
