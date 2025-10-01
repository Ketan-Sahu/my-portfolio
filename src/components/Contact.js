// import React from 'react';

export default function Contact() {
  return <section id="contact"><h2>Contact</h2>
  <br></br>
  <form class="contact-form">
        <div class="form-group">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
        </div>
        <input type="text" placeholder="Subject of your message" required />
        <textarea rows="6" placeholder="Your message" required></textarea>
        <button type="submit"><i class="fas fa-paper-plane"></i> Send Message</button>
      </form>
  </section>;
}