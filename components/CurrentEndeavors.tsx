// import your dependencies...
import { motion } from "framer-motion";
import React from "react";
import EndeavorCard from "./EndeavorCard";

interface Endeavor {
    id: string;
    title: string;
    description: string;
    stack: string[];
    githublink: string;
}

const currentEndeavorsData: Endeavor[] = [
    {
      id: "01",
      title: "2D Game Engine",
      description: "Designing a 2D console game engine that incorporates the basics of computer graphics.",
      stack: ["c++", "command line"],
      githublink: "https://github.com/mashwaniT/",        
    },
    
    {
      id: "02",
      title: "Flappy Bird",
      description: "Grasping the foundations of game design by creating Flappy Bird using Unity with C++",
      stack: ["unity", "c++"],
      githublink: "https://github.com/mashwaniT/",        
    },
    
    {
      id: "03",
      title: "Open Source Contributor",
      description: "Contributing to various open source projects on GitHub.",
      stack: ["typescript", "react", "nextjs", "tailwindcss"],
      githublink: "github.com/mashwaniT/portfolio",        
    },
    
    
  ];
  
function CurrentEndeavors() {
    return (
      <motion.div
        className='min-h-screen flex flex-col overflow-hidden justify-start items-center mx-auto'>
        
          <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl z-10 text-center mt-24'>
            Endeavours
          </h3>
  
        <motion.div

        className='mt-24 mb-52 xl:mt-24 lg:mt-24  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 p-10'>
          {currentEndeavorsData.map((endeavor) => (
            <EndeavorCard key={endeavor.id} {...endeavor} />
          ))}
        </motion.div>
      </motion.div>
    )
  }
  
  export default CurrentEndeavors;
  