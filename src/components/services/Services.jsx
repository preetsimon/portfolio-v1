import React, { useState } from "react";
import "./services.css";

const Services = () => {
const [toggleState, setToggleState] = useState(0);

const toggleTab = (index) => {
    setToggleState(index);
}
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Web <br/> Designer</h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(1)}>
            View More <i className="uil-arrow-right services__button-icon" ></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i  onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">UX/UI Designer</h3>
              <p className="services__modal-description">
                My technical skills combined with my enthusiasm for learning
                will make me an asset to your team. I am excited about the
                opportunity to work on challenging projects and collaborate with
                experienced developers.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop User Interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    UX element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    API security: preventing or mitigating attacks.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Front-End <br/> Testing/QA</h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(1)}>
            View More <i className="uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Quality Asurance/Testing</h3>
              <p className="services__modal-description">
                My technical skills combined with my enthusiasm for learning
                will make me an asset to your team. I am excited about the
                opportunity to work on challenging projects and collaborate with
                experienced developers.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop User Interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    UX element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    API security: preventing or mitigating attacks.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Penetration <br/> Testing</h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(1)}>
            View More <i className="uil-arrow-right services__button-icon" ></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i  onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Penetration Testing</h3>
              <p className="services__modal-description">
                My technical skills combined with my enthusiasm for learning
                will make me an asset to your team. I am excited about the
                opportunity to work on challenging projects and collaborate with
                experienced developers.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop User Interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    UX element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    API security: preventing or mitigating attacks.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;