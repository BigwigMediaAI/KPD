import About from "../components/About";
import ContactSidebar from "../components/ContactSidebar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import Testimonials from "../components/Testimonials";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Footer />
      <ContactSidebar />
    </div>
  );
}

export default Landing;
