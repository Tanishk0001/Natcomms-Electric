import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const shouldShowTransparent = isHomePage && !scrolled;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        shouldShowTransparent ? 'bg-transparent' : 'bg-white shadow-md py-3'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="https://lh3.googleusercontent.com/d/1-em5jqYibujv_D-PWZzj_HxzG9y3XLXj" 
            alt="National Electro Logo" 
            className={cn(
              "h-24 w-auto object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_15px_rgba(0,102,204,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(0,102,204,0.5)]",
              shouldShowTransparent && "brightness-0 invert"
            )}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-bold tracking-wide uppercase transition-colors hover:text-secondary",
                location.pathname === link.href 
                  ? "text-secondary" 
                  : shouldShowTransparent ? "text-white" : "text-slate-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:0280054322"
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-black text-sm hover:bg-secondary hover:text-slate-900 transition-all shadow-xl hover:shadow-primary/30"
          >
            <Phone className="w-4 h-4" />
            (02) 8005 4322
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            shouldShowTransparent ? "text-white" : "text-primary"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-4 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    location.pathname === link.href ? "text-secondary" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:0280054322"
                className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold mt-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
