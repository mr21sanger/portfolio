import React from 'react'
import { NavLink } from 'react-router-dom'
import { aboutIcon, contactIcon, projectIcon, skillIcon } from './icons'

function Navbar() {

  const options = [
    {
      id: 0,
      name: "About",
      icon: aboutIcon,
      to: "/"
    },
 
    {
      id: 1,
      name: "Skills",
      icon: skillIcon,
      to: "/skill"
    },
    {
      id: 2,
      name: "Projects",
      icon: projectIcon,
      to: "/project"
    },
    {
      id: 3,
      name: "Contact",
      icon: contactIcon,
      to: "/contact"
    },

  ]


  
  return (
    <>
      <div className='w-[95vw] z-50  md:w-full bg-black md:rounded-none rounded-2xl border-2 md:rounded-t-lg border-neutral-900 h-[9vh] md:h-[10vh] flex  items-center justify-evenly fixed md:static bottom-0.5 '>
        {
          options.map((currElem) => {
            return (
              <NavLink
              to={currElem.to}
              key={currElem.id}
              className={({ isActive }) =>
                `p-2 md:px-5 md:py-1 rounded-lg text-2xl md:text-xl flex gap-2 items-center justify-center ${
                  isActive ? 'bg-white font-semibd text-black' : 'bg-neutral-900'
                }`
              }
            >
                {currElem.icon}<span className='hidden md:block'>{currElem.name}</span>
              </NavLink>
            )
          })
        }
      </div>
    </>
  )
}

export default Navbar
