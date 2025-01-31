import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/portfolio/project1.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: 'Project 1',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com',
    },
    {
      id: 2,
      title: 'Project 2',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com',
    },
    {
      id: 3,
      title: 'Project 3',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com',
    },
    {
      id: 4,
      title: 'Project 4',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com',
    },
    {
      id: 5,
      title: 'Project 5',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com',
    },
    {
      id: 6,
      title: 'Project 6',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com',
    },
  ];

  return (
    <div
      name='portfolio'
      className='w-full bg-gradient-to-b from-gray-900 to-black text-white md:h-screen'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        {/* Portfolio Heading */}
        <motion.div
          className='pb-8'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-4'>Check out some of my work here</p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolios.map(({ id, image, title, demo, code }) => (
            <motion.div
              key={id}
              className='shadow-md shadow-gray-600 rounded-lg overflow-hidden relative group'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {/* Project Image */}
              <img
                src={image}
                alt={title}
                className='rounded-lg w-full h-48 object-cover group-hover:scale-105 duration-200'
              />

              {/* Overlay with Project Details */}
              <div className='absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center space-y-4 duration-200'>
                <h3 className='text-2xl font-bold text-white'>{title}</h3>
                <div className='flex space-x-4'>
                  <a
                    href={demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 duration-200'
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 duration-200'
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;