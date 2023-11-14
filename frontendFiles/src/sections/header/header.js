/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import data from './data';
import myphoto from '../../assets/images/lalis.jpg';
import './header.css';

const header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={myphoto} alt="my_photo" />
        </div>
        <h3>Hey, I'm a Full Stack Web Developer</h3>
        <p>
          Unlock the potential of your dream website or web app with a single
          click! Share your project's requirements details with me, and I'll
          create a modern, mobile-responsive, high-performance website just for
          you.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#projects" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a href={item.link} target="_blank">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default header;
