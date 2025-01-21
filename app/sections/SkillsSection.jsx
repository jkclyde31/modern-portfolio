import { Globe, Palette, Layout, Flame, Computer, Film } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      title: 'Web Design',
      icon: Globe,
      description: 'with more than 4 years of experience in this field, more than many people like our services'
    },
    {
      title: 'Graphic Designer',
      icon: Palette,
      description: 'with more than 4 years of experience in this field, more than many people like our services'
    },
    {
      title: 'UI Design',
      icon: Layout,
      description: 'with more than 4 years of experience in this field, more than many people like our services'
    },
    {
      title: 'Logo Designer',
      icon: Flame,
      description: 'with more than 4 years of experience in this field, more than many people like our services'
    },
    {
      title: 'Web Developer',
      icon: Computer,
      description: 'with more than 4 years of experience in this field, more than many people like our services'
    },
    {
      title: 'Motion Designer',
      icon: Film,
      description: 'with more than 4 years of experience in this field, more than many people like our services'
    }
  ];

  return (
    <section className="py-10 md:py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <p className='mb-[25px] p-[5px] rounded-[50px] bg-white max-w-[135px] mx-auto'>Experience</p>
        <h2 className="text-[35px] md:text-[56px] text-[#263C48] font-medium  max-w-[905px] mx-auto leading-tight	">My Skills that Shine, Expertise You Can Trust</h2>
        <p className="text-gray-600 max-w-[461px] mx-auto">
          Explore my expertise and see how I can leverage my skills to drive your projects forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-5">
              <skill.icon className="w-10 h-10 text-[#263C48]" />
            </div>
            <h3 className="text-[24px] text-[#263C48] font-semibold mb-3">{skill.title}</h3>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;