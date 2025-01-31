import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  // Education data
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Example',
      year: '2016 - 2020',
    },
    {
      id: 2,
      degree: 'Master of Science in Software Engineering',
      institution: 'Tech University',
      year: '2020 - 2022',
    },
    {
      id: 3,
      degree: 'High School Diploma',
      institution: 'Example High School',
      year: '2014 - 2016',
    },
    {
        id: 4,
        degree: 'Master of Science in Software Engineering',
        institution: 'Tech University',
        year: '2020 - 2022',
    }
    
  ];

  // Animation variants for education items
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      name='education'
      className='w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative'>
        {/* Education Heading */}
        <motion.div
          className='pb-8 mt-6'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Education
          </p>
        </motion.div>

        {/* Vertical Line */}
        <motion.div
          className='absolute left-6 top-28 h-[calc(100%-15rem)] w-1 bg-white' // Adjusted top position
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        />

        {/* Education Details */}
        <div className='space-y-8 pl-12 relative'>
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className='relative'
              initial='hidden'
              whileInView='visible'
              variants={itemVariants}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {/* Circle on the Line */}
              <div className='absolute -left-12 top-4 w-5 h-5 bg-gray-500 rounded-full border-4 border-white' />

              {/* Education Content */}
              <div className='bg-gray-800 p-6 rounded-lg shadow-lg'>
                <h3 className='text-2xl font-bold text-cyan-500'>{edu.degree}</h3>
                <p className='text-gray-400 mt-2'>{edu.institution}</p>
                <p className='text-gray-400 mt-1'>{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;