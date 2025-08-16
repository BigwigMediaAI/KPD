import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname; // ✅ detect current page

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "PROJECTS", href: "/projects" },
    { label: "BLOGS", href: "/blogs" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#c9a368] text-white">
        <div className="text-sm py-1 flex justify-end items-center space-x-4 w-11/12 md:w-5/6 mx-auto">
          <div className="flex items-center space-x-1">
            <span className="text-xs">📞</span>
            <span>+91-9212717362</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-xs">✉️</span>
            <span>info@kpd.co</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between py-3 w-11/12 md:w-5/6 mx-auto">
        {/* Logo */}
        <div className="flex-1 text-center md:text-left">
          <a href="/">
            <img
              src={logo}
              alt="Khalsa Property Dealers"
              className="mx-auto md:mx-0 h-16 object-contain"
              draggable="false"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-[#04365b] font-medium text-xl font-annie">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                currentPath === link.href
                  ? "text-[#c9a368] border-b-2 border-[#c9a368] pb-1" // ✅ active style
                  : "hover:text-[#c9a368]"
              }`}
            >
              {link.label}
            </a>
          ))}
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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block ${
                currentPath === link.href
                  ? "text-[#c9a368] font-bold" // ✅ highlight active
                  : "hover:text-[#c9a368]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
