import "./ContactRoute.css";

const ContactRoute = () => {
  return (
    <div className="ContactRoute">
      <h2>Pass Me a Message.</h2>
      <form>
        <label htmlFor="name">Name *</label>
        <div>
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
  );
};

export default ContactRoute;
