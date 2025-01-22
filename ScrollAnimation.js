// ScrollAnimation.js
'use client'

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  start = 'top 80%',
  className = ''
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    // Animation configurations
    const animations = {
      fadeUp: {
        opacity: 0,
        y: 30,
      },
      fadeIn: {
        opacity: 0,
      },
      scaleUp: {
        opacity: 0,
        scale: 0.95,
      },
      slideInLeft: {
        opacity: 0,
        x: -50,
      },
      slideInRight: {
        opacity: 0,
        x: 50,
      }
    };

    // Get initial animation state
    const initialState = animations[animation] || animations.fadeUp;

    // Set initial state
    gsap.set(element, initialState);

    // Create animation
    const tl = gsap.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: duration,
      delay: delay * 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: 'play none none reset'
      }
    });

    return () => {
      // Cleanup
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, duration, start]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation;