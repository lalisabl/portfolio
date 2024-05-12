import React, { useState } from 'react';
import { FaLaptopCode,FaEarListen,FaJava,FaLinux } from "react-icons/fa6";
import { GrBusinessService } from "react-icons/gr";
import { FaReact,FaGitAlt } from "react-icons/fa";
import ReactCardFlip from 'react-card-flip';
import { DiJavascript1,DiMysql } from "react-icons/di";
import { SiTypescript,SiMongodb,SiTailwindcss,SiGithub,SiCanva } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { TbBrandNodejs,TbBrandSocketIo,TbBrandPython } from "react-icons/tb";
import { BiLogoDjango ,BiLogoAndroid} from "react-icons/bi";
import { IoIosMore } from "react-icons/io";
import { RiFlutterFill} from "react-icons/ri";
import { CgCPlusPlus } from "react-icons/cg";
import { PiFigmaLogoLight } from "react-icons/pi";

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
    <section id="services">
      <div className="container s-container">
        <div className="services-left">
          <div className="flip-btn">
            <button className={`btn front-btn adt${currentCard==='front' ? ' active' : ''}`} onClick={() => handleClick('front')}>
              ADVANTAGE
            </button>
            <button className={`btn back-btn tech${currentCard==='back'?' active':''}`} onClick={() => handleClick('back')}>
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
            <ul className='techs'>
  <li><FaReact className='icon'/></li>
  <li><DiJavascript1 className='icon'/></li>
  <li><SiTypescript className='icon'/></li>
  <li><ImHtmlFive className='icon'/></li>
  <li><TbBrandNodejs className='icon'/></li>
  <li><SiMongodb className='icon'/></li>
  <li><BiLogoDjango className='icon'/></li>
  <li><TbBrandSocketIo className='icon'/></li>
  <li><SiTailwindcss className='icon'/></li>
  <li><SiGithub className='icon'/></li>
  <li><FaGitAlt className='icon'/></li>
  <li><TbBrandPython className='icon'/></li>
  <li><RiFlutterFill className='icon'/></li>
  <li><DiMysql className='icon'/></li>
  <li><CgCPlusPlus className='icon'/></li>
  <li><FaJava className='icon'/></li>
  <li><BiLogoAndroid className='icon'/></li>
  <li><PiFigmaLogoLight className='icon'/></li>
  <li><SiCanva className='icon'/></li>
  <li><FaLinux className='icon'/></li>
  <li><IoIosMore className='icon'/></li>
</ul>
 </div>
          </ReactCardFlip>
        </div>
        <div className="services-right">
          <div>
          <h2>SERVICES</h2>
          <h3 className='mini-header'>OFFER-SUMMARY</h3>
          <p>As an experienced web developer I have implemented a variety of projects in the past. 
            This allows me to advise you on the most efficient solution for your specific requirements.</p>
          </div>
         <div>
          <h3>WHAT DO YOU NEED?</h3>
          <ul className='lists'>
            <li>
            <FaEarListen className='svg'/>
            <span>Individual website optimized for all devices</span>
            </li>
            <li>
            <FaEarListen className='svg'/>
              <span>Content Management System for own content management</span>
            </li>
            <li >
            <FaEarListen className='svg'/>
            <span>Databases for the management of e.g. customer data</span>
            </li>
            <li>
            <FaEarListen className='svg'/>
            <span>Connection to external APIs</span>
            </li>
            <li>
            <FaEarListen className='svg'/>
            <span>Search engine optimization for Google</span>
            </li>
            <li>
            <FaEarListen className='svg'/>
            <span>Search engines and social media marketing</span>
            </li>
          </ul>
         </div>
          <div>    
          <p className='special'>Do you have any additional special requirements? No problem, let&apos;s talk!
          </p>
            <button className='btn primary'>Contact</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
