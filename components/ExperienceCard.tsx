import { CodeBracketIcon, CodeBracketSquareIcon, FolderIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { useInView } from 'react-intersection-observer'

type Props = {
  id: string;
  date: string;
  title: string;
  description: string;
  stack: string[];
  githublink: string;
}

function ExperienceCard({id, date, title, description, stack, githublink}: Props) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,  // Change to false if you want the animation to trigger again whenever it comes into view
  });

  return (
    <div ref={ref}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
        }}
        className="flex flex-wrap justify-center" id="repos">
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
    </motion.div>
    </div>
    
  )
}

export default ExperienceCard
