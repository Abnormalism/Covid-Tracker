import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const SocialMedia = ({ readMore }) => {
  return (
    <div
      className={`text-3xl absolute bottom-48 md:bottom-10 space-y-5 md:space-y-0 md:flex left-7 -z-10 md:space-x-10 md:ml-[4rem] ${
        readMore ? "blur-sm" : ""
      }`}
    >
      <FaFacebookF />
      <FaTwitter />
    </div>
  );
};

export default SocialMedia;
