import React from 'react'
import project1 from '../assets/portfolio/project1.jpg'

const Portfolio = () => {

  const portfolios = [
    {
      id:1,
      title: 'Project 1',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com'
    },
    {
      id:2,
      title: 'Project 2',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com'
    },
    {
      id:3,
      title: 'Project 3',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com'
    },
    {
      id:4,
      title: 'Project 4',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com'
    },
    {
      id:5,
      title: 'Project 5',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com'
    },
    {
      id:6,
      title: 'Project 6',
      image: project1,
      demo: 'https://www.google.com',
      code: 'https://www.google.com'
    }
  ];

  return (
    <div name="portfolio" className='w-full bg-gradient-to-b from-black to-gray-900 text-white md:h-screen'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>check out some of my work here</p>
        </div>



        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

           
          {portfolios.map(({id,image})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>

            <img src={image} alt="" className='rounded-lg hover:scale-105 duration-200 w-full'/>
           
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3  m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3  m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
          ))}


        </div>



      </div>
    </div>
  )
}

export default Portfolio