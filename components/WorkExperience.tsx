import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

interface Experience {
    id: string;
    date: string;
    title: string;
    description: string;
    stack: string[];
    githublink: string;
}

const experienceData: Experience[] = [
    {
        id: "01",
        date: "2023-05",
        title: "Personal Portfolio Website",
        description: "A web app using React Typescript with NextJS for SSR and SEO.",
        stack: ["typescript", "react", "nextjs", "tailwindcss"],
        githublink: "github.com/mashwaniT/portfolio",        
    },
    {
        id: "02",
        date: "2023-05",
        title: "Movie Recommender System",
        description: "Machine learning algorithm that recommends similar movies based on your favourite.",
        stack: ["python", "scikit-learn", "numpy", "pandas"],
        githublink: "github.com/mashwaniT/portfolio",    
    },
    {
        id: "03",
        date: "2021-05",
        title: "Inscription",
        description: "Submission for RUHacks2021, made a cloud based note-taking app.",
        stack: ["typescript", "react", "firebase", "firestore"],
        githublink: "github.com/mashwaniT/portfolio",        
    },
    {
        id: "03",
        date: "2021-05",
        title: "Inscription",
        description: "Submission for RUHacks2021, made a cloud based note-taking app.",
        stack: ["typescript", "react", "firebase", "firestore"],
        githublink: "github.com/mashwaniT/portfolio",        
    }
];

type Props = {}

function WorkExperience({}: Props) {
    
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
        className='h-full py-20 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly align-middle mx-auto items-center'>
        <h3 className='uppercase absolute top-24  tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className='py-20 mb-52 xl:mt-24 lg:mt-24  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 p-10'>
            {/* Experience card */}
            {experienceData.map((experience) => (
                <ExperienceCard key={experience.id} {...experience} />
            ))}
        </div>

    </motion.div>
  )
}

export default WorkExperience
