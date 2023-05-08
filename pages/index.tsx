import React from 'react';
import Image from 'next/image';
import Head from "next/head";
import Header from '../components/Header';
import dynamic from 'next/dynamic';
import '../src/app/globals.css'
import Hero from '../components/Hero';
import About from '../components/About';

const AnimatedIcons = dynamic(() => import('../components/AnimatedIcons'), { ssr: false });

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen z-0 snap-y snap-mandatory overflow-scroll'>
        <Head>
            <title>Tahas Portfolio</title>
        </Head>

        <Header />

          {/* Build Hero */}
        <section id='hero' className='snap-start'>
            <Hero/>
        </section>

          {/* Build About */}
        <section id='about' className='snap-center'>
            <About />
        </section>

          {/* Build Experience */}

          {/* Build Skills */}

          {/* Build Projects */}

          {/* Build Contact Me */}
    </div>
  );
};
