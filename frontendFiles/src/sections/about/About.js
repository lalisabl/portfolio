/* eslint-disable react/no-unescaped-entities */
import './about.css';
import { HiDownload } from 'react-icons/hi';
import photo from '../../assets/images/lalis.jpg';
import CV from '../../assets/my_cv.pdf';
import data from './data';
import Card from '../../components/Card';

function about() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <img src={photo} alt="my_photo" />
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            I'm dedicated to refining my skills and crafting solutions that not
            only meet but exceed my clients' needs, leaving a positive impact.
            My passion lies in building projects that resonate with clients,
            merging functionality with user satisfaction.
          </p>
          <p>
            Pursuing a Software Engineering degree at Jimma University, I'm
            passionate about crafting functional web applications and exploring
            artificial intelligence. Thriving in collaborative teams as a
            full-stack developer, I prioritize cooperation and teamwork. My
            dedication to continuous learning ensures a thorough understanding
            of concepts, guaranteeing excellence in every project.I am ready to
            make meaningful contributions in the dynamic landscape of
            technology.
            <br />
            To explore more about me feel free to download my CV below
          </p>
          <a href="#projects" className="btn primary">
            My Works
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
