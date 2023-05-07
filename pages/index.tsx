// index.tsx
import React from 'react';
import Image from 'next/image';
import Head from "next/head";
import Header from '../components/Header';
import dynamic from 'next/dynamic';
import '../src/app/globals.css'

const AnimatedIcons = dynamic(() => import('../components/AnimatedIcons'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tahas Portfolio</title>
      </Head>
      <main>
        <div>
          <Header />

          {/* Build Hero */}

          {/* Build About */}

          {/* Build Experience */}

          {/* Build Skills */}

          {/* Build Projects */}

          {/* Build Contact Me */}
        </div>
      </main>
    </>
  )
}
