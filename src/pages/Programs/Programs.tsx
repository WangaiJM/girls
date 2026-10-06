import "./programs.scss";

const imageBaseUrl = "https://petalgirlsschool.ac.ke/images";

const programAreas = [
  {
    title: "Core Learning Areas",
    icon: "📖",
    subjects: [
      "Literacy and Numeracy",
      "Science and Technology",
      "Social Studies and Life Skills",
      "Creative Arts and Physical Education",
    ],
  },
  {
    title: "STEM Education",
    icon: "🔬",
    subjects: [
      "Hands-on Science Experiments",
      "Basic Coding and ICT Skills",
      "Robotics and Innovation",
    ],
  },
  {
    title: "Talent Development",
    icon: "🎨",
    subjects: [
      "Music, Dance, and Drama",
      "Visual Arts and Crafts",
      "Sports and Athletics",
    ],
  },
  {
    title: "Life Skills and Values",
    icon: "🌱",
    subjects: [
      "Leadership and Entrepreneurship",
      "Environmental Conservation",
      "Community Service and Citizenship",
    ],
  },
];

const Programs = () => (
  <div className="programs-page">
    <div
      className="programs-page__banner"
      style={{ backgroundImage: `url("${imageBaseUrl}/graduate%20(4).jpg")` }}
      role="img"
      aria-label="A Petal Girls School graduation celebration"
    />

    <div className="container programs-page__content">
      <header className="programs-page__heading">
        <p className="programs-page__eyebrow">Learn, grow, thrive</p>
        <h2>Academic Programs</h2>
        <p>
          Petal Girls Senior School has adopted the Competency-Based Curriculum
          (CBC) and caters for Senior School (Grades 10, 11, and 12). The first
          Grade 10 intake is in 2026.
        </p>
        <p className="programs-page__transition-notice">
          <strong>
            A limited number of places will be available at PGSS to students
            completing their senior school education under the previous
            curriculum in 2026 and 2027.
          </strong>
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
          student’s potential. Our approach blends contemporary teaching methods
          with strong values to help students thrive academically and develop
          into confident, capable leaders.
        </p>
      </header>

      <section aria-labelledby="cbc-programs-title">
        <h3 className="programs-page__subheading" id="cbc-programs-title">
          Our CBC Programs
        </h3>
        <div className="program-area-grid">
          {programAreas.map(({ title, icon, subjects }) => (
            <article className="program-area-card" key={title}>
              <span className="program-area-card__icon" aria-hidden="true">
                {icon}
              </span>
              <h4>{title}</h4>
              <ul>
                {subjects.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="programs-page__approach">
        <h3>Learning by doing</h3>
        <p>
          Through engaging learning experiences, practical assessment, and
          opportunities to explore their interests, students build the skills
          and confidence to take on real-world challenges.
        </p>
        <p className="programs-page__closing">
          Join us in shaping a future-ready generation at Petal Girls Senior
          School!
        </p>
      </section>
    </div>
  </div>
);

export default Programs;
