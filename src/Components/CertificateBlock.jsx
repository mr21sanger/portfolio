import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { show } from './icons'
import Aos from 'aos'
import "aos/dist/aos.css"

function CertificateBlock({ info }) {

  const [large, setLarge] = useState(false)

  useEffect(() => {
    if (info?.name.length >= 40) {
      setLarge(true)
    }
    Aos.init();
  }, [])


  return (
    <>
      <div className={`w-11/12 mx-auto md:h-44 my-5 flex items-center justify-start md:gap-5 gap-3 pl-5 border-b-2 border-neutral-700 ${large ? "h-52" : "h-44"}`}
      >

        <div className='h-5/6 rounded-lg' >
          <img src={info?.img || "https://t3.ftcdn.net/jpg/02/54/40/06/360_F_254400622_oCzxHmzDfunQltPTfQIeSn5PHZQyqsMU.jpg"} alt="img"
            className='h-16 md:h-24 rounded-lg m-auto w-24' />
        </div>
        <div className='h-full w-full'>

          <div className='md:h-28 py-2 md:mb-0'>
            <h1 className='text-xl md:text-2xl md:font-medium'>
              {info?.name}
            </h1>
            <span className='font-light md:text-base'>
              {info?.from}
            </span><br />
            <span className='font-light md:text-base '>
              Issued {info?.issued}
            </span>
          </div>

          <NavLink to={info?.certificateSrc} className='py-1.5 rounded-2xl px-2 -mx-1 md:px-5  border-2 flex items-center justify-center gap-1.5 w-[42vw] md:w-[11.8vw]'
            target='_blank'>
            Show Certificate {show}
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default CertificateBlock
