import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";


type Props = {
    id: string;
    title: string;
    description: string;
    stack: string[];
    githublink: string;
  }

function EndeavorCard({id, title, description, stack, githublink}: Props) {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0, scale: 0.5 },
        show: { 
          opacity: 1, 
          scale: 1, 
          transition: {
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01]
          }
        }
      }
      

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
          className='flex flex-col p-6 bg-zinc-800 hover:bg-zinc-700 shadow-md hover:shadow-xl space-y-4 cursor-pointer transform rounded-lg transition-all ease-in-out duration-100' 
          id="card1"
        >
          
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
          <div className='flex justify-center' id="cardhead">
            {/* <h3 className='text-2xl font-bold text-white'>{id}</h3> */}
            <a href={githublink} target='_blank' rel='noopener noreferrer'>
              <CodeBracketSquareIcon className='w-10 h-10 text-white hover:animate-pulse'/>
            </a>
          </div>
        </div>
      </motion.div>

        </div>
      
    )
  }
  
  export default EndeavorCard;
  