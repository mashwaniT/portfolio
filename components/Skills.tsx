import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import BackgroundCircles from './BackgroundCircles';

const skillsData = [
  { name: 'React', image: '/react-original.svg' },
  { name: 'JavaScript', image: '/javascript-original.svg' },
  { name: 'Python', image: '/python-original.svg' },
  { name: 'C', image: '/c-original.svg' },
  { name: 'CPP', image: '/cplusplus-original.svg' },
  { name: 'Bash', image: '/bash-plain.svg' },
  { name: 'Git', image: '/git-original.svg' },
  { name: 'Next', image: '/nextjs-original.svg' },
  { name: 'Pandas', image: '/pandas-original.svg' },
  { name: 'Tailwind', image: '/tailwindcss-plain.svg' },
  { name: 'Typescript', image: '/typescript-original.svg' },
  { name: 'Vim', image: '/vim-original.svg' },

  { name: 'CSS', image: '/css3-original.svg' },
  { name: 'Firebase', image: '/firebase-plain.svg' },
  { name: 'Java', image: '/java-original.svg' },
  { name: 'Linux', image: '/linux-original.svg' },
  { name: 'Jupyter', image: '/jupyter-original.svg' },
  { name: 'SQL', image: '/mysql-original.svg' },
  { name: 'Node', image: '/nodejs-original.svg' },
  { name: 'Numpy', image: '/numpy-original.svg' },
  { name: 'Opencv', image: '/opencv-original.svg' },
  // Add more skills as needed
];

const Skills: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col overflow-hidden justify-start items-center mx-auto'>
  <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl z-10 text-center mt-24'>
    Skills
  </h3>
    <div className="flex flex-wrap justify-center mt-24">
      {skillsData.map((skill, index) => (
        <div key={index} className="m-4">
          <div className="rounded-full w-24 h-24 relative  mb-2">
            <Image
              className="rounded-full transform hover:scale-125 transition-transform duration-200"
              src={skill.image}
              alt={skill.name}
              layout="fill"
              objectFit="contain"
            />
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
              <p className="text-white text-center">{skill.name}</p>
            </div> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};


export default Skills;
