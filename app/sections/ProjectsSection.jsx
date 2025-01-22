"use client"

import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ScrollAnimation from '../../ScrollAnimation';

const ProjectCard = ({ title, tags, link, image, index, delay }) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const desktopWidth = 1920;
  const desktopHeight = 1080;
  const scale = containerDimensions.width / desktopWidth;

  return (
    <ScrollAnimation animation="slideInLeft" delay={delay}>
      <div 
        className="bg-white rounded-xl shadow-sm overflow-hidden relative group hover:shadow-lg transition-all duration-300"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div 
          ref={containerRef} 
          className="h-[180px] overflow-hidden relative bg-white"
        >
          <div className="absolute top-0 left-0 w-full">
            <iframe
              src={link}
              className={`origin-top-left transform-gpu ${
                isHovering ? 'transition-transform duration-[15000ms] ease-linear' : 'transition-none duration-200'
              }`}
              style={{
                pointerEvents: 'none',
                width: `${desktopWidth}px`,
                height: `${desktopHeight * 2}px`,
                transform: `scale(${scale}) ${isHovering ? `translateY(-${desktopHeight}px)` : 'translateY(0)'}`,
              }}
            />
          </div>
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const TabContent = ({ projects }) => {
  const baseDelay = 0.2;
  const delayIncrement = 0.1;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.link} 
          {...project} 
          index={index} 
          delay={baseDelay + (index * delayIncrement)}
        />
      ))}
    </div>
  );
};

const CreativeProjects = () => {
  const [activeTab, setActiveTab] = useState('WordPress');
  const [isChanging, setIsChanging] = useState(false);

  const projects = [
    {
      title: 'Property Hive',
      tags: ['NextJS', 'Tailwind CSS'],
      link: 'https://property-hive-ten.vercel.app/',
      category: 'NextJS'
    },
    {
      title: 'Task Manager',
      tags: ['Wordpress', 'Elementor'],
      link: 'https://wordpress-897818-5084474.cloudwaysapps.com/',
      category: 'WordPress'
    },
    {
      title: 'Fame Agency',
      tags: ['NextJS', 'Tailwind CSS'],
      link: 'https://td-fameagency.vercel.app/',
      category: 'NextJS'
    },
    {
      title: 'Clynime',
      tags: ['NextJS', 'Tailwind CSS'],
      link: 'https://clynime.vercel.app/',
      category: 'NextJS'
    },
    {
      title: 'Clyde Sports',
      tags: ['React', 'Tailwind CSS'],
      link: 'https://clyde-sports.netlify.app/',
      category: 'NextJS'
    },
   
    {
      title: 'Easy Flow',
      tags: ['HTML', 'CSS'],
      link: 'https://beta7.technodreamcenter.com/BetaStatic/easyflowdraincleaning.com/',
      category: 'HTML5'
    },
    {
      title: 'HCR',
      tags: ['HTML', 'CSS'],
      link: 'https://betasites.technodreamcenter.com/HCRElectricalSpecialst/',
      category: 'HTML5'
    },
    {
      title: 'Myo',
      tags: ['GoHighLevel'],
      link: 'https://app.gohighlevel.com/v2/preview/2mrVDX8wHVGjFSj6WmuS?notrack=true',
      category: 'GHL'
    },
    {
      title: 'trrecoverygroup',
      tags: ['WordPress', 'Kadence Theme'],
      link: 'https://trrecoverygroup.com/',
      category: 'WordPress'
    },
    {
      title: 'vds.pro',
      tags: ['WordPress', 'Elementor'],
      link: 'https://vds.pro/',
      category: 'WordPress'
    },
    {
      title: 'BreedRND',
      tags: ['WordPress', 'Elementor'],
      link: 'https://beta7.technodreamcenter.com/breedrnd.com/',
      category: 'WordPress'
    },
    {
      title: 'BabySoft',
      tags: ['WordPress', 'Elementor'],
      link: 'https://babysoftsteamcarpetandtilecleaning.com/',
      category: 'WordPress'
    },
    {
      title: 'Paraller Play',
      tags: ['WordPress', 'Elementor'],
      link: 'https://exams.technodreamcenter.com/randall.aquin/parallelplay-today-wp/',
      category: 'WordPress'
    },
    {
      title: 'Edlin',
      tags: ['WordPress', 'Elementor'],
      link: 'https://beta7.technodreamcenter.com/BetaStatic/edlinmotorsports.com/',
      category: 'HTML5'
    },
    {
      title: 'Task Manager',
      tags: ['NextJS', 'Tailwind CSS'],
      link: 'https://cly-task-manager.vercel.app/',
      category: 'NextJS'
    },

   
  ];

  const tabs = ['WordPress', 'NextJS', 'HTML5', 'GHL'];
  
  const filteredProjects = projects.filter(project => project.category === activeTab);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsChanging(true);
    setActiveTab(tab);
    setTimeout(() => setIsChanging(false), 300);
  };

  return (
    <section id="portfolio" className="py-10 md:py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <ScrollAnimation animation="fadeUp" delay={0.2}>
          <p className="mb-[25px] p-[5px] rounded-[50px] bg-white max-w-[135px] mx-auto">
            Portfolio
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.4}>
          <h2 className="text-[35px] md:text-[56px] text-[#263C48] font-medium max-w-[905px] mx-auto leading-tight">
            My Creative Projects
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={0.6}>
          <p className="text-gray-600 max-w-[461px] mx-auto">
            Explore my portfolio showcase
          </p>
        </ScrollAnimation>
      </div>

      <ScrollAnimation animation="fadeUp" delay={0.8}>
        <div className="flex justify-center mb-8 space-x-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </ScrollAnimation>

      <div 
        className={`transition-opacity duration-300 ${
          isChanging ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <TabContent projects={filteredProjects} />
      </div>
    </section>
  );
};

export default CreativeProjects;