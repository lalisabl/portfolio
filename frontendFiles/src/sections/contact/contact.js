/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import './contact.css';
import axios from 'axios';
import contacts from './data';

const Contact = () => {
  const [feedback, setFeedback] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popUpContent, setPopupContent] = useState('');
  const handleInputChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:3001/api/v1/feedback', feedback)
      .then((res) => {
        setShowPopup(true);
        setPopupContent(
          `Success! Your message has been received,${res.data.data.userName}`,
        );
        setFeedback({});
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
  useEffect(() => {
    let timeout;
    if (showPopup) {
      timeout = setTimeout(() => {
        setShowPopup(false);
        setPopupContent('');
        setFeedback({});
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [showPopup]);
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
              <input
                onChange={handleInputChange}
                type="text"
                name="userName"
                required
                className="take__input"
              />
            </div>
            <div className="form__section">
              <label>Email</label>
              <br />
              <input
                onChange={handleInputChange}
                type="text"
                name="email"
                required
                className="take__input"
              />
            </div>
            <div className="form__section">
              <label>Message</label>
              <br />
              <textarea
                onChange={handleInputChange}
                type="text"
                name="message"
                required
                className="take__input"
                width="320px"
              />
            </div>
            <div className="success__message">
              {showPopup && <p>{popUpContent}</p>}
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
