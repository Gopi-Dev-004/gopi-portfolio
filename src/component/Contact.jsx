

import "../style/Contact.css";
import { contactInfo } from "../data/contact";
import useScrollReveal from "../hooks/useScrollReveal";

function Contact() {

  const { ref, isVisible } = useScrollReveal();

  return (

    <section
      id="contact"
      ref={ref}
      className={`section contact  reveal reveal-right ${isVisible ? "active" : ""}`}
    >
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a project in mind or want to discuss opportunities? I'd love to hear from you!
      </p>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h3 className="info-title">Contact Information</h3>

          <div className="contact-buttons">
            {contactInfo.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="contact-btn"
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>


        {/* RIGHT SIDE FORM */}
        <form className="contact-form">
          <h3>Send Me a Message</h3>

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

