import React from 'react'


const SocialLinks = () => {

    const links =[
        {
          id:1,
          child:(<>LinkedIn <i className="fa-brands fa-linkedin text-3xl"></i></>),
          url:"https://www.linkedin.com/in/maheshbadampudi/",
          style:'rounded-tr-md'
        },
        {
            id:2,
            child:(<>GitHub <i className="fa-brands fa-github text-3xl"></i></>),
            url:"https://github.com/badampudimahesh2005"
        },
      
        {
            id:3,
            child:(<>Mail <i className="fa-solid fa-envelope text-3xl"></i></>),
            url:"mailto:maheshbadampudi32@gmail.com"
        },
       
        {
            id:4,
            child:(<>Resume<i className="fa-solid fa-briefcase text-3xl"></i> </>),
            url:"/portfolio.pdf",
            style:'rounded-br-md',
            download:true
        }
    ]
  return (
    <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
           {
            links.map(({id,child,url,style,download}) => (
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'+" "+style}>
                <a  className='flex  justify-between items-center w-full text-white'
                download={download}
                href={url}
                target='_blank'
                >
                  {child}
                </a>
            </li>
                ))
           }
        </ul>
    </div>

)
}

export default SocialLinks