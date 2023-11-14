import './faqs.css';
import faqs from './data';
import FAQ from './FAQ';

const faq = () => {
  return (
    <section id="faqs">
      <h2>Frequantly Asked Question</h2>
      <p>
        Here are some question I usually get.Click to toggle the answer, and if
        you still have some more questions,shoot me a message from the contact
        section!
      </p>
      <div className="container faqs__container">
        {faqs.map((fqa) => (
          <FAQ key={fqa.id} fqa={fqa} />
        ))}
      </div>
    </section>
  );
};
export default faq;
