import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Faq from "./pages/Faq.jsx";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import MatrixBackground from "./components/MatrixBackground.jsx";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-matrix font-mono relative">
      {/* Matrix Background Animation */}
      <MatrixBackground />

      {/* Layout */}
      <Navbar />

      <main className="mt-16 px-4 md:px-10 relative z-10">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
