import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ContactPage from "./pages/Contact";
import About from "./pages/Aboutus";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import ContactSidebar from "./components/ContactSidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
      </Routes>

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
    </Router>
  );
}

export default App;
