import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-orange-400 text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Culinary Gallery</h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
            >
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <FontAwesomeIcon icon={faImage} className="text-white text-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;