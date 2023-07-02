import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {/* insert demo links later ---------------------------------------------------------------*/}
      {
        item.demo && 
        <a href={item.demo} className="work__button demo" target="_blank" rel="noopener noreferrer">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      }
     

      <a href={item.source} className="work__button" target="_blank" rel="noopener noreferrer">
        Source <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
