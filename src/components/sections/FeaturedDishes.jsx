import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DishCard from '../ui/DishCard';
import { dishes, categories } from '../../data/dishes';

const FeaturedDishes = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  
  const filteredDishes = activeCategory === "Semua" 
    ? dishes 
    : dishes.filter(d => d.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-orange-400 text-sm uppercase tracking-wider">Our Menu</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Menu Favorit Kami</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Pilihan terbaik dari berbagai kategori, siap memanjakan lidah Anda
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm transition ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish, idx) => (
            <DishCard key={dish.id} dish={dish} index={idx} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <button className="border border-orange-500 text-orange-400 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
            Lihat Semua Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;