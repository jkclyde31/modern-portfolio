'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import MenuDropDown from './MenuDropDown';
import NavLogo from './NavLogo';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';
import { navLinks } from './navLinks';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Close mobile menu if the viewport size is changed
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const backdropVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <nav className='sticky top-0 bg-blue-700 border-b border-blue-500 z-50'>
        {/* ROW */}
        <div className='mx-auto max-w-[1720px] px-2 sm:px-6 lg:px-8'>
          {/* FLEX BOX */}
          <div className='relative flex h-20 items-center'>
            <MenuDropDown 
              setIsMobileMenuOpen={toggleMobileMenu} 
              isMobileMenuOpen={isMobileMenuOpen}
            />
            {/* Logo and Nav Menu */}
            <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-between'>
              <NavLogo/>
              <NavigationMenu navLinks={navLinks}/>
              <SocialLinks/>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              onClick={() => setIsMobileMenuOpen(false)}
              className='fixed inset-0 bg-black/10 backdrop-blur-xs z-[60] md:hidden'
            />

            {/* Mobile Menu */}
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className='md:hidden fixed inset-x-0 top-[80px] bg-blue-700 z-[70] shadow-lg'
            >
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${
                      pathname === `${link.href}` ? 'bg-black' : ''
                    } text-white block rounded-md px-3 py-2 text-base font-medium`}
                  >
                    {link.name}
                  </Link>
                ))}
                <SocialLinks mobile={true}/>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;