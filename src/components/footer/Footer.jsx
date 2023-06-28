import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"></h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
        </ul>

        <div className="footer__social">      <a
        target="_blank"
        href="https://www.instagram.com/lastmanonvenus/"
        className="footer__social-link"
      >
        <i className="bx bxl-instagram"></i>
      </a>
      <a
        target="_blank"
        href="https://linkedin.com/in/simon-chauke-685a9b85"
        className="footer__social-link"
      >
        <i className="bx bxl-linkedin"></i>
      </a>
      <a
        target="_blank"
        href="https://github.com/preetsimon"
        className="footer__social-link"
      >
        <i className="bx bxl-github"></i>
      </a></div>

         <span className='footer__copy'>&#169; Simon Chauke</span>
      </div>
    </footer>
  )
}

export default Footer