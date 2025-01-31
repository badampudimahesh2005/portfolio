
       import React from 'react'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (<>LinkedIn <i className="fa-brands fa-linkedin text-2xl sm:text-3xl"></i></>),
            url: "https://www.linkedin.com/in/maheshbadampudi/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (<>GitHub <i className="fa-brands fa-github text-2xl sm:text-3xl"></i></>),
            url: "https://github.com/badampudimahesh2005"
        },
        {
            id: 3,
            child: (<>Mail <i className="fa-solid fa-envelope text-2xl sm:text-3xl"></i></>),
            url: "mailto:maheshbadampudi32@gmail.com"
        },
        {
            id: 4,
            child: (<>Resume <i className="fa-solid fa-briefcase text-2xl sm:text-3xl"></i> </>),
            url: "/portfolio.pdf",
            style: 'rounded-br-md',
            download: true
        }
    ];

    // <div className='hidden  lg:flex flex-col top-[35%] left-0 fixed'>
    return (
        <div className='flex flex-col sm:top-[35%] top-auto bottom-5 left-0 fixed'>
            <ul>
                {links.map(({ id, child, url, style, download }) => (
                    <li key={id} className={'flex justify-between items-center w-32 h-12 sm:w-40 sm:h-14 px-3 sm:px-4 ml-[-90px] sm:ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ' + style}>
                        <a className='flex justify-between items-center w-full text-white'
                            download={download}
                            href={url}
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;
