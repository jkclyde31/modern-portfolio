import Navbar from "./Navbar/Navbar"
import Button from "./Button"
import ExpertiseButtons from "./ExpertiseButtons"

const Header = ({children}) => {
  return (
    <div className=" bg-hero-pattern bg-cover bg-no-repeat">
        <Navbar/>
        <div id="Banner" className="font-Onest text-[#263C48] flex flex-col items-center ">
          <h1 className=" text-[64px] max-w-[1320px]  text-center mx-auto pt-[100px] md:pt-[275px]">
             Hey, I’m Joedy. I'm a<span className="inline md:block">Designer & Web Developer</span> 
          </h1>
          <p className="mx-auto text-center max-w-[680px] pt-[20px] pb-[20px]">
          Joedy is a versatile designer & developer based in the Indonesia, dedicated to crafting innovative and visually appealing digital experiences.
          </p>
          <Button text="Lets Work Together" width="195px" />
          <ExpertiseButtons  className="pt-[20px] pb-[235px]"/>

        </div>
    </div>
  )
}

export default Header