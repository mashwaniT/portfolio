import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedIcons = dynamic(() => import('./AnimatedIcons'), { ssr: false });

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <AnimatedIcons />
    </header>
  );
}

export default Header;
