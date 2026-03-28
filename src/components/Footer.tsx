import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1-em5jqYibujv_D-PWZzj_HxzG9y3XLXj" 
              alt="National Electro Logo" 
              className="h-14 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-sm leading-relaxed">
            Sydney's most trusted electrical service provider. Licensed, insured, and ready to power your home or business 24/7.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6">Our Services</h4>
          <ul className="space-y-4 text-sm">
            <li>Residential Electrical</li>
            <li>Commercial Electrical</li>
            <li>Emergency Services</li>
            <li>Switchboard Upgrades</li>
            <li>Safety Inspections</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <span>(02) 8005 4322</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <span>service@nationalelectro.com.au</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0" />
              <span>Sydney, NSW, Australia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} National Electro. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
