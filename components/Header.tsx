import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedIcons = dynamic(() => import('./AnimatedIcons'), { ssr: false });

type Props = {};

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5'>
      <AnimatedIcons />
    </header>
  );
}

export default Header;
