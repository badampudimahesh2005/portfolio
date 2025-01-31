import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/profile-picture.jpg';

const About = () => {
  // Animation variants for staggered text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        {/* About Heading */}
        <motion.div
          className='mt-4'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }} // Animations will replay every time
        >
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </motion.div>
        

        {/* About Content */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.3 }} // Animations will replay every time
          className='mt-8'
        >

          <motion.p variants={childVariants} className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea,
            accusamus eius veniam iure atque repellat ipsa quos porro aliquid
            repellendus. Cumque optio et iusto facilis assumenda excepturi!
            Magnam ut a dolore iusto, tempore dolores iure dicta nesciunt numquam
            incidunt dignissimos aliquid fugit placeat? Aut molestiae optio culpa
            possimus numquam.
          </motion.p>
          <br />
          <motion.p variants={childVariants} className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea,
            accusamus eius veniam iure atque repellat ipsa quos porro aliquid
            repellendus. Cumque optio et iusto facilis assumenda excepturi!
            Magnam ut a dolore iusto, tempore dolores iure dicta nesciunt numquam
            incidunt dignissimos aliquid fugit placeat? Aut molestiae optio culpa
            possimus numquam.
          </motion.p>
        </motion.div>

       
      </div>
    </div>
  );
};

export default About;