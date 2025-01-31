import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, link: 'Home' },
    { id: 2, link: 'About' },
    { id: 3, link: 'Portfolio' },
    { id: 4, link: 'Experience' },
    { id: 5, link: 'Contact' },
  ];

  // Animation variants for desktop menu links
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Mahesh</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            className='relative inline-block px-4 cursor-pointer font-medium text-gray-500'
            variants={linkVariants}
            initial='hidden'
            animate='visible'
            transition={{ delay: id * 0.1 }}
            whileHover={{ scale: 1.1, color: '#ffffff' }} // Scale and color change on hover
          >
            <Link to={link.toLowerCase()} smooth duration={500}>
              {link}
            </Link>
            {/* Hover underline effect */}
            <motion.div
              className='absolute bottom-0 left-0 w-0 h-0.5 bg-white'
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
      >
        {isOpen ? (
          <i className='fa-solid fa-xmark text-3xl'></i>
        ) : (
          <i className='fa-solid fa-bars text-3xl'></i>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'
            variants={mobileMenuVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                className='relative px-4 cursor-pointer capitalize py-6 text-4xl'
                variants={mobileMenuVariants}
                initial='hidden'
                animate='visible'
                transition={{ delay: id * 0.1 }}
                whileHover={{ scale: 1.1, color: '#ffffff' }} // Scale and color change on hover
              >
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to={link.toLowerCase()}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
                {/* Hover underline effect */}
                <motion.div
                  className='absolute bottom-0 left-0 w-0 h-0.5 bg-white'
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;