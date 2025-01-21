'use client'

import React, { useEffect } from 'react';
import Navbar from "./Navbar/Navbar";
import Button from "./Button";
import ExpertiseButtons from "./ExpertiseButtons";
import gsap from "gsap";

const Header = ({ children }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from("#Banner h1", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from("#Banner p", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .from(".button-wrapper", {  // Changed to target the wrapper
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")
    .from("#Banner .expertise-buttons", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.3");

  }, []);

  return (
    <div id="home" className="bg-hero-pattern bg-cover bg-no-repeat min-h-screen">
      <Navbar />
      <div 
        id="Banner" 
        className="font-Onest text-primary flex flex-col items-center justify-center min-h-screen text-center px-5"
      >
        <h1 className="text-[45px] md:text-[75px] max-w-[1320px] text-center mx-auto md:leading-[1.2] leading-tight">
          Hey, I'm Clyde. I'm a
          <span className="inline md:block"> Web Developer</span>
        </h1>
        <p className="mx-auto text-center max-w-[680px] pt-5 pb-6 text-xl">
          I focus on creating modern, responsive websites and web applications that deliver seamless user experiences and meet your unique needs.
        </p>
        <div className="button-wrapper">  {/* Added wrapper div */}
          <Button text="Lets Work Together" width="195px" className="mb-5" />
        </div>
        <ExpertiseButtons className="pt-5 expertise-buttons" />
      </div>
    </div>
  );
};

export default Header;