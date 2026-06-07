import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const highlights = [
    "Fresh & high-quality ingredients",
    "Experienced chefs from 5-star hotels",
    "Hygienic & standardized preparation",
    "On-time delivery, every time"
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600" 
              alt="Chef cooking"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl">
              <div className="text-3xl font-bold">7+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-orange-400 text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              We Serve <span className="text-orange-400">Authentic Flavors</span>
            </h2>
            <p className="text-gray-400 mb-6">
              FoodFolio has been serving since 2018 with a mission to bring the finest culinary experience to every event.
              We blend traditional recipes with modern techniques.
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-500" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
            
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-semibold">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;