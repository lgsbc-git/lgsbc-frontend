import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";


// Styles
import "./styles/App.css";
import ScrollToTop from "./components/ScrollToTop";
import ServicePageDynamic from "./pages/ServicePageDynamic";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UnderDevelopment from "./pages/UnderDevelopment";
import Unsubscribe from "./pages/Unsubscribe";
// import StoryPage from "./pages/stories/StoryPage";
// import Blogs from "./pages/Blogs";
// import Terms from "./pages/Terms";


function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePageDynamic />} />
          <Route path="/products" element={<ProductsPage />} />

          <Route path="/products/:slug" element={<ProductDetailPage />} />

          <Route path="/blank" element={<UnderDevelopment />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="*" element={<UnderDevelopment />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
