import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../index.css";
import { NavLink } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css';

function Project() {
  const type = [
    {
      id: 0,
      name: "Projects",
      project: [
        {
          id: 0,
          name: "E-Manage",
          imgSrc: "/01.png",
          githubUrl: "https://github.com/mr21sanger/E-Manage",
        },
        {
          id: 1,
          name: "Akhbar News WebApp",
          imgSrc: "/02.png",
          githubUrl: "https://github.com/mr21sanger/React_News_App",
        },
        {
          id: 2,
          name: "E-commerce React App",
          imgSrc: "/03.png",
          githubUrl: "https://github.com/mr21sanger/akhbar.github.io",
        },
      ],
    },
    {
      id: 1,
      name: "Mini Projects",
      project: [
        {
          id: 0,
          name: "Currency Converter",
          imgSrc:"/m03.png",
          githubUrl: "https://github.com/mr21sanger/Currency-Convertor",
        },
        {
          id: 1,
          name: "React Weather App",
          imgSrc: "",
          githubUrl:"https://github.com/mr21sanger/React_Weather_WebApp"
        },
        {
          id: 2,
          name: "Akhbar (Html, Css, Js)",
          imgSrc: "",
          githubUrl:"https://github.com/mr21sanger/akhbar.github.io"
        },
       
      ],
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Aos.init({
      offset:"60"
    })
})

  return (
    <>
      <div className="w-full h-full">
        {type.map((currElem) => {
          const { project } = currElem;
          return (
            <div
              key={currElem.id}
              className="w-11/12 m-auto h-[16em] bg-black mt-2 mb-3 rounded-2xl bg-opacity-60 border-4 border-black"
            >
              <h1 className="text-2xl mx-5 mt-2">{currElem.name}</h1>

              <div className="w-11/12 mx-auto h-5/6 z-0">
                <Slider {...settings}>
                  {project?.map((currProj) => {
                    return (
                     
                        <NavLink to={currProj?.githubUrl} target="_blank" className="w-1/3 h-48 border-2 border-neutral-800  rounded-lg bg-neutral-900 bg-opacity-30 mt-2">
                          <div className="w-full rounded-t-lg mx-auto h-[9em]" >
                            <img
                              src={currProj.imgSrc ? currProj.imgSrc : "https://toggl.com/blog/wp-content/uploads/2019/01/simple-project-plan-template-940x563.jpg"}
                              alt=""
                              className="w-full h-full rounded-t-lg object-cover"
                            data-aos="flip-right"/>
                          </div>
                          <div className="w-full mx-auto rounded-b-lg h-10 px-2 py-2 text-lg md:text-2xl ">
                            {currProj.name} -
                          </div>
                        </NavLink>
                     
                    );
                  })}
                </Slider>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Project;
