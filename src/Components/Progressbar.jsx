import React, { useEffect } from 'react'
import '../Components/css/progress.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

function Progressbar({ skillInfo }) {
  useEffect(() => {
    Aos.init({
      offset:"60"
    })
})
return (
  <>
    <div className='mb-3 h-16 md:h-20 pt-3 w-11/12 rounded-xl mx-auto bg-neutral-900 '>
      <div className='flex items-end justify-between w-11/12 mx-auto'>
        <h1 className=' text-lg md:text-xl flex items-center gap-2'><span className=' text-2xl md:text-4xl'>{skillInfo?.icon}</span>{skillInfo
          ?.name}</h1>
        <p className='text-lg md:text-xl'>{skillInfo?.progress}</p>
      </div>
      <div className='w-11/12 h-1.5 bg-black my-1 rounded-xl mx-auto'>
        <div className='h-full bg-white rounded-xl' style={{
          width: `${skillInfo?.progress}`
        }} data-aos="flip-left">
        </div>
      </div>
    </div>
  </>
)
}

export default Progressbar
