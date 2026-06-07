import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPhone, faEnvelope, faMapMarkerAlt, faUtensils } from '@fortawesome/free-solid-svg-icons'; // tambah faUtensils
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-orange-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faUtensils} className="text-orange-500" size="lg" />
              <span className="font-bold text-xl">FoodFolio</span>
            </div>
            <p className="text-gray-400 text-sm">Premium catering with authentic flavors you'll love.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-orange-400">Home</a></li>
              <li><a href="#menu" className="hover:text-orange-400">Menu</a></li>
              <li><a href="#about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#services" className="hover:text-orange-400">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><FontAwesomeIcon icon={faPhone} className="mr-2" /> +62 812-3456-7890</li>
              <li><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> hello@foodfolio.com</li>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Jakarta, Indonesia</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-xl">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-xl">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-xl">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-orange-500/20 mt-8 pt-8 text-center text-gray-500 text-sm">
          FoodFolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;