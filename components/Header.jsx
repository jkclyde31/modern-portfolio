'use client'

import React from 'react';
import Navbar from "./Navbar/Navbar";
import Button from "./Button";
import ExpertiseButtons from "./ExpertiseButtons";
import ScrollAnimation from '../ScrollAnimation'

const Header = () => {
  return (
    <div id="home" className="bg-hero-pattern bg-cover bg-no-repeat min-h-screen">
      <Navbar />
      <div 
        id="Banner" 
        className="font-Onest text-primary flex flex-col items-center justify-center min-h-screen text-center px-5"
      >
        <ScrollAnimation animation="fadeUp" delay={2}>
          <h1 className="text-[45px] md:text-[75px] max-w-[1320px] text-center mx-auto md:leading-[1.2] leading-tight">
            Hey, I'm Clyde. I'm a
            <span className="inline md:block"> Web Developer</span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={4}>
          <p className="mx-auto text-center max-w-[680px] pt-5 pb-6 text-xl">
            I focus on creating modern, responsive websites and web applications that deliver seamless user experiences and meet your unique needs.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="scaleUp" delay={6}>
          <Button href="#contact" text="Lets Work Together" width="195px" className="mb-5" />
        </ScrollAnimation>

        <ScrollAnimation animation="fadeUp" delay={8}>
          <ExpertiseButtons className="pt-5" />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Header;