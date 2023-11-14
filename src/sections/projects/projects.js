import Project from './Project';
const projects = ({ Projects }) => {
  return (
    <div className="portfolio__projects">
      {Projects.map((item) => (
        <Project key={item.id} project={item} />
      ))}
    </div>
  );
};

export default projects;
