import { CodeBracketIcon, CodeBracketSquareIcon, FolderIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {
  id: string;
  date: string;
  title: string;
  description: string;
  stack: string[];
  githublink: string;
}

function ExperienceCard({id, date, title, description, stack, githublink}: Props) {
  return (
    <div className="flex flex-wrap justify-center" id="repos">
      <div
        className='flex flex-col p-6 bg-zinc-800 shadow-md space-y-4 rounded-lg' 
      >
        <div className='flex items-center justify-center md:items-start md:flex-row' id="cardhead">
          {/* <h3 className='px-7 py-8 text-4xl font-bold text-white hover:text-[#f7ab0a] transition-colors duration-200'>{id}</h3> */}
          <SocialIcon url={githublink} fgColor="#f7ab0a" bgColor="transparent" style={{ width: 100, height: 100 }} className="transform hover:scale-125 transition-transform duration-200" />
        </div>


        <p className='text-sm text-gray-300' id="dateupdated">
          Last updated: {date}
        </p>
        <h5 className='text-xl font-semibold text-white' id="cardtitle">
          {title}
        </h5>
        <p className='text-base text-white' id="carddetails">
          {description}
        </p>
        <div className="flex flex-wrap space-x-2 text-sm text-[#f7ab0a]" id="cardtopics">
          {stack.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
