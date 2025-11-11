"use client";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import About from "../../components/About";
import FeaturedProjects from "../../components/FeaturedProjects";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import LatestLaunches from "../../components/LatestLaunches";
import Nav from "../../components/Nav";
import Testimonials from "../../components/Testimonial";
import ContactSidebar from "../../components/ContactSidebar";
import PopupForm from "../../components/PopUpForm";
import { useEffect, useState } from "react";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);
  return (
    <div>
      {/* <!-- Open Graph Meta Tags --> */}
      <meta
        property="og:title"
        content="Buy & Sell Real Estate in Delhi NCR & Dubai"
      />
      <meta
        property="og:description"
        content="Looking to buy or sell property in Delhi NCR or Dubai? Khalsa Property Dealers helps you discover verified homes and commercial spaces with complete transparency, expert support, and trusted real estate experience."
      />
      <meta
        property="og:image"
        content="https://www.khalsapropertydealers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.87c58a64.png&w=256&q=75&dpl=dpl_GkcBtjPsnWVhNpEhUKxk34bPodaq"
      />
      <meta
        property="og:url"
        content="https://www.khalsapropertydealers.com/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Khalsa Property Dealers" />
      <meta property="og:locale" content="en_US" />

      <title>Buy & Sell Real Estate in Delhi NCR & Dubai</title>
      <meta
        name="description"
        content="Looking to buy or sell property in Delhi NCR or Dubai? Khalsa Property Dealers helps you discover verified homes and commercial spaces with complete transparency, expert support, and trusted real estate experience."
      />
      <link rel="canonical" href="https://www.khalsapropertydealers.com/" />
      <Nav />
      <Hero />

      <About />
      <LatestLaunches />
      <Testimonials />
      <FeaturedProjects />
      <Footer />
      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-[9999]">
        <div className="w-1/2 bg-[var(--primary-color)] text-white text-center py-3">
          <a
            href="tel:+971521110795"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaPhoneAlt size={18} />
            Call Us
          </a>
        </div>
        <div className="w-1/2 bg-white text-green-500 text-center py-3 border-l border-white">
          <a
            href="https://wa.me/+971521110795"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="hidden md:block">
        <ContactSidebar />
      </div>
    </div>
  );
}
