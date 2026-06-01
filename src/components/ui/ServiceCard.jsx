import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center text-orange-400 mx-auto mb-4">
        <FontAwesomeIcon icon={service.icon} size="2x" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-400">{service.desc}</p>
    </motion.div>
  );
};

export default ServiceCard;