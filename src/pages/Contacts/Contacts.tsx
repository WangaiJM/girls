import "./contacts.scss";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.1142323527056!2d36.43433177435821!3d-0.798117335286151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182925d70a2afc71%3A0xa189939d7b8b4ed8!2sPETAL%20GIRLS%20HIGH%20SCHOOL!5e1!3m2!1sen!2ske!4v1742299290072!5m2!1sen!2ske";

const contactDetails = [
  { label: "Postal address", value: "P.O. Box 659 - 20117 Naivasha" },
  {
    label: "School office",
    value: "+254 768 455 739",
    href: "tel:+254768455739",
  },
  {
    label: "Additional contact",
    value: "+254 723 819 205",
    href: "tel:+254723819205",
  },
  {
    label: "Principal",
    value: "principal@petalgirlsschool.ac.ke",
    href: "mailto:principal@petalgirlsschool.ac.ke",
  },
  {
    label: "Additional email",
    value: "pnnkariuki@yahoo.com",
    href: "mailto:pnnkariuki@yahoo.com",
  },
];

const Contacts = () => (
  <div className="contacts-page">
    <div className="contacts-page__map">
      <iframe
        src={mapEmbedUrl}
        title="Map showing Petal Girls Senior School in Naivasha"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>

    <div className="container contacts-page__content">
      <header className="contacts-page__heading">
        <p className="contacts-page__eyebrow">We’re here to help</p>
        <h2>Contact Us</h2>
        <p>Send us a message or use the details below to get in touch.</p>
      </header>

      <div className="contact-layout">
        <section
          className="contact-card contact-form"
          aria-labelledby="contact-form-title"
        >
          <h3 id="contact-form-title">Send a Message</h3>
          <p className="contact-form__note">
            Submitting the form will open your email app with your message ready
            to send.
          </p>
          <form
            action="mailto:principal@petalgirlsschool.ac.ke"
            method="post"
            encType="text/plain"
          >
            <div className="contact-form__fields">
              <div className="contact-form__group">
                <label htmlFor="contact-firstname">First name</label>
                <input
                  autoComplete="given-name"
                  id="contact-firstname"
                  name="First name"
                  required
                  type="text"
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="contact-lastname">Last name</label>
                <input
                  autoComplete="family-name"
                  id="contact-lastname"
                  name="Last name"
                  required
                  type="text"
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="contact-phone">Phone</label>
                <input
                  autoComplete="tel"
                  id="contact-phone"
                  name="Phone"
                  required
                  type="tel"
                />
              </div>
              <div className="contact-form__group">
                <label htmlFor="contact-email">Email address</label>
                <input
                  autoComplete="email"
                  id="contact-email"
                  name="Email"
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="contact-form__group">
              <label htmlFor="contact-subject">Subject</label>
              <input id="contact-subject" name="Subject" required type="text" />
            </div>
            <div className="contact-form__group">
              <label htmlFor="contact-message">Your message</label>
              <textarea id="contact-message" name="Message" required rows={7} />
            </div>
            <button className="contact-form__submit" type="submit">
              Send Message
            </button>
          </form>
        </section>

        <section
          className="contact-card contact-details"
          aria-labelledby="contact-details-title"
        >
          <h3 id="contact-details-title">Our Contact Details</h3>
          <address>
            {contactDetails.map(({ label, value, href }) => (
              <div className="contact-details__item" key={label}>
                <h4>{label}</h4>
                {href ? <a href={href}>{value}</a> : <p>{value}</p>}
              </div>
            ))}
          </address>
        </section>
      </div>
    </div>
  </div>
);

export default Contacts;
