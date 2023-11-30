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
            <p> Hey there! I'm Saheli, a passionate tech enthusiast on a journey to turn digital dreams into reality. My coding adventure kicked off with the trio of HTML, CSS, and JavaScript, driven by a desire to craft captivating websites.
              <br /><br />
              As the horizon of possibilities expanded, I delved into the world of modern web development, harnessing the power of frameworks like ReactJS, and embracing the sleek efficiency of Tailwind CSS and Bootstrap. TypeScript and the Context API also caught my attention, prompting me to dive deeper into their realms.
              <br /><br />
              Beyond the lines of code, I've set my sights on the realm of cybersecurity. Exploring Capture The Flag (CTF) challenges was fascinating, and I'm eager to delve deeper into it.
              <br /><br />
              What fuels my passion even more? The prospect of collaboration. I'm not just here to learn; I'm eager to connect with fellow enthusiasts, exchange ideas, and embark on exciting projects. Learning is a journey best shared, and I'm ready to dive into the collaborative spirit of the tech community.
              <br /><br />
              So, whether you're here to swap coding stories, brainstorm on a project, or just geek out about the latest tech trends, let's connect! The digital frontier is vast, and the possibilities are endless.
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
