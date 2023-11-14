/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import Card from '../../components/Card';

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="project__photo" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a href={project.github} className="btn primary" target="blank">
          Github
        </a>
      </div>
    </Card>
  );
};
export default Project;
