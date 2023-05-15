import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y:-100,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{
                opacity: 1,
                y:0
            }}
            viewport={{
                once: true
            }}
            className='w-20 h-20 rounded-full xl:w-32 xl:h-32 object-cover object-center'
            src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg'
            alt=''
        >
            
        </motion.img>

        <div className='text-center px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>CEO of Google</h4>
            <p className='font-bold text-2xl mt-1'>Google</p>
            <div className='flex space-x-2 my-2'>
                <img 
                    className='h-10 w-10 rounded-full'
                    src="https://cdn.iconscout.com/icon/free/png-512/free-ceylon-5-1175046.png?f=avif&w=512" 
                    alt="" 
                />
                <img 
                    className='h-10 w-10 rounded-full'
                    src="https://cdn.iconscout.com/icon/free/png-512/free-ceylon-5-1175046.png?f=avif&w=512" 
                    alt="" 
                />
                <img 
                    className='h-10 w-10 rounded-full'
                    src="https://cdn.iconscout.com/icon/free/png-512/free-ceylon-5-1175046.png?f=avif&w=512" 
                    alt="" 
                />

            </div>
            <p className='uppercase py-5 text-gray-300'>
                Start ... end
            </p>
        </div>
    </article>
  )
}

export default ExperienceCard
