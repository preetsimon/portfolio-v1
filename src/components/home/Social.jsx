import React from "react";

const Social = () => {
  // ! change links later
  return (
    <div className="home__social">
      <a
        target="_blank"
        href="https://www.instagram.com/"
        className="home__social-icon"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        target="_blank"
        href="https://dribbble.com/"
        className="home__social-icon"
      >
        <i className="uil uil-dribbble"></i>
      </a>
      <a
        target="_blank"
        href="https://github.com/"
        className="home__social-icon"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
