import About from "../components/About";
import ContactSidebar from "../components/ContactSidebar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Footer />
      <ContactSidebar />
    </div>
  );
}

export default Landing;
