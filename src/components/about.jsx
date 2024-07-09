import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#06010f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] sm:pt-32 md:pt-48 lg:pt-64 w-full px-4 grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-purple-500'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] sm:pb-8 md:pb-16 lg:pb-64 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 '>
          <div className='sm:text-right text-2xl font-bold'>
            <p>
              🚀Welcome to My Digital Playground!
            </p>
          </div>
          <div>
            <p> Hey there! I'm Saheli, a tech enthusiast passionate about turning digital dreams into reality. My coding journey began with the trio of HTML, CSS, and JavaScript, driven by a desire to create captivating websites.
              <br /><br />
              As I continued exploring, I immersed myself in modern web development using frameworks like ReactJS, and I appreciated the efficiency of Tailwind CSS and Bootstrap. During my internship, I briefly studied TypeScript and the Context API, gaining some initial insights into them.
              <br /><br />
              In addition to front-end work, I dived into Full Stack development and got acquainted with the basics of the MERN stack. There's still so much more for me to learn and improve in these areas. I'm diving into Java Full Stack development with Spring Boot. These topics are new to me, and I'm excited about the journey ahead, eager to absorb knowledge and grow in these fields.
              <br /><br />
              Beyond the lines of code, I've developed a keen interest in cybersecurity. Exploring Capture The Flag (CTF) challenges was fascinating, and I'm eager to delve deeper into it.
              <br /><br />
              What truly fuels my passion is collaboration. I love connecting with fellow enthusiasts, exchanging ideas, and working on exciting projects together. Learning is a journey best shared, and I'm ready to embrace the collaborative spirit of the tech community.
              <br /><br />
              So, whether you're here to swap coding stories, brainstorm on a project, or just geek out about the latest tech trends, let's connect! The digital world is vast, and the possibilities are endless.
              <br /><br />
              Let's code, learn, and innovate together. 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
