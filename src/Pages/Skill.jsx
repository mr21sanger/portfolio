import React from 'react'
import SkillCont from '../Components/SkillCont'
import { BackEnd, api, css, frontend, html, javascript, mongo, nodejs, python, react, tailwind } from '../Components/icons'

function Skill() {

  const skill = [{
    id: 0,
    name: "FrontEnd Development",
    icon: frontend,
    mySkills: [{
      id: 0,
      name: "HTML",
      icon: html,
      progress: "85%",
    }, {
      id: 1,
      name: "CSS",
      icon: css,
      progress: "90%",
    }, {
      id: 2,
      name: "JavaScript",
      icon: javascript,
      progress: "80%",
    }, {
      id: 3,
      name: "ReactJs",
      icon: react,
      progress: "80%",
    }, {
      id: 3,
      name: "Tailwind CSS",
      icon: tailwind,
      progress: "75%",
    },
    ]
  },
  {
    id: 1,
    name: "BackEnd Development",
    icon: BackEnd,
    mySkills: [{
      id: 0,
      name: "NodeJs",
      icon: nodejs,
      progress: "65%",
    }, {
      id: 1,
      name: "ExpressJS",
      icon: nodejs,
      progress: "60%",
    }, {
      id: 2,
      name: "MongoDB",
      icon: mongo,
      progress: "80%",
    }, {
      id: 3,
      name: "APIs",
      icon: api,
      progress: "75%",
    }, {
      id: 3,
      name: "Python",
      icon: python,
      progress: "75%",
    },
    ]

  }]

  return (
    <>
      <div className='w-11/12 gap-5 items-center mx-auto my-4 md:h-5/6 grid grid-cols-1 md:grid-cols-2'>
        {
          skill.map((currElem) => {
            return (
              <SkillCont info={currElem} key={currElem.id} />
            )
          })
        }
      </div>
    </>
  )
 
}

export default Skill
