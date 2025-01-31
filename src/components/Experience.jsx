import React from 'react'

import css from '../assets/css.png'
import github from  '../assets/github.png'
import graphql from  '../assets/graphql.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import nextjs from '../assets/nextjs.png'
import node from '../assets/node.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'


const Experience = () => {

    const experience = [
        {
            id:1,
            src:html,
            title:"HTML",
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:"Javascript",
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:"React",
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:nextjs,
            title:"NextJS",
            style:'shadow-white'
        },
        {
            id:6,
            src:node,
            title:"NodeJS",
            style:'shadow-green-500'
        },
        {
            id:7,
            src:graphql,
            title:"Graphql",
            style:'shadow-pink-500'
        },
        {
            id:8,
            src:tailwind,
            title:"Tailwind",
            style:'shadow-blue-500'
        },
        {
            id:9,
            src:github,
            title:"Github",
            style:'shadow-gray-500'
        }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-black  to-gray-900 md:h-screen w-full'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold inline border-gray-500 border-b-4 p-2'>Experience</p>
                <p className='py-6'>These are the technologies i worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
               {
                experience.map(({id,src,title,style})=>(
                    <div key={id}  className={`shadow-md  rounded-lg  py-2  hover:scale-105 duration-500 ${style}`}> 

                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
                ))
               }
            </div>
        </div>

    </div>
  )
}

export default Experience