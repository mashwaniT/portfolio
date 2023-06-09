import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ['20%','20%','50%','80%','20%'],
        }}
        transition={{
          ease: 'easeInOut',
          duration: 2.5,
          delay: 0.5,
        }}
        className='realtive flex justify-center items-center'>
        <div className='opacity-40 absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-72'/>
        <div className='opacity-40 rounded-full border border-[#F7AB0A] h-[300px] w-[300px] mt-72 absolute animate-pulse'/>
        <div className='opacity-40 rounded-full border border-[#333333] h-[500px] w-[500px] mt-72 absolute'/>
        <div className='rounded-full border border-[#F7AB0A] h-[650px] w-[650px] opacity-20 mt-72 absolute animate-pulse'/>
        <div className='opacity-40 rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-72'/>
    </motion.div>
  )
}

export default BackgroundCircles