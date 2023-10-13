import React from 'react'

const About = () => {
  return (
    <div name='about' className=' w-full h-screen bg-[#06010f] text-gray-300'> 
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-500'>About</p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi. I'm Saheli, nice to meet you. Let's connect.
                    </p>
                </div>
                <div>
                    <p>Hello, I'm a tech enthusiast. I started learning HTML, CSS, and JavaScript because I wanted to build websites. As I learned more, I explored further with frameworks like Three.js, Tailwind CSS, and Bootstrap. I started learning ReactJs recently, I liked it. I got to know about TypeScript and Context API, and dived more into it. I want to learn more about front-end development frameworks, and back-end development is on the list too. I'm interested in learning about cyber security and recently discovered how CTFs work. It was fascinating to explore. I'll be looking into that further. I want to broaden my knowledge and am eager to learn and collaborate with people.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About