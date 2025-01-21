import Image from 'next/image';
import logo from '@/public/images/logo.png';
import Link from 'next/link';
// import { SiteInfoProvider } from './SiteInfoProvider';
import { siteInfo } from '@/config/siteInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-200 py-2 md:py-10 mt-5 md:mt-24'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-center px-4'>
        {/* <div className='mb-4 md:mb-0'>
          <Image src={logo} alt='Logo' className='h-8 w-auto' />
        </div> */}
        {/* <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0'>
          <ul className='flex'>
            <li>
              <Link href='/terms'>Terms of Service</Link>
            </li>
          </ul>
        </div> */}
        <div>
          <p className='text-[18px] text-gray-500 mt-2 md:mt-0'>
            {/* &copy; {currentYear} {siteInfo.company_name}. All rights reserved. */}
            All rights reserved.

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
