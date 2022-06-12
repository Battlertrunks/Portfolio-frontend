import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./ContactRoute.css";

const ContactRoute = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="ContactRoute">
      <div className="contact-container">
        <div>
          <p className="opening-text">Let's connect</p>
          <h2>Pass Me a Message.</h2>
          <img
            data-aos="fade-up-right"
            className="mail-icon"
            src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/send-mail-orange.png?alt=media&token=2c7b5832-eac2-4bd9-be90-8c08232641e0"
            alt="paper plane message."
          />
        </div>
        <form>
          <label htmlFor="name">Name *</label>
          <div className="name-input-container">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First name..."
            />
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last name...."
            />
          </div>
          <label htmlFor="user-email">Email *</label>
          <div>
            <input type="email" name="user-email" id="user-email" />
          </div>
          <label htmlFor="message">Message *</label>
          <div>
            <textarea name="message" id="message"></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactRoute;
