import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import Image from 'next/image';


type Props = {
    aboutRef: React.RefObject<HTMLElement>;
    experienceRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
}

function Hero({aboutRef, experienceRef, skillsRef, projectsRef}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Taha",
            "Code weaver and digital craftsman",
            "Creating digital magic, one keystroke at a time",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    

  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        {/* <Animation className="absolute inset-0 z-0 mt-20" /> new */}
        <BackgroundCircles />
        <div className="relative w-32 h-32 overflow-hidden rounded-full">
        <Image
            src="/taha.jpeg"
            alt="Taha"
            layout="fill"  // this will make the image take the full width/height of its parent
            objectFit="cover"  // this ensures the image scales nicely
        />
        </div>

        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Developer
            </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span>{text}</span>
            <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='pt-5'>
            <button className='heroButton' onClick={() => scrollToSection(aboutRef)}>About</button>
            <button className='heroButton' onClick={() => scrollToSection(experienceRef)}>Projects</button>
            <button className='heroButton' onClick={() => scrollToSection(skillsRef)}>Skills</button>
            <button className='heroButton' onClick={() => scrollToSection(projectsRef)}>Endeavours</button>
            
        </div>

        </div>
        

    </div>
  );
};

export default Hero