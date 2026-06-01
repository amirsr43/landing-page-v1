import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600" 
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-orange-500/20 rounded-full mb-6"
            >
              <span className="text-orange-400 text-sm">✨ Premium Catering Service</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Lezat & Bergizi
              </span>
              <br />
              Untuk Setiap Momen
            </h1>
            
            <p className="text-xl text-gray-300 mt-6 max-w-lg">
              Nikmati hidangan berkualitas dengan cita rasa autentik, dibuat oleh chef profesional untuk acara spesial Anda.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
              >
                Lihat Menu <FontAwesomeIcon icon={faChevronRight} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-orange-500/50 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 backdrop-blur-sm hover:bg-orange-500/20"
              >
                <FontAwesomeIcon icon={faPlay} /> Watch Video
              </motion.button>
            </div>
            
            <div className="flex gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-orange-400">500+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">1000+</div>
                <div className="text-gray-400 text-sm">Events Catered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400">50+</div>
                <div className="text-gray-400 text-sm">Menu Variants</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600" 
                alt="Food"
                className="rounded-2xl shadow-2xl border border-orange-500/30"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-600 rounded-full blur-3xl opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;