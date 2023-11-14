import { useState } from 'react';
import './portfolio.css';
import ProjectsCategories from './projectCategories';
import Projects from './projects';
import data from './data';

const portfolio = () => {
  const [projects, setProjects] = useState(data);
  const categories = data.map((item) => item.category);
  const uniqueCateg = ['all', ...new Set(categories)];
  const categoryFilterHandler = (category) => {
    if (category === 'all') {
      setProjects(data);
      return;
    }
    const filterdProjects = data.filter(
      (project) => project.category === category,
    );
    setProjects(filterdProjects);
  };
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p>
          A UI/UX design project that centers on creating an engaging and
          user-friendly experience for your digital product A UI/UX design
          project that centers on creating an engaging and user-friendly
          experience for your digital product t
        </p>
        <div className="container portfolio__container">
          <ProjectsCategories
            categories={uniqueCateg}
            onFilterProjects={categoryFilterHandler}
          />
          <Projects Projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default portfolio;
