import React from 'react'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6'
import { GiMailShirt } from 'react-icons/gi'
import { SiGmail } from 'react-icons/si'
import { NavLink } from 'react-router-dom'

function ContactContainer1() {
  const otherInfo = [
    {
      id: 0,
      name: "LinkedIn",
      icon: <FaLinkedin />,
      answer: "Shiwang Sanger",
      href: "https://www.linkedin.com/in/shiwang-sanger-470750222/"
    }, {
      id: 1,
      name: "Github",
      icon: <FaGithub />,
      answer: "mr21sanger",
      href: "https://github.com/mr21sanger"
    },
    {
      id: 2,
      name: "Phone",
      icon: <FaPhoneSquareAlt />,
      answer: "9891061356",
      href: "tel:9891061356"
    },
    {
      id: 3,
      name: "Gmail",
      icon: <SiGmail />,
      answer: "shiwang21sanger@gmail.com",
      href: "mailto:shiwang21sanger@gmail.com"
    }
  ]
  return (
    <>
      <div className='p-5 w-full h-full'>
        <h1 className='text-3xl'>
          I'd Love to hear from you.
        </h1>
        <p className='text-lg font-light'>Leave a message, and I'll get back to you soon as soon as possible</p>

        <div className='w-full h-5/6 '>

          {
            otherInfo.map((currElem) => {
              return (
                <a href={currElem?.href} key={currElem.id}
                  className='flex font-light my-4  items-center gap-2 underline text-xl'
                >
                  <span className='text-3xl'>{currElem.icon}</span> {currElem.answer}</a>
              )
            })
          }

          <div className='w-full h-1/2 border-t py-2'>
            <h1 className='text-3xl mb-4'>
              Download my Resume...
            </h1>
            <a className={'bg-black p-3 rounded-lg hover:ring-1 ring-white'} href={"public/ShiwangSanger_Resume.pdf"} download={true}>
              Download Resume
            </a>
          </div>
        </div>


      </div>
    </>
  )
}

export default ContactContainer1
