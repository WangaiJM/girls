import "./about.scss";
const imageBaseUrl = "https://petalgirlsschool.ac.ke/images";

const parentInvolvement = [
  {
    title: "Collaborative Decision-Making",
    text: "Parents are part of the decision-making process. Their input is sought and respected in shaping school policies, programs, and the overall direction of the school. When parents are involved, our students benefit.",
  },
  {
    title: "Academic Clinics",
    text: "At the start of each academic year, we conduct Academic Clinics for every class. These give parents an opportunity to meet teachers, understand the curriculum, and discuss how best to support their daughters throughout the year.",
  },
  {
    title: "Annual General Meeting (AGM)",
    text: "Each year, we hold an Annual General Meeting where key school policies and new initiatives are shared and discussed. This meeting encourages open dialogue and helps align school efforts with the expectations and values of our parent community.",
  },
];

const About = () => (
  <div className="about-page">
    <section
      className="about-page__banner"
      style={{ backgroundImage: `url("${imageBaseUrl}/agri_10.jpg")` }}
      role="img"
      aria-label="Students at Petal Girls Senior School"
    />

    <div className="container about-page__content">
      <section className="about-section about-section--intro">
        <div className="about-section__copy">
          <h2>About Us</h2>
          <p>
            Petal Girls Senior School (PGSS) has adopted the new
            Competency-Based Curriculum (CBC) and caters for Senior School
            students in Grades 10, 11, and 12.
          </p>
          <p>
            Our CBC approach ensures that every learner is actively engaged,
            assessed through practical tasks, and empowered with 21st-century
            skills. We believe in learning by doing, fostering creativity, and
            instilling confidence in our students.
          </p>
          <p>
            With well-equipped facilities and a passionate team of educators, we
            strive to inspire excellence, build confidence, and unlock each
            student’s full potential. Our approach blends contemporary teaching
            methods with strong values to help students thrive academically and
            become confident, capable leaders.
          </p>
        </div>
        <img
          className="about-section__image"
          src={`${imageBaseUrl}/graduate_3.jpg`}
          alt="Petal Girls students celebrating their achievements"
        />
      </section>

      <section className="about-section about-section--mission">
        <div className="about-section__copy">
          <h2>Our Mission</h2>
          <p>
            To provide a conducive environment for girls in need and to offer
            high-quality, holistic education that enables students to become
            responsible and reliable members of their families and communities.
          </p>
          <h2>Our Vision</h2>
          <p>
            To become a leading girls school in the provision of high-quality,
            holistic education for girls in need.
          </p>
          <h2>Our Objectives</h2>
          <p>
            To increase girls’ access to, retention in, and completion of high
            school, enabling them to enrol in colleges and universities. Their
            self-reliance can stimulate community economic development and help
            reduce poverty.
          </p>
        </div>
        <img
          className="about-section__image"
          src={`${imageBaseUrl}/additions/assembly2.jpg`}
          alt="Students gathered at a Petal Girls School assembly"
        />
      </section>

      <section className="about-section about-section--bursary">
        <div className="about-section__copy">
          <h2>Our Bursary Scheme</h2>
          <p>
            Through the generosity of its donors, PGSS is able to offer a
            limited number of bursaries to girls from disadvantaged homes. These
            are awarded on a discretionary basis and range from 25% to, in
            exceptional cases, up to 75% of fees for day and boarding students.
            Applicants are asked to provide details of their personal
            circumstances and attend an interview at the school.
          </p>
          <p>
            Instead of, or in addition to, a bursary, PGSS may offer a payment
            plan to enable payment of any fees not covered by the bursary.
          </p>
        </div>
      </section>

      <section className="about-section about-section--parents">
        <div className="about-section__copy">
          <h2>Parent Involvement at Petal Girls Senior School</h2>
          <img
            className="about-section__image about-section__image--inline"
            src={`${imageBaseUrl}/community_1.jpg`}
            alt="Parents and members of the school community meeting together"
          />
          <p>
            At PGSS, we believe a strong partnership between parents and the
            school community is essential for success. We are proud to cultivate
            an environment where parents are informed, engaged, and empowered to
            play a meaningful role in school life.
          </p>
          {parentInvolvement.map(({ title, text }) => (
            <div className="about-section__parent-topic" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
          <p>
            We thank all our parents for their ongoing support and commitment.
            Together, we continue to nurture confident, capable, and
            compassionate young women.
          </p>
        </div>
      </section>
    </div>
  </div>
);

export default About;
