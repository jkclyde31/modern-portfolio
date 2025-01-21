import Navbar from "./Navbar/Navbar"
import Button from "./Button"
import ExpertiseButtons from "./ExpertiseButtons"
import DynamicCard from "./Card"

const Header = ({children}) => {
  return (
    <div className=" bg-hero-pattern bg-cover bg-no-repeat">
        <Navbar/>
        <div id="Banner" className="font-Onest text-primary flex flex-col items-center ">
          <h1 className=" text-[64px] max-w-[1320px]  text-center mx-auto pt-[100px] md:pt-[225px] leading-[1.2]">
             Hey, I’m Clyde. I'm a<span className="inline md:block"> Web Developer</span> 
          </h1>
          <p className="mx-auto text-center max-w-[680px] pt-[20px] pb-[20px]">
          I focus on creating modern, responsive websites and web applications that deliver seamless user experiences and meet your unique needs.
          </p>
          <Button text="Lets Work Together" width="195px" />
          <ExpertiseButtons  className="mt-[20px] mb-[50px]"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-[1080px] w-[100%] p-[20px] gap-[20px] mb-[100px]">
             <DynamicCard text="Web Development"/>
             <DynamicCard text="UI Design"/>
             <DynamicCard text="Graphic Design"/>
             <DynamicCard text="Web Application"/>
          </div>
        </div>
    </div>
  )
}

export default Header