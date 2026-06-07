import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-orange-400 text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What Our Clients Say</h2>
        </motion.div>
        
        <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-orange-500/20 rounded-2xl p-8 md:p-12">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-orange-500/20 text-6xl absolute top-6 left-6" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-orange-500"
              />
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <h4 className="font-semibold text-xl">{testimonials[currentIndex].name}</h4>
              <p className="text-orange-400 text-sm">{testimonials[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition flex items-center justify-center">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 transition flex items-center justify-center">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;