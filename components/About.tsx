import React from 'react'
import { motion } from 'framer-motion'
import { useTrail, animated } from '@react-spring/web'

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
        <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
    
        {/* <motion.img
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
            className='mt-10 md:mt-0 md: xl: flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
        /> */}

        <div className='space-y-10 px-10 md:px-10 mt-10 md:mt-0'>
            <h4 className='text-4xl font-semibold'>Here is a little background</h4>
            <p className='text-base'>
                I am currently in my fourth year studying Computer Science at Wilfrid Laurier University.
                I have been programming for 6 years and am still learning new techniques every day.
                My main areas of interest in this vast field are: web development, machine learning, systems programming
                and computer graphics. My passion for programming and techonology is rivaled with my love for sports and outdoors.

            </p>
        </div>
    </motion.div>
  )
}

export default About
