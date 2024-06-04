import React, { useState } from 'react'
import ImgContainer from './ImgContainer'
import { FaLinkedin, FaGithub, FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";

import { SiGmail } from "react-icons/si";
import "../Components/css/responsive.css"
import { arrow } from './icons';



function Box() {

  const [value, setValue] = useState(false)

  const contact = [
    {
      id: 0,
      name: "LinkedIn",
      profileUrl: "https://www.linkedin.com/in/shiwang-sanger-470750222/",
      icon: <FaLinkedin />
    },
    {
      id: 1,
      name: "Github",
      profileUrl: "https://github.com/mr21sanger",
      icon: <FaGithub />

    }
  ]


  const otherInfo = [
    {
      id: 0,
      name: "Location",
      icon: <FaLocationDot />,
      answer: "Faridabad",
      href: "https://www.google.com/maps?q=Faridabad"
    },
    {
      id: 1,
      name: "Phone",
      icon: <FaPhoneSquareAlt />,
      answer: "9891061356",
      href: "tel:9891061356"
    },
    {
      id: 2,
      name: "Gmail",
      icon: <SiGmail />,
      answer: "shiwang21sanger@gmail.com",
      href: "mailto:shiwang21sanger@gmail.com"
    }
  ]


  const handleClick = () => {
    setValue(!value)
  }
  return (
    <>
      <div className={`md:my-0 mt-3 w-11/12 md:w-1/5 flex md:flex-col items-center md:justify-center md:p-0 mx-auto md:gap-0 rounded-lg bg-neutral-900 text-center 
       transition-all duration-1000
       ${value ? "afterHeight flex-col py-5 gap- " : "height gap-5 px-5 "}
       `}>
        <ImgContainer value={value} />

        {/* NAME */}
        <div className='ml-2'>
          <div className={` md:text-3xl md:py-2 text-gray-100
          ${value ? "text-3xl mt-1" : "text-xl"}`}>
            Shiwang Sanger
          </div>

          {/* PROFFESSION */}
          <div className={`md:text-xl font-light text-gray-100
           ${value ? "text-xl" : "text-lg"}`}>
            FrontEnd Developer
          </div>
        </div>

        <div className='fixed right-6 top-5 visible md:hidden'>
          <button className={`p-2 rounded-full bg-neutral-950 transition-all duration-700
          ${value ? "rotate-180" : "rotate-0"}
          `}
            onClick={() => handleClick()}><span className="text-3xl font-bold">{arrow}</span></button>
        </div>

        {/* PROFILES */}
        <div className={`md:block md:h-1/2
        ${value ? "block ml-0.5" : "hidden"}`}>
          <div className='w-11/12 h-20 mx-auto md:my-2 flex gap-2 items-center justify-center'>
            {
              contact.map((currElem) => {
                return (
                  <a
                    href={currElem.profileUrl}
                    key={currElem.id}
                    className='w-14 h-14 rounded-lg text-4xl drop-shadow-2xl border-2 border-black flex items-center justify-center'>
                    {currElem?.icon}
                  </a>
                )
              })
            }
          </div>

          {/* OTHER INFORMATION */}
          <div className='w-full md:w-5/6 h-2/3  rounded-lg mx-auto md:border-4 border-black '>
            {
              otherInfo.map((currElem) => {
                return (
                  <a href={currElem?.href}
                    target='_blank'
                    key={currElem.id}
                    className='h-14 mt-2 rounded-md mx-auto w-11/12 flex hover:scale-105 border border-gray-400 drop-shadow-2xl hover:border-neutral-700 transition-all duration-150'>
                    <div
                      className='bg-neutral-950 w-16 h-full text-3xl font-thin flex items-center justify-center rounded-l-lg'>
                      {currElem.icon}
                    </div>
                    <div
                      className='text-left text-xl px-2 w-4/6 leading-4 text-gray-200'>
                      <div className='font-normal text-lg'>
                        {currElem.name}
                      </div>
                      <div className='font-light h-'>
                        <p className='text-ellipsis overflow-hidden whitespace-nowrap'>
                          {currElem.answer}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Box
