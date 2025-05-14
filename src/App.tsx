import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Services from "./views/Services";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <div className="select-none cursor-default">
      <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}
