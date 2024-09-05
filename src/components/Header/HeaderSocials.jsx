import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/muhammad-hamza-waqar-ali/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/MuhammadHamzaWaqar1317"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
