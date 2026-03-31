import { useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './sections/Hero';
import ProductShowcase from './sections/ProductShowcase';
import FlavorCards from './sections/FlavorCards';
import ColorPalette from './sections/ColorPalette';
import Finale from './sections/Finale';
import Footer from './sections/Footer';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import MenuPage from './pages/MenuPage';
import LocationsPage from './pages/LocationsPage';
import ContactPage from './pages/ContactPage';

gsap.registerPlugin(ScrollTrigger);

// Home page component
const HomePage = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    // Velocity-based skew effect
    let currentSkew = 0;
    let targetSkew = 0;
    
    const updateSkew = () => {
      currentSkew += (targetSkew - currentSkew) * 0.1;
      main.style.transform = `skewY(${currentSkew}deg)`;
      requestAnimationFrame(updateSkew);
    };
    
    const handleScroll = () => {
      const scrollSpeed = Math.abs(window.scrollY - ((window as any).lastScrollY || 0));
      targetSkew = Math.min(scrollSpeed * 0.02, 3);
      (window as any).lastScrollY = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateSkew();
    
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const resetSkew = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        targetSkew = 0;
      }, 100);
    };
    window.addEventListener('scroll', resetSkew, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', resetSkew);
    };
  }, []);

  return (
    <main ref={mainRef} className="relative transition-transform duration-100 ease-out will-change-transform">
      <Hero />
      <ProductShowcase />
      <FlavorCards />
      <ColorPalette />
      <Finale />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="relative bg-black min-h-screen overflow-x-hidden">
        {/* Grain overlay */}
        <div className="grain-overlay" />
        
        {/* Custom cursor */}
        <CustomCursor />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
