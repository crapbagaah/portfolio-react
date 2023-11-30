import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Me from '../assets/ideo1.png'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#06010f]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 pt-3 sm:pt-8 flex flex-wrap items-center justify-center h-full'>

        <div className='w-full sm:w-2/3 sm:pr-4 sm:mt-12 sm:pt-10'>
            <p className='text-purple-500 mt-16'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Saheli Sahoo</h1>
            <h3 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>I am a Front-end Developer</h3>
            <p className='italic text-2xl text-[#8892b0] py-2'>I want to build cool things</p>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a student of Computer Science with specialization in 
                Information Security at VIT, Vellore, India. I'm from Kolkata.
                I'm looking forward to contribute in the field of Computer Science and I'm eager to grow 
                and learn new stuffs.</p>
            <div>
              <Link to="work" smooth={true}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-500 hover:border-purple-500'>
                View Work
                  <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3'/>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/*<div className='w-full sm:w-1/3'>
            <img src={Me} alt='Moving Picture' className='animate-slide rounded' />
  </div>*/}
        </div>

    </div>
  )
}

export default Home