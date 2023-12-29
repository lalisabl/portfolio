import './skills.css';
import faqs from './data';
import FAQ from './Skill';

const faq = () => {
  return (
    <section id="faqs">
      <h2>Skills</h2>
      <p>Here are are my skills</p>
      <div className="container faqs__container">
        {faqs.map((fqa) => (
          <FAQ key={fqa.id} fqa={fqa} />
        ))}
      </div>
    </section>
  );
};
export default faq;
