import React from "react";
import { useState, useEffect } from "react";
import { FaVirus } from "react-icons/fa";
import CovidCount from "../Components/CovidCount";

import SocialMedia from "../Components/SocialMedia";
import Loading from "../Components/Loading";

const Home = () => {
  const paragraph =
    "Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age.";
  const imgUrl =
    "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlydXN8ZW58MHx8MHx8&w=1000&q=80";
  const url = "https://api.covid19api.com/summary";
  const [readMore, setReadMore] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [covidTracker, setCovidTracker] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const screenWidth = window.innerWidth;
  const showReadMore = () => {
    setReadMore(!readMore);
    setIsLargeScreen(!isLargeScreen);
  };

  const fetchData = async () => {
    const data = await fetch(url);
    const response = await data.json();
    const { Global } = response;
    setCovidTracker(Global);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();

    if (screenWidth > 1000) {
      setIsLargeScreen(true);
    }
  }, []);

  if (!isloading) {
    return (
      <section className="h-screen flex flex-col text-red-600 overflow-hidden">
        <nav className="h-[4rem] flex items-center p-4 justify-around text-red-600">
          <FaVirus className="text-3xl" />
          <h1 className="text-xl font-bold">Covid-19 Global Update</h1>
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
