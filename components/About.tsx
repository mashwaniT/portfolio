import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
        initial={{
            x:400,
            opacity: 0,
        }}
        transition={{
            ease: 'easeInOut',
            duration: 0.5,
            delay: 0.5,
        }}
        whileInView={{opacity:1, x: 0}}
        viewport={{ once: true }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
    
        <motion.img
            initial={{
                x:-400,
                opacity: 0,
            }}
            transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.5,
              }}
            whileInView={{opacity:1, x: 0}}
            viewport={{ once: true }}
            src='https://media.licdn.com/dms/image/D5603AQGkhxgEDG_nvg/profile-displayphoto-shrink_400_400/0/1682739194662?e=1689206400&v=beta&t=MzJCyt947UNjMrfN-8VHE1WlLQpFWqGXPnQC8ip-W-4'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
        />

        <div className='space-y-10 px-10 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a little background</h4>
            <p className='text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
            </p>
        </div>
    </motion.div>
  )
}

export default About