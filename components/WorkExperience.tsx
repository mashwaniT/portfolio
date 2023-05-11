import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div>
            {/* Experience card */}
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            

        </div>

    </motion.div>
  )
}

export default WorkExperience