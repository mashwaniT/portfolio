import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

function AnimatedIcons() {
  return (
    <header className='flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          ease: 'easeInOut',
          duration: 2.5,
          delay: 0.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon url="https://www.github.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.youtube.com" fgColor="gray" bgColor="transparent" />
      
      
      </motion.div>

      <Link href="/contact">
        <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 2.5,
              delay: 0.5,
            }}
        
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get in touch
            </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default AnimatedIcons;
