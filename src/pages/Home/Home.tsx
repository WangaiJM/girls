import "./home.scss";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import girlsImage from "../../assets/images/girls1.jpg";
import principalImage from "../../assets/images/principal.jpg";

const donationItems = [
  <><strong>Scholarships</strong> for girls who can’t afford school fees</>,
  <><strong>Textbooks, uniforms, and school supplies</strong></>,
  <><strong>Nutritious meals</strong> to keep students focused in class</>,
  <><strong>Better learning facilities</strong> to enhance education</>,
];

const schoolNumbers = [
  { value: "18", label: "Staff Members" },
  { value: "220", label: "Students" },
  { value: "12", label: "Departments" },
];

const Home = () => (
  <>
    <Carousel />
    <div className="container home-page">
      <section className="welcome-section" aria-labelledby="welcome-heading">
        <div className="welcome-section__content">
          <h2 id="welcome-heading">Welcome to Petal Girls School</h2>
          <p>
            At Petal Girls School, we are dedicated to providing a nurturing
            and empowering learning environment for young girls from
            disadvantaged backgrounds. As a community-based school, we believe
            that every girl deserves access to quality education, regardless
            of her circumstances.
          </p>
          <p>
            With well-equipped facilities and a passionate team of educators,
            we strive to inspire excellence, build confidence, and unlock the
            full potential of each student. Our approach blends contemporary
            teaching methods with strong values to ensure our students thrive
            academically and develop into confident, capable leaders of
            tomorrow.
          </p>
          <p>
            At Petal Girls School, we don’t just educate—we uplift, empower,
            and transform lives. Welcome to a place where dreams take flight!
          </p>
        </div>
        <img className="welcome-section__image" src={girlsImage} alt="Students at Petal Girls School" />
      </section>

      <div className="parallax parallax--one" role="presentation" />

      <section className="donation-section" aria-labelledby="donation-heading">
        <h2 id="donation-heading">Help Us Empower Every Girl – Your Support Matters!</h2>
        <p>
          At Petal Girls School, we believe that every girl deserves a chance
          to learn, grow, and succeed—regardless of her background. As a
          community-based school, we are dedicated to providing quality
          education, mentorship, and a safe learning environment for girls
          from disadvantaged families.
        </p>
        <p>
          But we can’t do it alone. Many of our students lack basic learning
          materials, meals, and essential resources to support their education.
          With your generosity, we can provide:
        </p>
        <ul className="donation-section__list">
          {donationItems.map((item, itemIndex) => <li key={itemIndex}>✅ {item}</li>)}
        </ul>
        <p>
          Every donation, big or small, makes a difference. Together, we can
          break barriers, uplift communities, and give every girl the
          opportunity she deserves.
        </p>
        <div className="donation-section__callout">
          <p>🌱 Donate today and be part of their journey to success! 🌱</p>
          <p>For contributions and partnership opportunities</p>
          <Link className="button" to="/donation">More on Donations</Link>
          <p>Thank you for making a difference! ❤️</p>
        </div>
      </section>

      <div className="parallax parallax--two" role="presentation" />

      <section className="principal-section" aria-labelledby="principal-heading">
        <div className="principal-section__portrait">
          <img src={principalImage} alt="Peter Ngugi, Principal" />
          <p className="center">Principal - Peter Ngugi</p>
        </div>
        <div className="principal-section__message">
          <h2 id="principal-heading">Dear Parents, Guardians, and the Esteemed Public</h2>
          <h3>Greetings from Petal Girls!</h3>
          <p>
            At Petal Girls, we are committed to nurturing young minds,
            fostering excellence, and empowering our students to reach their
            full potential. Our dedication to academic achievement, character
            development, and holistic growth remains unwavering.
          </p>
          <p>
            We take pride in providing a safe, supportive, and inspiring
            learning environment where every girl is encouraged to dream big,
            work hard, and achieve greatness. Through a strong partnership
            with parents and the community, we continue to shape future leaders
            who will make a positive impact on society.
          </p>
          <p>
            We welcome your continued support as we strive to uphold our values
            of integrity, discipline, and excellence. For inquiries,
            collaborations, or any support, feel free to reach out to us.
            Together, we can create a brighter future for our students.
          </p>
          <p>Warm regards,</p>
        </div>
      </section>

      <div className="parallax parallax--three" role="presentation" />

      <section className="school-numbers" aria-labelledby="school-numbers-heading">
        <h2 id="school-numbers-heading">Petal Girls School in Numbers</h2>
        <div className="school-numbers__grid">
          {schoolNumbers.map(({ value, label }) => (
            <article className="school-numbers__card" key={label}>
              <p className="school-numbers__value">{value}</p>
              <p>{label}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  </>
);

export default Home;
