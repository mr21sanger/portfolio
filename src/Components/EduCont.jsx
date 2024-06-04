import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function EduCont({ details }) {
  const [large, setLarge] = useState(false);

  useEffect(() => {
    if (details?.name.length >= 40) {
      setLarge(true);
    }
    Aos.init({
      offset: 60,
    });
  }, []);

  return (
    <>
      <div
        className={`w-11/12 mx-auto md:h-40 my-5 flex items-center justify-start md:gap-5 gap-3 pl-5 border-b-2 border-neutral-700 ${
          large ? "h-68" : "h-44"
        }`}
      >
        <div className="h-5/6 rounded-lg">
          <img
            src={
              details?.imgSrc ||
              "https://t3.ftcdn.net/jpg/02/54/40/06/360_F_254400622_oCzxHmzDfunQltPTfQIeSn5PHZQyqsMU.jpg"
            }
            alt="img"
            className="h-16 md:h-24 rounded-lg m-auto w-24 md:w-32"
          />
        </div>
        <div className="h-full w-full">
          <div className="md:h-28 py-2 md:mb-0">
            <h1 className="text-xl md:text-2xl md:font-medium">
              {details?.name}
            </h1>

            <span className="font-light text-sm md:text-sm">{details?.affilation}</span>
            <br />
            <span className="font-normal md:text-xl">{details?.education}</span>
            <br />

            <span className="font-light md:text-base">
              {details?.from} to {details?.to}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EduCont;
