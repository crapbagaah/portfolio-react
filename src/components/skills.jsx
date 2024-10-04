import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongodb from '../assets/mongodb.png';
import Express from '../assets/express.png';
import Node from '../assets/node.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#06010f] text-gray-300'>
        <div className='max-w-[1000px] sm:pt-32 md:pt-48 lg:pt-64 mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-500'>Tech Stack</p>
                <p className='py-4'></p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#8f1fff] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="html" />
                    <p className='my-4'>HTML</p>
                </div>
            
                <div className='shadow-md shadow-[#8f1fff] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="css" />
                    <p className='my-4'>CSS</p>
                </div>
            
                <div className='shadow-md shadow-[#8f1fff] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JS} alt="javascript" />
                    <p className='my-4'>JavaScript</p>
                </div>
            
                <div className='shadow-md shadow-[#8f1fff] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github" />
                    <p className='my-4'>Github</p>
                </div>
            
                <div className='shadow-md shadow-[#8f1fff] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="ReactJS" />
                    <p className='my-4'>ReactJS</p>
                </div>
            
            
                <div className='shadow-md shadow-[#8f1fff] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind CSS" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>

                <div className='shadow-md shadow-[#8f1fff] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongodb} alt="MongoDB" />
                    <p className='my-4'>MongoDB</p>
                </div>

                <div className='shadow-md shadow-[#8f1fff] hover:scale-110 duration-500'>
                    <img className='w-16 mx-auto' src={Express} alt="Express" />
                    <p className='my-4'>ExpressJS</p>
                </div>

                <div className='shadow-md shadow-[#8f1fff] hover:scale-110 duration-500'>
                    <img className='w-28 mx-auto mt-7' src={Node} alt="Node" />
                    <p className='my-4'>NodeJS</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Skills