import React, { useState, useRef, useEffect } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'



const skills = [
  {
    name: 'React',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  },
  {
    name: 'JavaScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    name: 'TypeScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
  {
    name: 'Next.js',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  },
  {
    name: 'Tailwind CSS',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  },
];

const to = (i: number) => ({
  x: Math.random() * 100 - 10, 
  y: i * -10,
  scale: 1,
  rot: -20 + Math.random() * 50, 
  delay: i * 100,
})

const from = (_i: number) => ({
  x: Math.random() * 100 - 10, 
  rot: -20 + Math.random() * 50, 
  scale: 1.5,
  y: -1000,
})

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Skills() {
  const SkillsSectionRef = React.useRef(null);
  

  const [gone] = useState(() => new Set())
  const [props, api] = useSprings(skills.length, i => ({
    ...to(i),
    from: from(i),
  })) 

  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 
    const dir = xDir < 0 ? -1 : 1 
    if (!down && trigger) gone.add(index) 
    api.start(i => {
      if (index !== i) return 
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) 
      const scale = down ? 1.1 : 1 
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === skills.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })

  return (
    <div className='h-full py-20 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly align-middle mx-auto items-center'>
      <h3 className='uppercase absolute top-24  tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <div className="relative w-full flex justify-center items-center h-screen">
  
  {props.map(({ x, y, rot, scale }, i) => (
            <animated.div
            key={i}
            className="absolute"
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              x,
              y,
              width: '300px',
              height: '400px',
              backgroundColor: '#fff',
              backgroundImage: `url(${skills[i].image})`,
              backgroundSize: 'cover',
              borderRadius: '10px',
              boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div
              className="w-full h-full flex items-end justify-center text-white text-2xl bg-gradient-to-t from-black/60 to-transparent p-6"
            >
              {skills[i].name}
            </div>
          </animated.div>
        ))}
      </div>
    </div>
    
        )
      }
      
      export default Skills
      
