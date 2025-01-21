'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import bgBanner from '@/public/banner-bg.jpg';

import MenuDropDown from './MenuDropDown';
import NavLogo from './NavLogo';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';
import { navLinks } from './navLinks';
import Button from '../Button';

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
      <nav className='fixed top-0 left-0 right-0 z-50  '>
        {/* ROW */}
        <div className='mx-auto max-w-[600px]   lg:px-8 pt-0 md:pt-[20px]'>
          {/* FLEX BOX */}
          <div className='relative flex  items-center py-[20px]  md:py-3 px-15 bg-white md:rounded-[100px]'>
            <MenuDropDown 
              setIsMobileMenuOpen={toggleMobileMenu} 
              isMobileMenuOpen={isMobileMenuOpen}
            />
            {/* Logo and Nav Menu */}
            <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-center '>
              {/* <NavLogo/> */}
              <NavigationMenu navLinks={navLinks}/>
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
              className='fixed inset-0  backdrop-blur-xs z-[60] md:hidden'
            />

            {/* Mobile Menu */}
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className='md:hidden fixed inset-x-0 top-[52px] bg-white z-[70] shadow-lg px-2'
            >
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${
                      pathname === `${link.href}` ? 'bg-black' : ''
                    } ${
                      pathname === `${link.href}` ? 'text-white' : 'text-[#5A6D75]'
                    }   block rounded-md px-3 py-2 text-[20px] font-medium`}
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