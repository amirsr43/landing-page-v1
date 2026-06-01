import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FeaturedDishes from './components/sections/FeaturedDishes';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import Gallery from './components/sections/Gallery';
import Newsletter from './components/sections/Newsletter';

function App() {
  return (
    <div className="bg-black text-white font-sans antialiased">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;