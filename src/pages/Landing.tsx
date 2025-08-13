import About from "../components/About";
// import ContactSidebar from "../components/ContactSidebar";
import FeaturedProjects from "../components/FeatureProject";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import LatestLaunches from "../components/Schowcase";
import Testimonials from "../components/Testimonials";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <LatestLaunches />
      <Testimonials />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}

export default Landing;
