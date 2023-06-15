import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import React from "react";
import { useInView } from "react-intersection-observer";

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
        date: "2023-06",
        title: "Personal Portfolio Website",
        description: "A web app using React Typescript with NextJS for SSR and SEO.",
        stack: ["typescript", "react", "nextjs", "tailwindcss"],
        githublink: "https://github.com/mashwaniT/portfolio",        
    },
    {
        id: "02",
        date: "2023-05",
        title: "Movie Recommender System",
        description: "Machine learning algorithm that recommends similar movies based on your favourite.",
        stack: ["python", "scikit-learn", "numpy", "pandas"],
        githublink: "https://github.com/mashwaniT/movie-recommender-system",    
    },
    {
        id: "03",
        date: "2021-05",
        title: "Inscription",
        description: "Submission for RUHacks2021, made a cloud based note-taking app.",
        stack: ["typescript", "react", "firebase", "firestore"],
        githublink: "https://github.com/mashwaniT/Inscription",        
    },
    
];

type Props = {}


const WorkExperience = () => {
    // const cardsRefs = useRef([]);
    // cardsRefs.current = [];
  
    // const addToRefs = (el) => {
    //   if (el && !cardsRefs.current.includes(el)) {
    //     cardsRefs.current.push(el);
    //   }
    // };

    // const [ref, inView] = useInView({
    //     triggerOnce: false,
    // })
  
    // useEffect(() => {
    //     if (inView) {
    //         gsap.from(cardsRefs.current, {
    //             opacity: 0,
    //             duration: 1,
    //             ease: "power1.out",
    //             stagger: 0.4
    //           });
    //     }
      
    // }, [inView]);
  
    return (
        <div
          className='min-h-screen flex flex-col overflow-hidden justify-start items-center mx-auto'>
          <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl z-10 text-center mt-24'>
            Projects
          </h3>
          <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 p-14'>
            {experienceData.map((experience, index) => (
              <div key={experience.id} >
                <ExperienceCard {...experience} />
              </div>
            ))}
          </div>
        </div>
    )
    
      
      
  }
  
  export default WorkExperience;