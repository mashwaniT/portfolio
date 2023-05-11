import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "how fast can i type this sentence",
            "welcome-to-my-website.tsx",
            "<aspiring developer />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src='https://media.licdn.com/dms/image/D5603AQGkhxgEDG_nvg/profile-displayphoto-shrink_800_800/0/1682739194662?e=1689206400&v=beta&t=wmjdQ3hNCZvSKxJ7gooS63LChsPyjiFC_Vo6n2P3Ujw'
            alt='batman'
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Developer
            </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span>{text}</span>
            <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='pt-5'>
            <Link href='about'>
                <button className='heroButton'>About</button>
            </Link>
            <Link href="experience">
                <button className='heroButton'>Experience</button>
            </Link>
            <Link href="skills">
                <button className='heroButton'>Skills</button>
            </Link>
            <Link href="projects">
                <button className='heroButton'>Projects</button>
            </Link>
            
        </div>

        </div>
        

    </div>
  );
};

export default Hero