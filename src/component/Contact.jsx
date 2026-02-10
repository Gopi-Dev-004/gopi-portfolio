

import "../style/Contact.css";
import { contactInfo } from "../data/contact";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          {contactInfo.map((item) => (
            <p key={item.id}>
              <strong>{item.label}:</strong>{" "}
              <a href={item.link} target="_blank">
                {item.value}
              </a>
            </p>
          ))}
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="btn">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
