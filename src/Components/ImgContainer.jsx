import React, { useEffect, useState } from 'react'

function ImgContainer({value}) {

  return (
    <>
      <div className='md:h-1/3 md:py-3 transition-all duration-150'>

        <div className={`md:w-48 md:h-48 rounded-full bg-black mx-auto flex items-center justify-center 
        ${value? "w-48 h-48":"w-16 h-16"}
        `}>

          {/* IMAGE DIV********** */}

          <div className={`md:w-44 md:h-44 rounded-full
          ${value? "w-44 h-44": "w-14 h-14"}
          `}>
            <img src="https://p.naukimg.com/jphotoV1/l444:LukcMTq/3AQcHL2zUwgEbpkywHspa8w6zyZwhr9ozmcdFB3cp4B3xzMN?v=k" alt=""
              className='w-full h-full rounded-full object-cover object-top' />
          </div>

        </div>
      </div>
    </>
  )
}

export default ImgContainer
