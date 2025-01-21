import Navbar from "./Navbar/Navbar"
import Button from "./Button"
import ExpertiseButtons from "./ExpertiseButtons"
import DynamicCard from "./Card"

const Header = ({children}) => {
  return (
    <div className=" bg-hero-pattern bg-cover bg-no-repeat min-h-screen ">
        <Navbar/>
        <div id="Banner"  className="font-Onest text-primary flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-[45px] leading-tight	 md:text-[64px] max-w-[1320px]  text-center mx-auto  md:leading-[1.2]">
             Hey, I’m Clyde. I'm a<span className="inline md:block"> Web Developer</span> 
          </h1>
          <p className="mx-auto text-center max-w-[680px] pt-[20px] pb-[20px]">
          I focus on creating modern, responsive websites and web applications that deliver seamless user experiences and meet your unique needs.
          </p>
          <Button text="Lets Work Together" width="195px" className='mb-[10px]'/>
          <ExpertiseButtons  className="pt-[20px]"/>
        </div>
    </div>
  )
}

export default Header