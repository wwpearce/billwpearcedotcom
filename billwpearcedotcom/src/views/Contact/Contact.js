import React from 'react';
import './Contact.scss';

import { ReactComponent as ContactScriptSVG } from '../../img/Contact-script.svg';

import Button from '../../components/Button/Button';

const ContactForm = () => {
  return (
    <div className="contact-wrapper">
      <ContactScriptSVG className="script-svg animate-svg" />
      <p>shoot me an email</p>
      <form action="https://submit-form.com/ZFn1NLL2">
        <div className="form-header">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
        ></textarea>

        <Button type="submit">Send 📫</Button>
      </form>
      <a
        href="https://www.instagram.com/inspiringsportsdocumentaries/"
        target="_blank"
        rel="noreferrer"
      >
        or reach out on instagram
      </a>
    </div>
  );
};

export default ContactForm;
