import React from 'react'
import {MdKeyboardArrowRight} from "react-icons/md";
import HeroImage from '../assets/profile-picture.jpg'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b via-black from-black to-gray-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div  className='flex flex-col justify-center h-full'>

                <h2 className='text-4xl  sm:text-7xl font-bold  text-white'>I'm a Full stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 8 years of experience in web development.
                     I have worked with various technologies like HTML, CSS, JavaScript, React, Node, Express, MongoDB, etc.
                     I have also worked with various frameworks like Bootstrap, Tailwind CSS, etc.

                </p>

                <div>
                <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'> Portfolio 
                    <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight />
                    </span>
                </Link>
                </div>

            </div>

            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-1/3  md:w-2/3' />
            </div>
           
        </div>
    </div>
  )
}

export default Home