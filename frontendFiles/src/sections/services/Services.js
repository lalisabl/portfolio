import React, { useState } from 'react';
import { FaLaptopCode } from "react-icons/fa6";
import { GrBusinessService } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import ReactCardFlip from 'react-card-flip';
import './services.css';

const Services = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState('front'); // Track which card is currently shown

  const handleClick = (card) => {
    if (currentCard !== card) {
      setIsFlipped(!isFlipped);
      setCurrentCard(card);
    }
  };

  return (
    <section id="section">
      <div className="container s-container">
        <div className="services-left">
          <div className="flip-btn">
            <button className="btn front-btn" onClick={() => handleClick('front')}>
              ADVANTAGE
            </button>
            <button className="btn back-btn" onClick={() => handleClick('back')}>
              TECHNOLOGY STACK
            </button>
          </div>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="flip flip-front">
              <div className='front-el el-1'>
                <div className='icon'>
                  <FaLaptopCode/>
                </div>
                <div>
                  <h3>Your Professional Website</h3>
                  <p>Get your website done by a trained professional with plenty of project experience!</p>
                </div>
              </div>
              <div className='front-el el2'>
                <div className='icon'>
                  <GrBusinessService/>
                </div>
                <div>
                  <h3>One-stop service</h3>
                  <p>If you wish, I am ready to organize the entire project from the first concept through the design phase to the finished website and beyond!</p>
                </div>
              </div>
              <div className='front-el'>
                <div className='icon'>
                  <FaReact/>
                </div>
                <div>
                  <h3>Modern Technologies</h3>
                  <p>You want an impressive website that looks great on any device? Well, you have come to the right place!</p>
                </div>
              </div>
            </div>
            <div className="flip flip-back">
              <div className='techs'>first row of list of techs</div>
              <div className='techs'>second row of list of techs</div>
            </div>
          </ReactCardFlip>
        </div>
        <div className="services-right">
          <h2>SERVICES</h2>
          <h3>OFFER-SUMMARY</h3>
          <p>As an experienced web developer, I have implemented a variety of projects in the past. This allows me to advise you on the most efficient solution for your specific requirements.</p>
          <h3>WHAT DO YOU NEED?</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
