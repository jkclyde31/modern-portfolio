import Link from "next/link"
import { usePathname } from 'next/navigation';


const NavigationMenu = ({navLinks}) => {
    const pathname = usePathname();
  return (
         <div className='hidden md:ml-6 md:flex items-center font-Onest '>
                  <div className='flex  b'>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`${
                          pathname === link.href ? '' : ''
                        } text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
  )
}

export default NavigationMenu