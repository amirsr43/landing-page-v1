import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

const DishCard = ({ dish, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-gradient-to-b from-gray-900 to-black border border-orange-500/20 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all group"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute top-3 right-3 bg-orange-500 px-2 py-1 rounded-full text-xs font-semibold">
          {dish.category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{dish.name}</h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <FontAwesomeIcon icon={faStar} size="xs" />
            <span className="text-sm text-gray-300">4.8</span>
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-3">{dish.description}</p>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-orange-400">{dish.price}</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500/20 border border-orange-500 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-orange-500 hover:text-white transition"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Order
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;