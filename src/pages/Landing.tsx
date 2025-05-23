import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/nav";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default Landing;
