import SkillsSection from "./sections/SkillsSection";
import CreativeProjects from "./sections/ProjectsSection";
import ContactForm from "./sections/ContactSection";

export const metadata = {
  title: "My Portfolio",
}

export default function Home() {
  return (
    <>
       <SkillsSection/>
       <CreativeProjects/>
       <ContactForm/>

    </>
   
  );
}
