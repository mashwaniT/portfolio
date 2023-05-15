import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
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
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
           Projects 
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, i) =>(
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen'>
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE0MOb56WNPJ-PGX6BrvkWf8DsFWITsvObSA4ikiBx&s" 
                    alt="" 
                    />

                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                                Case study {i+1} of {projects.length}:
                            </span>{" "} 
                            UPS clone  
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                            UPS 2.0 app that has a log in and log out authentication with google.
                            Has a nice home screen with all the movies looking just like UPS. There is also
                            a subscription page where you can see you active monthly subscription.
                        </p>

                    </div>
                </div>
            ) )}
        </div>

        <div className='w-full absolute top-[30%] bg-[#2d2d2d]/30 left-0 h-[500px] -skew-y-12'>

        </div>

    </motion.div>
  )
}

export default Projects