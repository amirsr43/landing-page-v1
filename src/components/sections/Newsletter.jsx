import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGift } from '@fortawesome/free-solid-svg-icons';

const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          className="bg-gradient-to-r from-orange-900/20 to-transparent border border-orange-500/30 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faGift} className="text-orange-400 text-2xl" />
          </div>
          
          <h2 className="text-3xl font-bold">Get 20% Off Your First Order</h2>
          <p className="text-gray-400 mt-2">Subscribe to our newsletter and unlock exclusive deals!</p>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-black/50 border border-gray-700 rounded-full px-4 py-3 flex-1 focus:outline-none focus:border-orange-500" 
            />
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition flex items-center justify-center gap-2">
              Subscribe <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
          
          <p className="text-gray-500 text-xs mt-4">No spam, unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;