import React, { useEffect, useState } from 'react'
import Progressbar from './Progressbar'

function SkillCont({ info }) {

  const [skill, setSkill] = useState(null)
  useEffect(() => {
    setSkill(info?.mySkills)
  }, [skill, info])


  return (
    <>
      <div className='w-full h-auto mx-auto  bg-opacity-60 rounded-2xl border-4 border-black bg-black skillAnimate'>
        <div className='w-full h-12 py-2 md:mb-2'>
          <h1 className='font-medium text-xl  md:text-2xl px-3 flex items-center gap-2 mx-3'>
            <span className='text-2xl md:text-3xl'>
              {info?.icon}
            </span>
            {info?.name} :-
          </h1>
        </div>

        <div className='w-full h-full'>
          {
            skill && skill.map((currElem) => {
              return (
                <Progressbar skillInfo={currElem} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default SkillCont
