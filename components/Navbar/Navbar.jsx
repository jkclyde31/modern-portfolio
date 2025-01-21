'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import MenuDropDown from './MenuDropDown';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';
import { navLinks } from './navLinks';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 150; // Offset for header

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };

    // Smooth scroll handler
    const handleNavClick = (e) => {
      const isNavLink = e.target.getAttribute('href')?.startsWith('#');
      
      if (isNavLink) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const navHeight = 100; // Extra offset for the navbar
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          setActiveSection(targetId);
          setIsMobileMenuOpen(false);
        }
      }
    };

    // Add click event listener to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

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
      <nav className='fixed top-0 left-0 right-0 z-50'>
        <div className='mx-auto max-w-[600px] lg:px-8 pt-0 md:pt-[20px]'>
          <div className='relative flex items-center py-[20px] md:py-3 px-15 bg-white md:rounded-[100px] shadow-md md:shadow-lg'>
            <MenuDropDown 
              setIsMobileMenuOpen={toggleMobileMenu} 
              isMobileMenuOpen={isMobileMenuOpen}
            />
            <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-center'>
              <NavigationMenu 
                navLinks={navLinks} 
                activeSection={activeSection}
              />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              onClick={() => setIsMobileMenuOpen(false)}
              className='fixed inset-0 backdrop-blur-xs z-[60] md:hidden'
            />
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className='md:hidden fixed inset-x-0 top-[40px] bg-white z-[70] shadow-lg px-2'
            >
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`${
                      activeSection === link.href ? 'bg-primary' : ''
                    } ${
                      activeSection === link.href ? 'text-white' : 'text-[#5A6D75]'
                    } block rounded-md px-3 py-2 text-[20px] font-medium`}
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