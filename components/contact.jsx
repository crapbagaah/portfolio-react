import React from 'react'

const Contact = () => {
  return (
    <div>
      <div name='contact' className='w-full min-h-screen bg-[#06010f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/03ce4475-b9d3-4b1e-858a-bdc12f6d4161" className='flex flex-col max-w-[600px] w-full'>
            <div className='sm:pt-16 md:pt-32 lg:pt-48'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Get in touch.</p>
            </div>
            <input className='bg-transparent border border-purple-500 p-2' type="text" placeholder='Name' name="name" />
            <input className='my-4 p-2 bg-transparent border border-purple-500' type="email" placeholder='Email' name="email" />
            <textarea className='bg-transparent border border-purple-500 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-purple-500 hover:border-purple-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Talk.</button>
        </form>
      </div >
        

        <div className='w-full h-6 bg-[#1d1034] flex justify-center items-center p-4'>
          <p className='text-white'>© Developed by Saheli</p>
        </div>
    </div>
    
    
  )
}

export default Contact