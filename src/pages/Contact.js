import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{
          backgroundImage: `url(https://user-images.githubusercontent.com/23085368/141319135-43989443-1370-4560-b8d0-30ccdf863360.jpg)`,
        }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form
          id="contact-form"
          method="POST"
          action="mailto:yousuf.h151@olivegroveschool.ca"
        >
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
