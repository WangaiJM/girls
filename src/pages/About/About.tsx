import "./about.scss";
import agricultureBanner from "../../assets/images/agri (10).jpg";
import agricultureImage from "../../assets/images/agri (2).jpg";
import foundationImage from "../../assets/images/cheers (2).jpg";

const schoolObjectives = [
  "Increase girls' access to, retention in, and completion of high school so they can enroll in colleges and universities.",
  "Contribute to the community's social and economic development, reduce poverty, and encourage self-reliance.",
];

const guidingPrinciples = [
  {
    title: "Mission",
    text: "To provide a conducive environment for girls in need and to offer high quality and holistic education that will enable the students to become responsible and reliable members of their families and communities.",
  },
  {
    title: "Vision",
    text: "To become a leading girls school in the provision of high quality and holistic education for girls in need.",
  },
];

const About = () => (
  <div className="about-page">
    <section
      className="about-page__banner"
      style={{ backgroundImage: `url("${agricultureBanner}")` }}
      aria-label="Agriculture at Petal Girls School"
    />

    <div className="container about-page__content">
      <section className="about-section about-section--intro">
        <div className="about-section__copy">
          <h2>About Us</h2>
          <p>
            Petal Girls School is situated in Mirera village, Naivasha Sub
            County, approximately 10 kilometers from Naivasha town. The school
            serves the underprivileged Mirera community, where poverty prevents
            many youngsters from receiving an education.
          </p>
          <p>
            Petal Girls School was founded to meet the educational needs of
            girls who struggle to access and complete secondary school because
            of early marriages and pregnancies. The school and its boarding
            facilities help girls complete high school and open opportunities
            for further study at colleges and universities. A thorough education
            equips students with the opportunities and knowledge to reach their
            goals, find employment, and break cycles of poverty and early
            marriage.
          </p>
          <h3>The Objectives</h3>
          <ul className="about-page__objectives">
            {schoolObjectives.map((objective) => (
              <li key={objective}>{objective}</li>
            ))}
          </ul>
        </div>
        <img
          className="about-section__image"
          src={agricultureImage}
          alt="Students learning about agriculture"
        />
      </section>

      <section className="about-section about-section--foundation">
        <div className="about-section__copy">
          <h2>Barbara Dougan Foundation</h2>
          <p>
            We extend our deepest gratitude to the{" "}
            <strong>Barbara Dougan Foundation</strong> for its unwavering
            support and commitment to empowering girls through education. Your
            generosity has transformed lives at Petal Girls School, providing
            essential resources, scholarships, and a nurturing learning
            environment for girls who would otherwise be denied an education.
            Because of your continued partnership, these young learners now have{" "}
            <strong>hope, opportunity, and a brighter future.</strong>
          </p>
          <p>
            Thank you for believing in our mission and standing with us in this
            journey of change.
          </p>
          <p>
            <strong>
              To learn more about their work and ongoing support for our school,
              visit:
            </strong>
          </p>
          <a
            className="about-page__foundation-link"
            href="https://barbaradouganfoundation.org/petalcboschool"
            target="_blank"
            rel="noreferrer"
          >
            Barbara Dougan Foundation – Petal CBO School
          </a>
        </div>
        <img
          className="about-section__image"
          src={foundationImage}
          alt="Petal Girls School community celebrating together"
        />
      </section>

      <div className="about-page__principles">
        {guidingPrinciples.map(({ title, text }) => (
          <section className="about-principle" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </section>
        ))}
        <section className="about-principle">
          <h2>Core Values</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            obcaecati rerum, facilis pariatur deserunt, aut, blanditiis libero
            quam necessitatibus officiis ad repellat aliquid ullam. Porro,
            pariatur. Hic sed natus corporis?
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default About;
