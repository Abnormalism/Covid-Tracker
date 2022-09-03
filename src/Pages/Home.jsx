import React from "react";
import { useState, useEffect } from "react";
import { FaVirus } from "react-icons/fa";
import CovidCount from "../Components/CovidCount";

// Variables
import { paragraph, imgUrl } from "../data";

// Components
import SocialMedia from "../Components/SocialMedia";
import Loading from "../Components/Loading";
import { useGlobalContext } from "../Context";

const Home = () => {
  const { whatCountry, isLoading, covidTracker } = useGlobalContext();

  // useState
  const [readMore, setReadMore] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Variables
  const screenWidth = window.innerWidth;

  // onClick
  const showReadMore = () => {
    setReadMore(!readMore);
    setIsLargeScreen(!isLargeScreen);
  };

  // Data Fetch

  useEffect(() => {
    if (screenWidth > 1000) {
      setIsLargeScreen(true);
    }
  }, []);

  if (!isLoading) {
    return (
      <section className="h-screen flex flex-col text-red-600 overflow-hidden">
        <nav className="h-[4rem] flex items-center p-4 justify-around text-red-600">
          <FaVirus className="text-3xl" />
          <h1 className="text-xl font-bold">{`Covid - 19 ${whatCountry} Update`}</h1>
        </nav>
        <div className="mt-3 p-4 h-[calc(100vh-4rem)] relative">
          <div className="imgContainer absolute -z-10 bottom-32 md:translate-y-[40%] md:bottom-[50%] md:right-10">
            <img
              src={`${imgUrl}`}
              alt=""
              className={`${readMore ? "blur-md" : ""} md:h-[60vh]`}
            />
          </div>
          <div className="textContainer md:w-[45%] md:ml-10">
            <h2 className="uppercase font-semibold text-slate-800 text-xl md:text-2xl tracking-tighter">
              global pandemic
            </h2>
            <h1 className="uppercase text-3xl md:text-4xl font-bold">
              Covid - 19
            </h1>
            <p className="text-sm md:text-md text-justify text-slate-800 leading-7 mt-3 font-semibold">
              {isLargeScreen ? paragraph : paragraph.substring(0, 150)}
              <button
                className={`hover:font-bold ml-2 text-lg md:hidden ${
                  readMore ? "text-white" : "text-red-600"
                }`}
                onClick={showReadMore}
              >
                {readMore ? "Show Less" : "Read More"}
              </button>
            </p>
          </div>
          <SocialMedia readMore={readMore} />
          <CovidCount covidTracker={covidTracker} />
        </div>
      </section>
    );
  } else {
    return <Loading />;
  }
};

export default Home;
