import "./contacts.scss";
import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from "react";

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

type ContactField =
  | "firstname"
  | "lastname"
  | "phone"
  | "email"
  | "subject"
  | "message";
type ContactValues = Record<ContactField, string>;
type ContactErrors = Partial<Record<ContactField, string>>;

const initialValues: ContactValues = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const fieldLabels: Record<ContactField, string> = {
  firstname: "First name",
  lastname: "Last name",
  phone: "Phone",
  email: "Email address",
  subject: "Subject",
  message: "Message",
};

const validateField = (field: ContactField, value: string) => {
  const trimmedValue = value.trim();

  if (!trimmedValue) return `${fieldLabels[field]} is required.`;
  if (
    (field === "firstname" || field === "lastname") &&
    trimmedValue.length < 2
  ) {
    return `${fieldLabels[field]} must be at least 2 characters.`;
  }
  if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
    return "Enter a valid email address.";
  }
  if (field === "phone" && !/^\+?[\d\s().-]{7,20}$/.test(trimmedValue)) {
    return "Enter a valid phone number.";
  }
  if (field === "subject" && trimmedValue.length < 3) {
    return "Subject must be at least 3 characters.";
  }
  if (field === "message" && trimmedValue.length < 10) {
    return "Message must be at least 10 characters.";
  }

  return "";
};

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

const Contacts = () => {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<ContactField, boolean>>
  >({});
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as ContactField;
    const value = event.target.value;
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    if (touched[field]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: validateField(field, value),
      }));
    }
    setSubmissionStatus("");
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as ContactField;
    setTouched((currentTouched) => ({ ...currentTouched, [field]: true }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: validateField(field, event.target.value),
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = Object.fromEntries(
      (Object.keys(initialValues) as ContactField[]).map((field) => [
        field,
        validateField(field, values[field]),
      ]),
    ) as ContactErrors;
    setTouched(
      Object.fromEntries(
        (Object.keys(initialValues) as ContactField[]).map((field) => [
          field,
          true,
        ]),
      ),
    );
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setSubmissionStatus(
        "Please correct the highlighted fields and try again.",
      );
      return;
    }
    if (!formspreeEndpoint) {
      setSubmissionStatus(
        "The contact form is not connected yet. Please contact the school by phone or email.",
      );
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("");
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");

      setValues(initialValues);
      setErrors({});
      setTouched({});
      setSubmissionStatus(
        "Thank you. Your message has been sent successfully.",
      );
    } catch {
      setSubmissionStatus(
        "We couldn’t send your message. Please try again or contact the school directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldError = (field: ContactField) => errors[field];

  return (
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
              Complete the form and we’ll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} noValidate>
              <input
                className="contact-form__honeypot"
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <input type="hidden" name="_replyto" value={values.email} />
              <input
                type="hidden"
                name="_subject"
                value={`Website enquiry: ${values.subject}`}
              />
              <div className="contact-form__fields">
                <div className="contact-form__group">
                  <label htmlFor="contact-firstname">First name</label>
                  <input
                    autoComplete="given-name"
                    id="contact-firstname"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(fieldError("firstname"))}
                    aria-describedby="contact-firstname-error"
                    maxLength={80}
                    type="text"
                  />
                  <span
                    className="contact-form__error"
                    id="contact-firstname-error"
                    aria-live="polite"
                  >
                    {fieldError("firstname")}
                  </span>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-lastname">Last name</label>
                  <input
                    autoComplete="family-name"
                    id="contact-lastname"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(fieldError("lastname"))}
                    aria-describedby="contact-lastname-error"
                    maxLength={80}
                    type="text"
                  />
                  <span
                    className="contact-form__error"
                    id="contact-lastname-error"
                    aria-live="polite"
                  >
                    {fieldError("lastname")}
                  </span>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    autoComplete="tel"
                    id="contact-phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(fieldError("phone"))}
                    aria-describedby="contact-phone-error"
                    maxLength={20}
                    type="tel"
                  />
                  <span
                    className="contact-form__error"
                    id="contact-phone-error"
                    aria-live="polite"
                  >
                    {fieldError("phone")}
                  </span>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    autoComplete="email"
                    id="contact-email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(fieldError("email"))}
                    aria-describedby="contact-email-error"
                    maxLength={254}
                    type="email"
                  />
                  <span
                    className="contact-form__error"
                    id="contact-email-error"
                    aria-live="polite"
                  >
                    {fieldError("email")}
                  </span>
                </div>
              </div>
              <div className="contact-form__group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(fieldError("subject"))}
                  aria-describedby="contact-subject-error"
                  maxLength={120}
                  type="text"
                />
                <span
                  className="contact-form__error"
                  id="contact-subject-error"
                  aria-live="polite"
                >
                  {fieldError("subject")}
                </span>
              </div>
              <div className="contact-form__group">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(fieldError("message"))}
                  aria-describedby="contact-message-error"
                  maxLength={5000}
                  rows={7}
                />
                <span
                  className="contact-form__error"
                  id="contact-message-error"
                  aria-live="polite"
                >
                  {fieldError("message")}
                </span>
              </div>
              <p
                className="contact-form__status"
                role="status"
                aria-live="polite"
              >
                {submissionStatus}
              </p>
              <button
                className="contact-form__submit"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send Message"}
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
};

export default Contacts;
