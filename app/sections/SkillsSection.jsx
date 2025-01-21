'use client'

import React, { useEffect } from 'react';
import { Globe, Palette, Layout, Flame, Computer, Film } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const skills = [
    {
      title: 'Frontend Developenment',
      icon: Palette,
      description: 'Proficient in crafting responsive and dynamic user interfaces using React, Next.js, Wordpress,  CSS/Tailwind CSS.'
    },
    {
      title: 'Backend Developement',
      icon: Globe,
      description: 'Knowledgeable in API development and integration, including RESTful APIs for seamless data communication.'
    },
    {
      title: 'DevOps and Tools',
      icon: Layout,
      description: 'Deployment using Vercel, Netlify, or Heroku.'
    },
    {
      title: 'Automation and Workflow',
      icon: Flame,
      description: 'Proficiency in GoHighLevel for workflow and CRM automation'
    },
    {
      title: 'Performance Optimization',
      icon: Film,
      description: 'Lazy loading, optimizing images, and improving Core Web Vitals scores.'
    },
    {
      title: 'Database Management',
      icon: Computer,
      description: 'Proficient in writing optimized queries, database migrations, and implementing database security best practices.'
    }
  ];

  useEffect(() => {
    // Animate the header section
    gsap.from('.skills-header', {
      scrollTrigger: {
        trigger: '.skills-header',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate each skill card with a stagger effect
    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 75%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: {
        amount: 0.6,
        grid: 'auto',
        from: 'start'
      },
      ease: 'power3.out'
    });
  }, []);

  return (
    <section className="py-10 md:py-16 px-4 max-w-6xl mx-auto">
      <div className="skills-header text-center mb-12">
        <p className="mb-[25px] p-[5px] rounded-[50px] bg-white max-w-[135px] mx-auto">
          Experience
        </p>
        <h2 className="text-[35px] md:text-[56px] text-[#263C48] font-medium max-w-[905px] mx-auto leading-tight">
          My Skills that Shine, Expertise You Can Trust
        </h2>
        <p className="text-gray-600 max-w-[461px] mx-auto">
          Explore my expertise and see how I can leverage my skills to drive your projects forward.
        </p>
      </div>

      <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-5">
              <skill.icon className="w-10 h-10 text-[#263C48]" />
            </div>
            <h3 className="text-[24px] text-[#263C48] font-semibold mb-3">
              {skill.title}
            </h3>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;