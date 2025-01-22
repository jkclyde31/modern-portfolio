'use client'

import { Globe, Palette, Layout, Flame, Search, Film } from 'lucide-react';
import ScrollAnimation from '@/ScrollAnimation';

const SkillsSection = () => {
  const skills = [
    {
      title: 'Frontend Developenment',
      icon: Palette,
      description: 'Knowledgeable in crafting responsive and dynamic user interfaces using React, Next.js, Wordpress,  CSS/Tailwind CSS.'
    },
    {
      title: 'Backend Developement',
      icon: Globe,
      description: 'Knowledgeable in API development and integration, including RESTful APIs for seamless data communication.'
    },
    {
      title: 'DevOps and Tools',
      icon: Layout,
      description: 'Knowledgeable in Deployment using Vercel, Netlify, or Heroku.'
    },
    {
      title: 'Automation and Workflow',
      icon: Flame,
      description: 'Knowledgeable in GoHighLevel for workflow and CRM automation'
    },
    {
      title: 'Performance Optimization',
      icon: Film,
      description: 'Knowledgeable in Lazy loading, optimizing images, and improving Core Web Vitals scores.'
    },
    {
      title: 'SEO Optimization',
      icon: Search,
      description: 'Knowledgeable on On-page optimization, technical SEO audits, and implementing strategies to improve search engine rankings.'
    }
  ];

  const baseDelay = 4; 
  const delayIncrement = 2; 

  return (
    <section id="skills" className="py-10 md:py-16 px-4 max-w-6xl mx-auto">
      <div className="skills-header text-center mb-12">
        <ScrollAnimation animation="fadeUp" delay={1}>
          <p className="mb-[25px] p-[5px] rounded-[50px] bg-white max-w-[135px] mx-auto">
            Experience
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={2}>
          <h2 className="text-[35px] md:text-[56px] text-[#263C48] font-medium max-w-[905px] mx-auto leading-tight">
            My Skills that Shine, Expertise You Can Trust
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={3}>
          <p className="text-gray-600 max-w-[461px] mx-auto">
            Explore my expertise and see how I can leverage my skills to drive your projects forward.
          </p>
        </ScrollAnimation>
      </div>

      <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <ScrollAnimation 
            key={index}
            animation="slideInLeft"
            delay={baseDelay + (index * delayIncrement)} // Longer stagger between each card
          >
            <div className="skill-card p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-5">
                <skill.icon className="w-10 h-10 text-[#263C48]" />
              </div>
              <h3 className="text-[24px] text-[#263C48] font-semibold mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;