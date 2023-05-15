import { motion } from 'framer-motion';
import React from 'react';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <div className="text-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm">
          All of the languages and tools I have used
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
