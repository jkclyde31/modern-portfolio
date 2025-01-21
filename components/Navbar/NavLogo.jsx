import Link from "next/link"
import logo from '@/public/images/logo-white.png';
import Image from "next/image";
import { siteInfo } from "@/config/siteInfo";

const NavLogo = () => {
  return (
    <Link className='flex flex-shrink-0 items-center' href='/'>
    {/* <Image className='h-10 w-auto' src={logo} alt='PropertyPulse' /> */}
    <span className='block text-primary text-2xl font-bold ml-2'>
      {siteInfo.company_name}
    </span>
  </Link>
  )
}

export default NavLogo