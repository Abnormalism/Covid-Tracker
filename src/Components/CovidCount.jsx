import React from "react";

const CovidCount = ({ covidTracker }) => {
  const { NewConfirmed, TotalConfirmed, TotalDeaths } = covidTracker;
  return (
    <div className="bottom-0 right-0 absolute w-full max-w-[1000px] h-[6rem] md:h-[7rem] rounded-tl-[2rem] md:rounded-tl-[3rem] bg-gradient-to-r from-red-800 to-red-500 p-4 text-white flex justify-around items-center">
      <div className="activeCases">
        <h4 className="flex items-center justify-center">Global Cases</h4>
        <h6 className="mt-2 text-center">{TotalConfirmed}</h6>
      </div>
      <div className="activeCases">
        <h4>New Cases</h4>
        <h6 className="mt-2 text-center">{NewConfirmed}</h6>
      </div>
      <div className="activeCases">
        <h4>Total Deaths</h4>
        <h6 className="mt-2 text-center">{TotalDeaths}</h6>
      </div>
    </div>
  );
};

export default CovidCount;
