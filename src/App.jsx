import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';

import Home from './pages/Home';
import Collection from './pages/Collection';
import NewArrival from './pages/NewArrival';
import Lookbook from './pages/Lookbook';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Story from './pages/Story';
import Contact from './pages/Contact';
import SizeGuide from './pages/SizeGuide';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import Campaigns from './pages/Campaigns';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

// Scrolls to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/new-arrival" element={<NewArrival />} />
              <Route path="/lookbook" element={<Lookbook />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/story" element={<Story />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/size-guide" element={<SizeGuide />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;
