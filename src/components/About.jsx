import React from 'react'

const About = () => {
  return (
    <div  name="about" className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea, accusamus eius veniam iure atque repellat ipsa quos porro aliquid repellendus. Cumque optio et iusto facilis assumenda excepturi! Magnam ut a dolore iusto, tempore dolores iure dicta nesciunt numquam incidunt dignissimos aliquid fugit placeat? Aut molestiae optio culpa possimus numquam.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea, accusamus eius veniam iure atque repellat ipsa quos porro aliquid repellendus. Cumque optio et iusto facilis assumenda excepturi! Magnam ut a dolore iusto, tempore dolores iure dicta nesciunt numquam incidunt dignissimos aliquid fugit placeat? Aut molestiae optio culpa possimus numquam.
            </p>

        </div>
    </div>
  )
}

export default About