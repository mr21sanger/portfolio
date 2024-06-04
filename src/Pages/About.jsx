import React from 'react'
import CertificateBlock from '../Components/CertificateBlock'
import { certificateIcon, schoolIcon } from '../Components/icons'
import EduCont from '../Components/EduCont'

function About() {


  const certificates = [
    {
      id: 0,
      name: "Introduction to Web Development with HTML, CSS, JavaScript",
      certificateSrc: "https://www.coursera.org/account/accomplishments/verify/GKJR79W3MK9K",
      from: "IBM (Coursera)",
      issued: "Jan 2024",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg"
    },
    {
      id: 1,
      name: "Non-Conventional Energy Resources",
      certificateSrc: "https://internalapp.nptel.ac.in/NOC/NOC24/SEM1/Ecertificates/127/noc24-ge24/Course/NPTEL24GE24S115430102930718925.pdf",
      from: "NPTEL",
      issued: "Apr 2024",
      img: "https://www.ea2.unicamp.br/wp-content/uploads/2017/06/Nptel_logo.jpg"
    },
    {
      id: 2,
      name: "Environment and Development",
      certificateSrc: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/109/noc23-hs133/Course/NPTEL23HS133S53550180220375010.pdf",
      from: "NPTEL",
      issued: "Oct 2023",
      img: "https://www.ea2.unicamp.br/wp-content/uploads/2017/06/Nptel_logo.jpg"

    },
  ]


  const eduDetails = [
    {
      id: 0,
      imgSrc: "/satyug.png",
      name: "Satyug Darshan Institute Of Engineering And Technology",
      education: "Bachelor's Degree, Computer Science",
      affilation: "Affilated to J.C. bose university of Science and Technology",
      from: "October-2021",
      to: "October-2025"
    },
    {
      id: 1,
      imgSrc: "/arya.png",
      name: "Arya Vidya Mandir Sr. Sec. School",
      education: "12th (Non-Medical)",
      affilation: "Affilated to Central Board of Secondary Education (CBSE)",
      from: "March-2020",
      to: "April-2021"
    },
    {
      id: 2,
      imgSrc: "/arya.png",
      name: "Arya Vidya Mandir Sr. Sec. School",
      education: "10th",
      affilation: "Affilated to Central Board of Secondary Education (CBSE)",
      from: "April-2018",
      to: "March-2019"
    },
    
  ]

  return (
    <>
      <div className='h-full w-full md:px-14  mx-auto overflow-hidden  hover:md:overflow-y-auto scrollbar-hover '>
        <p className='text-xl text-justify px-5 pt-5 font-sans leading-[1.5em] md:leading-[2.5vw]' >
          Hey there! I'm a 20 year Old,
          Eager and dynamic Computer Science student from Satyug Darshan Institute of
          Engineering and Technology, Faridabad, with a foundational understanding of React, HTML, Node.js, Python, and JavaScript. Proficient in web development and eager to leverage skills in a practical setting. Comfortable in English and Hindi, ready to contribute to innovative projects and continue professional development.
        </p>
        <p className='text-xl text-justify p-5 font-sans leading-[2.5vw] hidden md:block ' >
          I'm passionate about technology and always looking to learn something new. Whether it's through my coursework, or hands-on projects I'm always up for a challenge. I really enjoy exploring new technologies, working on personal projects.
        </p>

        <div className='w-full h-auto mb-6' >
          <h1 className='mx-5 text-3xl md:mx-0 md:text-4xl my-5 flex items-center gap-2'>
            {certificateIcon} Certifications -
          </h1>

          {certificates.map((currElem) => {
            return (
              <CertificateBlock key={currElem.id} info={currElem} />
            )
          })
          }
        </div>


        <div className='w-full h-auto mb-6' >
          <h1 className='mx-5 text-3xl md:mx-0 md:text-4xl my-5 flex items-center gap-2'>
            {schoolIcon} Education-
          </h1>

          {eduDetails.map((currElem) => {
            return (
              <EduCont details = {currElem}/>
            )
          })
          }

        </div>
  
      </div>
    </>
  )
}

export default About
