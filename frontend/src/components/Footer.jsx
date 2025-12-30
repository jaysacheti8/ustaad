import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-50 via-lavender-50 to-purple-100 border-t border-purple-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_cd5eff41-7829-4d4c-8734-8d4a891ff04c/artifacts/j42v9jy3_eventustaadlogo.svg" 
              alt="Event Ustaad" 
              className="h-12 w-auto"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Creating extraordinary experiences since 2018. Specializing in luxury weddings and corporate events across India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/eventustaad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/eventustaad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/eventustaad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services/weddings" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Wedding Services
                </Link>
              </li>
              <li>
                <Link to="/services/corporate" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 text-sm">Destination Weddings</li>
              <li className="text-gray-600 text-sm">Corporate Events</li>
              <li className="text-gray-600 text-sm">Décor Management</li>
              <li className="text-gray-600 text-sm">Hospitality & Logistics</li>
              <li className="text-gray-600 text-sm">Artist Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:eventustaad@gmail.com" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>eventustaad@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@eventustaad.com" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>contact@eventustaad.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919833310150" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>+91 98333 10150</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919920581507" 
                  className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>+91 99205 81507</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Event Ustaad. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
