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
      <div className={`w-[90vw] md:w-[62vw] mx-auto  my-5 flex items-center justify-start md:gap-5 gap-3 pl-5 border-b-2 border-neutral-700 ${large ? "h-[32vh] md:h-[25vh] " : "h-44 md:h-[25vh]"}`}
      >

        <div className='h-5/6 rounded-lg' >
          <img src={info?.img || "https://t3.ftcdn.net/jpg/02/54/40/06/360_F_254400622_oCzxHmzDfunQltPTfQIeSn5PHZQyqsMU.jpg"} alt="img"
            className='h-[10vh] md:h-[12vh] rounded-lg m-auto w-[5.2em]' />
        </div>
        <div className='h-full w-full'>
          <div className='md:h-[15vh] py-2 md:mb-0'>
            <h1 className='text-xl md:text-2xl md:font-medium'>
              {info?.name}
            </h1>
            <span className='font-light '>
              {info?.from}
            </span><br />
            <span className='font-light '>
              Issued {info?.issued}
            </span>
          </div>

          <NavLink to={info?.certificateSrc} className='py-1 rounded-xl -mx-1   border-2 flex items-center justify-center gap-1.5 w-[42vw] md:w-[13vw]'
            target='_blank'>
            Show Certificate {show}
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default CertificateBlock
