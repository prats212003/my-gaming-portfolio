import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="Contacts">
      <h2 className="contact-title">START A QUEST</h2>
      <p className="contact-subtitle">
        Let's team up and build something legendary
      </p>
      <div className="contact-wrapper">
        <div className="contact-box">
        <form className="contact-form">
          <label>NAME</label>
          <input type="text" placeholder="Enter your name" />

          <label>EMAIL</label>
          <input type="email" placeholder="your@email.com" />

          <label>MESSAGE</label>
          <textarea placeholder="Tell me about your project..." rows="5" />

          <button type="submit" className="send-btn">
            ⚡ SEND MESSAGE
          </button>
        </form>
        </div>
      </div>
      {/* <div className="contact-box">
        <form className="contact-form">
          <label>NAME</label>
          <input type="text" placeholder="Enter your name" />

          <label>EMAIL</label>
          <input type="email" placeholder="your@email.com" />

          <label>MESSAGE</label>
          <textarea placeholder="Tell me about your project..." rows="5" />

          <button type="submit" className="send-btn">
            ⚡ SEND MESSAGE
          </button>
        </form>
      </div> */}
    </section>
  );
}
