import React  from 'react'

function Box2({children}) {
  return (
    <>
      <div className='bg-neutral-900 w-11/12 md:w-3/4 rounded-lg flex md:items-center justify-end md:justify-normal md:flex-col flex-col-reverse md:mr-5 relative height_box2 mb-16 md:mb-0'>
        {children}   
      </div>
    </>
  )
}

export default Box2
