import "./admission.scss";
import agricultureImage from "../../assets/images/agri (5).jpg";
import studentsImage from "../../assets/images/cheers (2).jpg";

const Admission = () => (
  <div className="admission-page">
    <div
      className="admission-page__banner"
      style={{ backgroundImage: `url("${studentsImage}")` }}
      role="img"
      aria-label="Petal Girls School students"
    />

    <div className="container admission-page__content">
      <section className="admission-section">
        <img
          className="admission-section__image"
          src={agricultureImage}
          alt="Petal Girls School students taking part in agriculture"
        />
        <div className="admission-section__copy">
          <p className="admission-section__eyebrow">Join our school community</p>
          <h2>Admission</h2>
          <p>
            For admission enquiries, please contact Petal Girls School. Our team
            will be happy to provide information and guide you through the next
            steps.
          </p>
          <a className="admission-page__contact" href="tel:+254723819205">
            Call us: +254 723 819 205
          </a>
        </div>
      </section>
    </div>
  </div>
);

export default Admission;
