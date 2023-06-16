import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTrail, a } from '@react-spring/web';
import { motion } from 'framer-motion'

const items = [
  "Here is a little background",
  // other items
  "I am currently in my fourth year studying Computer Science at Wilfrid Laurier University. I have been programming for 6 years and am still learning new techniques every day. My main areas of interest in this vast field are: web development, machine learning, systems programming and computer graphics. My passion for programming and technology is rivaled with my love for sports and outdoors.",
];

function About() {

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
  
    return (
      <div className='min-h-screen flex flex-col overflow-hidden justify-start items-center'>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl z-10 text-center mt-24'>
        About
      </h3>
      <div ref={ref}>
        <motion.div 
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 mt-24 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 items-center'>
          <div className='max-w-screen-md space-y-10'>
            <h4 className='text-4xl font-semibold'> Here is a little background </h4>
            <p className='text-base'> I am currently in my fourth year studying Computer Science at Wilfrid Laurier University. I have been programming for 6 years and am still learning new techniques every day. My main areas of interest in this vast field are: web development, machine learning, systems programming and computer graphics. My passion for programming and technology is rivaled with my love for sports and outdoors </p>      
        </div>
        </motion.div>
      </div>
      </div>
    );
  }
  

  

export default About;
