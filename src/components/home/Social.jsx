import React from "react";

const Social = () => {
  // ! change links later
  return (
    <div className="home__social">
      <a
        target="_blank"
        href="https://www.instagram.com/simon.anterpreet/"
        className="home__social-icon"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        target="_blank"
        href="https://linkedin.com/in/simon-chauke-685a9b85"
        className="home__social-icon"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      <a
        target="_blank"
        href="https://github.com/preetsimon"
        className="home__social-icon"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
