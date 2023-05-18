import { CodeBracketIcon, CodeBracketSquareIcon, FolderIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'

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
      <motion.div 
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.1 }}
        className='flex flex-col p-6 bg-zinc-800 hover:bg-zinc-700 shadow-md hover:shadow-xl space-y-4 cursor-pointer transform rounded-lg transition-all ease-in-out duration-100' 
        id="card1"
      >
        <div className='flex justify-between' id="cardhead">
          <h3 className='text-2xl font-bold text-white'>{id}</h3>
          <a href={githublink} target='_blank' rel='noopener noreferrer'>
            <CodeBracketSquareIcon className='w-10 h-10 text-white hover:animate-pulse'/>
          </a>
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
      </motion.div>
    </div>
  )
}

export default ExperienceCard
