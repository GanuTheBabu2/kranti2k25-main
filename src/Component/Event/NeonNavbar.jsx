import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Calendar, Info, Menu, X } from 'lucide-react';

const NeonNavbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'home', icon: Home, href: '/' },
    { name: 'about', icon: Info, href: '/about' },
    { name: 'events', icon: Calendar, href: '/event' },
    { name: 'team', icon: Users, href: '/Dev' },
   
  ];

  // Animation variants
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.05, when: "afterChildren" } 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, when: "beforeChildren" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-cyan-900/30"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo with neon effect */}
        <motion.div 
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-xl font-bold uppercase tracking-wider"
          whileHover={{ scale: 1.05 }}
          style={{
            textShadow: '0 0 8px rgba(255, 0, 255, 0.7)'
          }}
        >
          TimeParadox
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <motion.div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveLink(link.name)}
                onMouseLeave={() => setActiveLink('')}
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={link.href}
                  className="flex items-center space-x-2 px-3 py-2"
                >
                  <IconComponent 
                    className={`transition-all duration-300 ${
                      activeLink === link.name 
                        ? 'text-pink-400 drop-shadow-[0_0_8px_rgba(255,0,255,0.7)]' 
                        : 'text-cyan-300/70 hover:text-cyan-300'
                    }`} 
                    size={20} 
                  />
                  <span className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                    activeLink === link.name 
                      ? 'text-pink-400 drop-shadow-[0_0_8px_rgba(255,0,255,0.7)]' 
                      : 'text-cyan-300/70 hover:text-cyan-300'
                  }`}>
                    {link.name}
                  </span>
                </a>

                {/* Active indicator */}
                {activeLink === link.name && (
                  <motion.div
                    layoutId="desktop-active"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-2 rounded-lg focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="text-cyan-300 w-6 h-6" />
          ) : (
            <Menu className="text-cyan-300 w-6 h-6" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-cyan-900/30 shadow-xl"
            >
              <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="relative py-3 px-4 rounded-lg"
                      onClick={() => setMenuOpen(false)}
                      variants={itemVariants}
                      whileHover={{ backgroundColor: 'rgba(236, 72, 153, 0.1)' }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent 
                          className={`transition-all duration-300 ${
                            activeLink === link.name 
                              ? 'text-pink-400' 
                              : 'text-cyan-300'
                          }`} 
                          size={20} 
                        />
                        <span className={`text-sm font-medium uppercase tracking-wider ${
                          activeLink === link.name 
                            ? 'text-pink-400' 
                            : 'text-cyan-300'
                        }`}>
                          {link.name}
                        </span>
                      </div>
                      {activeLink === link.name && (
                        <motion.div
                          layoutId="mobile-active"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500 rounded-r-full"
                          initial={{ height: 0 }}
                          animate={{ height: '100%' }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NeonNavbar;