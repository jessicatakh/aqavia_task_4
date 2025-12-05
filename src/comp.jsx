import React, { useState } from "react";
import "./comp.css";

export default function Comp( ) {

  const cards = [
    { id: 1, title: "1" },
    { id: 2, title: "2" },
    { id: 3, title: "3" },
    { id: 4, title: "4" },
    { id: 5, title: "5" },
        { id: 9, title: "9" },
    { id: 7, title: "8" }
  ];


         const [centerIndex, setCenterIndex] = useState(0);

  const moveRight = () => {
    setCenterIndex((prev) => (prev + 1) % cards.length);
  };
const moveLeft = () => {
    setCenterIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

        const getPosition = (index) => {
    const diff = (index - centerIndex + cards.length) % cards.length;

    if (diff === 0) return "center";    
    if (diff === 1) return "right";      
    if (diff === cards.length - 1) return "left";
    return "hidden";                     
  };

  return (
    <div className="wrapper">



      <div className="track">
        {cards.map((card, i) => (
          <div key={card.id} className={`card ${getPosition(i)}`}>
             <span className="card-text">{card.title}</span>
          </div>
        ))}
      </div>

      {/* <button className="btn" onClick={moveRight}>▶</button> */}
      <div className="slider-buttons">
  <button className="nav-btn" onClick={moveLeft}>‹</button>
  <button className="nav-btn" onClick={moveRight}>›</button>
</div>
    </div>
  );
}

