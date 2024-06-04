import React from 'react'
import ContactContainer1 from '../Components/ContactContainer1'
import ContactContainer2 from '../Components/ContactContainer2'

function Contact() {
  
  return (
    <>
      <div className='w-full h-full'>
        <div className='w-full h-20 text-center my-1 bg-red-20'>
          <h1 className='font-medium text-5xl '>
            Get in Touch
          </h1>
          <p className='text-xl font-light'>Feel Free to Contact me!!</p>
        </div>


        <div className='flex w-full flex-col md:flex-row items-center justify-center md:gap-2 h-5/6 px-8'>
          <div className='md:w-1/2 h-full '>
            <ContactContainer1/>
          </div>
          <div className='w-[85vw] md:w-1/2 h-5/6 rounded-lg md:mb-10 border border-neutral-700'>
          <ContactContainer2/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
