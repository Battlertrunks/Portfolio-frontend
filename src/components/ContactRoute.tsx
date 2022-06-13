import Aos from "aos";
import "aos/dist/aos.css";
import { FormEvent, useEffect, useState } from "react";
import { sendEmail } from "../services/ProjectInforService";
import "./ContactRoute.css";

const ContactRoute = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [emailSent, setEmailSent] = useState<boolean | null>(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    sendEmail({
      firstName,
      lastName,
      email,
      message,
    }).then((response) => {
      setEmailSent(response);
      console.log(response);
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

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
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name *</label>
          <div className="name-input-container">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First name..."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last name...."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <label htmlFor="user-email">Email *</label>
          <div>
            <input
              type="email"
              name="user-email"
              id="user-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <label htmlFor="message">Message *</label>
          <div>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button>Submit</button>
          {emailSent && <p>Email Successfully Sent!</p>}
          {emailSent === false && <p>Error: 424, Email was not Sent.</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactRoute;
