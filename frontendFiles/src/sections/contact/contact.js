/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import contacts from './data';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    let isValid = true;
    formData.forEach((value) => {
      if (!value.trim()) {
        isValid = false;
      }
    });

    setLoading(true);

    if (!isValid) {
      setLoading(false);
      setTimeout(() => {
        setSuccessMessage(null);
        setErrorMessage(null);
      }, 2000);
      setErrorMessage('Error sending message. Please try again.');
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'service_jm8203h',
        'template_9dqmhob',
        form.current,
        'hmug2Pzn1clcaiMoz',
      );

      setSuccessMessage('Message sent successfully!');
      console.log(result.text);
      form.current.reset();
    } catch (error) {
      setErrorMessage('Error sending message. Please try again.');
      console.error(error.text);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccessMessage(null);
        setErrorMessage(null);
      }, 2000);
    }
  };

  return (
    <section id="contact">
      <h2>Get In touch </h2>
      <div className="container contact__container">
        <div className="contact__message">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form__section">
              <label>Name</label>
              <br />
              <input className="take__input" type="text" name="user_name" />
              <label>Email</label>
              <br />
              <input className="take__input" type="email" name="user_email" />
              <label>Message</label>
              <br />
              <textarea className="take__input" name="message" />
              <input className="btn primary sbmt" type="submit" value="Send" />
            </div>
          </form>
          {loading && <p>Loading...</p>}
          {successMessage && (
            <p className="msg success-message">{successMessage}</p>
          )}
          {errorMessage && <p className="msg error-message">{errorMessage}</p>}
        </div>
        <div className="contact__socials">
          <p>Let's Stay Connected</p>
          <div className="contact__links">
            {contacts.map((contact) => (
              <a key={contact.id} href={contact.link} target="blank">
                {contact.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
