import React from 'react';
import { motion } from 'framer-motion';
import css from '../assets/css.png';
import github from '../assets/github.png';
import graphql from '../assets/graphql.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import nextjs from '../assets/nextjs.png';
import node from '../assets/node.png';
import reactImage from '../assets/react.png';
import tailwind from '../assets/tailwind.png';

const Experience = () => {
  const experience = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: nextjs,
      title: 'NextJS',
      style: 'shadow-white',
    },
    {
      id: 6,
      src: node,
      title: 'NodeJS',
      style: 'shadow-green-500',
    },
    {
      id: 7,
      src: graphql,
      title: 'Graphql',
      style: 'shadow-pink-500',
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-cyan-500',
    },
    {
      id: 9,
      src: github,
      title: 'Github',
      style: 'shadow-gray-500',
    },
  ];

  return (
    <div
      name='experience'
      className='bg-gradient-to-b from-black to-gray-900 md:h-screen w-full pt-20' // Added pt-20 for navbar padding
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        {/* Experience Heading */}
        <motion.div
          className='pb-8'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className='text-4xl font-bold inline border-gray-500 border-b-4 p-2'>
            Experience
          </p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </motion.div>

        {/* Experience Grid */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
          {experience.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md rounded-lg py-2  ${style}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <img src={src} alt={title} className='w-20 mx-auto hover:scale-150 duration-500' />
              <p className='mt-4'>{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;