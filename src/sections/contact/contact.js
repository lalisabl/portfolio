/* eslint-disable jsx-a11y/label-has-associated-control */
import './contact.css';
import contacts from './data';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In touch </h2>
      <div className="container contact__container">
        <div className="contact__socials">
          <p>shoot me a message via any of the links below</p>
          <div className="contact__links">
            {contacts.map((contact) => (
              <a key={contact.id} href={contact.link} target="blank">
                {contact.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="contact__message">
          <form>
            <div className="form__section">
              <label>Name</label>
              <br />
              <input type="text" name="Name" required className="take__input" />
            </div>
            <div className="form__section">
              <label>Email</label>
              <br />
              <input
                type="text"
                name="Email"
                required
                className="take__input"
              />
            </div>
            <div className="form__section">
              <label>Message</label>
              <br />
              <textarea
                type="text"
                name="Message"
                required
                className="take__input"
                width="320px"
              />
            </div>
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
