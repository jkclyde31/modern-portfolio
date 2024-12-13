import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { siteInfo } from '@/config/siteInfo';

const SocialLinks = ({mobile=false}) => {
  return (
    <div className={`${mobile === true ? 'flex' : 'hidden'} md:flex items-center justify-between text-white w-[100%] max-w-[170px]`}>
        <a href={siteInfo.social_links["facebook"]} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
             <Facebook size={24} />
        </a>
        <a href={siteInfo.social_links["instagram"]} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
             <Instagram size={24} />
        </a>
        <a href={siteInfo.social_links["twitter"]} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
             <Twitter size={24} />
        </a>
        <a href={siteInfo.social_links["linkedin"]} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
             <Linkedin size={24} />
        </a>
        <a href={siteInfo.social_links["youtube"]} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Youtube size={24} />
        </a>
  </div>
  )
}

export default SocialLinks