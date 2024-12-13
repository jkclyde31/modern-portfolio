'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


import MenuDropDown from './MenuDropDown';
import NavLogo from './NavLogo';
import NavigationMenu from './NavigationMenu';
import SocialLinks from './SocialLinks';
import { navLinks } from './navLinks';



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // NOTE: close mobile menu if the viewport size is changed
    window.addEventListener('resize', () => {
      setIsMobileMenuOpen(false);
    });
  }, []);

  return (
    <nav className='sticky top-0 bg-blue-700 border-b border-blue-500'>
      {/* ROW */}
      <div className='mx-auto max-w-[1720px] px-2 sm:px-6 lg:px-8  '>
        {/* FLEX BOX */}
        <div className='relative flex h-20 items-center  '>
         <MenuDropDown setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen}/>
          {/* Logo and Nav Menu */}
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-between'>
           <NavLogo/>
           <NavigationMenu navLinks={navLinks}/>
           <SocialLinks/>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
          {
            navLinks.map((link)=>(
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
            ))
          }
            <SocialLinks mobile={true}/>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
