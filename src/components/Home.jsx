import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/profile-picture.jpg';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [' Developer', 'Freelancer', 'Designer'];
  const typingSpeed = 150; // Speed of typing (in milliseconds)
  const deletingSpeed = 100; // Speed of deleting (in milliseconds)
  const pauseDuration = 1000; // Pause between words (in milliseconds)

  useEffect(() => {
    const currentWord = words[index];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing logic
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting logic
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words]);

  return (
    <div
      name='home'
      className='h-screen w-full bg-gradient-to-b via-black from-black to-gray-900'
    >
      <div className='max-w-screen-lg   mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        {/* Left Side - Text Content */}
        <motion.div
          className='flex flex-col justify-center h-full  md:mr-8' // Added margin-right for gap
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white'>
            I'm a{' '}
            <span className='text-cyan-500 border-r-2 border-white animate-blink'>
              {text}
            </span>
          </h2>
          <p className='text-gray-500 py-4 max-w-md text-sm sm:text-base md:text-lg'>
            I have 8 years of experience in web development. I have worked with
            various technologies like HTML, CSS, JavaScript, React, Node,
            Express, MongoDB, etc. I have also worked with frameworks like
            Bootstrap, Tailwind CSS, etc.
          </p>

          {/* Button with Animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300 ml-2'>
                <i className='fa-solid fa-greater-than'></i>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className='mt-4 mb-6 md:mt-0 md:ml-8 lg:ml-28' 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={HeroImage}
            alt='my profile'
            className='rounded-2xl mx-auto w-52 sm:w-64 md:w-80 lg:w-90 hover:scale-105 transition-transform duration-500'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;