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
            src='https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png'
            className="rounded-full border border-x-gray-700 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out">

        </motion.img>
    </div>
  )
}

export default Skill