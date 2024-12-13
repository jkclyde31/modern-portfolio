import Link from "next/link"
import { usePathname } from 'next/navigation';


const NavigationMenu = ({navLinks}) => {
    const pathname = usePathname();
  return (
         <div className='hidden md:ml-6 md:block '>
                  <div className='flex space-x-2'>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`${
                          pathname === link.href ? 'bg-black' : ''
                        } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
  )
}

export default NavigationMenu