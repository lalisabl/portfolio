import React from 'react';
import data from "./dataDemo"; // Corrected import statement for data
import "./demo.css"; // Assuming this file contains your CSS styles

const Demo = () => {
  return (
    <section id="project">
      <h2>Projects</h2>
      {data.map(project => (
        <div key={project.id} className="container project-container">
          <div className="left">
            <h3 className="name">{project.name}</h3>
            <h4 className="title">{project.title}</h4>
            <p className='desc'>{project.desc1}</p>
            <p className='desc'>{project.desc2}</p>
            <ul className="techUsed">
  {project.techUsed.map((tech, techIndex) => (
    <li className='icons'>{tech}</li>
  ))}
</ul>
            <p className='desc'>{project.desc3}</p>
            <a href={project.github} className="btn primary">GitHub Link</a>
          </div>
          <div className="right">
            <img src={project.image} alt={project.name} className="project-img" />
          </div>
        </div>
      ))}
     <div className='btn--container'>
      <button className='btn more-btn'>More Projects</button>
     </div>
    </section>
  );
};

export default Demo;
