import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
            initial={{
                x: directionLeft ? -200: 200,
                opacity: 0,

            }}
            transition={{
                duration: 1
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            src='https://e7.pngegg.com/pngimages/520/669/png-clipart-c-logo-c-programming-language-computer-icons-computer-programming-programming-miscellaneous-blue-thumbnail.png'
            className="rounded-full border border-x-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out">

        </motion.img>
    </div>
  )
}

export default Skill