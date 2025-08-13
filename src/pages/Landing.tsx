import { useEffect, useState } from "react";
import About from "../components/About";
// import ContactSidebar from "../components/ContactSidebar";
import FeaturedProjects from "../components/FeatureProject";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import PopupForm from "../components/PopUpForm";
import LatestLaunches from "../components/Schowcase";
import Testimonials from "../components/Testimonials";

function Landing() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <LatestLaunches />
      <Testimonials />
      <FeaturedProjects />
      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
      <Footer />
    </div>
  );
}

export default Landing;
