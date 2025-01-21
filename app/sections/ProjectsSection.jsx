"use client"

import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectCard = ({ title, tags, link, image, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
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

  useEffect(() => {
    const card = cardRef.current;
    
    gsap.fromTo(card,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [index]);

  const desktopWidth = 1920;
  const desktopHeight = 1080;
  const scale = containerDimensions.width / desktopWidth;

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-xl shadow-sm overflow-hidden relative group"
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
      <div className="px-4 py-1">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2">
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
  );
};

const TabContent = ({ projects }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    gsap.fromTo(container,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: container,
          start: "top center",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, [projects]);

  return (
    <div 
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.link} {...project} index={index} />
      ))}
    </div>
  );
};

const CreativeProjects = () => {
  const [activeTab, setActiveTab] = useState('WordPress');
  const [isChanging, setIsChanging] = useState(false);
  const headerRef = useRef(null);
  
  useEffect(() => {
    const header = headerRef.current;
    
    gsap.fromTo(header.children,
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: header,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const projects = [
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
      title: 'Property Hive',
      tags: ['NextJS', 'Tailwind CSS'],
      link: 'https://property-hive-ten.vercel.app/',
      category: 'NextJS'
    },
    {
      title: 'Easy Flow',
      tags: ['HTML', 'CSS'],
      link: 'https://beta7.technodreamcenter.com/BetaStatic/easyflowdraincleaning.com/',
      category: 'Vanilla'
    },
    {
      title: 'HCR',
      tags: ['HTML', 'CSS'],
      link: 'https://betasites.technodreamcenter.com/HCRElectricalSpecialst/',
      category: 'Vanilla'
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
      category: 'Vanilla'
    },
    {
      title: 'Task Manager',
      tags: ['NextJS', 'Tailwind CSS'],
      link: 'https://cly-task-manager.vercel.app/',
      category: 'NextJS'
    },

   
  ];

  const tabs = ['WordPress', 'NextJS', 'Vanilla', 'GHL'];
  
  const filteredProjects = projects.filter(project => project.category === activeTab);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsChanging(true);
    setActiveTab(tab);
    setTimeout(() => setIsChanging(false), 300);
  };

  return (
    <section id="portfolio" className="py-10 md:py-16 px-4 max-w-6xl mx-auto">
      <div ref={headerRef} className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-2">My Creative Projects</h2>
        <p className="text-gray-600">
          Explore my portfolio
        </p>
      </div>

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