import React from 'react';
import Image from 'next/image';
import Head from "next/head";
import Header from '../components/Header';
import '../src/app/globals.css'
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import ContactMe from '../components/ContactMe';
import CurrentEndeavors from '../components/CurrentEndeavors';

// const AnimatedIcons = dynamic(() => import('../components/AnimatedIcons'), { ssr: false });

export default function Home() {
    const aboutRef = React.useRef(null);
    const experienceRef = React.useRef(null);
    const skillsRef = React.useRef(null);
    const projectsRef = React.useRef(null);
    

  return (
    <div className='bg-[rgb(0,0,0)] text-white h-screen snap-y snap-mandatory z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/10 scrollbar-thumb-[#f7ab0a] scrollbar-thumb'>
        <Head>
            <title>Tahas Portfolio</title>
        </Head>

        <Header />

          {/* Build Hero */}
        <section id='hero' className='snap-start'>

            <Hero aboutRef={aboutRef} experienceRef={experienceRef} skillsRef={skillsRef} projectsRef={projectsRef} />

        </section>

          {/* Build About */}
        <section ref={aboutRef} id='about' className='snap-center'>
            <About />
        </section>

          {/* Build Experience */}
        <section ref={experienceRef} id='experience' className='snap-start'>
            <WorkExperience />
        </section>

          {/* Build Skills */}
        <section ref={skillsRef} id='skills' className='snap-start'>
            <Skills />
        </section>

          {/* Build Projects */}
        <section ref={projectsRef} id='projects' className='snap-start'>
            <CurrentEndeavors />
        </section>

          {/* Build Contact Me */}
        <section className='snap-start' id='contact'>
            <ContactMe />
        </section>
    </div>
  );
};
