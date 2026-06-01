import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faUtensils} className="text-orange-500" size="lg" />
            <span className="font-bold text-xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              FoodFolio
            </span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {["Home", "Menu", "About", "Services", "Testimonials"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-orange-400 transition">
                {item}
              </a>
            ))}
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition"
          >
            Order Now
          </motion.button>
          
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="md:hidden bg-black/95 border-b border-orange-500/20 p-4"
        >
          <div className="flex flex-col space-y-3">
            <a href="#home" className="text-gray-300 hover:text-orange-400">Home</a>
            <a href="#menu" className="text-gray-300 hover:text-orange-400">Menu</a>
            <a href="#about" className="text-gray-300 hover:text-orange-400">About</a>
            <a href="#services" className="text-gray-300 hover:text-orange-400">Services</a>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full">Order Now</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;