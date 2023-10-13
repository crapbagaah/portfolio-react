import React from 'react'
import BgImg from '../assets/bgimg.png'
import Varc from '../assets/varc_web.png'
import Elate from '../assets/elate.png'
import CubeSat from '../assets/cubesat.png'
//import img

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#06010f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-500'>Work</p>
                <p className='py-6'>Check out my work</p>
            </div>
            {/*-------card-----------*/}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div style={{backgroundImage:`url(${Varc})`}}
                className='shadow-lg shadow-purple-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        
                        <span className='text-2xl font-bold text-white tracking-wider ml-2'>
                            Varc Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://vitarc.github.io/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/VITARC/vitarc.github.io/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div style={{backgroundImage:`url(${Elate})`}}
                className='shadow-lg shadow-purple-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Elate
                        </span>
                        <div className='pt-8 text-center'>
                            {/*<a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>*/}
                            <a href="https://github.com/crapbagaah/elate1final">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div style={{backgroundImage:`url(${CubeSat})`}}
                className='shadow-lg shadow-purple-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Cubesat Dashboard
                        </span>
                        <div className='pt-8 text-center'>
                            {/*<a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>*/}
                            <a href="https://github.com/crapbagaah/cubesat_varc">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work