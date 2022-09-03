import React from "react";
import { FaVirus } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <FaVirus className="text-red-600 text-4xl animate-bounce" />
      <h5 className="text-red-600 font-bold text-2xl">Loading</h5>
    </div>
  );
};

export default Loading;
