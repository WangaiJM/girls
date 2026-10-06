import "./donation.scss";

const imageBaseUrl = "https://petalgirlsschool.ac.ke/images";

const waysToHelp = [
  {
    icon: "📚",
    title: "Provide education",
    description:
      "Many girls at our school rely on scholarships because their families cannot afford even the smallest fees.",
  },
  {
    icon: "🥣",
    title: "Offer daily meals",
    description:
      "For some students, the school lunch is the only meal they will get all day.",
  },
  {
    icon: "🎒",
    title: "Supply books, uniforms, and essentials",
    description: "A single textbook can change the way a girl sees her future.",
  },
  {
    icon: "🏫",
    title: "Improve our learning environment",
    description:
      "Safe, well-equipped classrooms can mean the difference between dropping out and excelling.",
  },
];

const Donation = () => (
  <div className="donation-page">
    <div
      className="donation-page__banner"
      style={{ backgroundImage: `url("${imageBaseUrl}/donate2.jpg")` }}
      role="img"
      aria-label="Support education at Petal Girls School"
    />

    <div className="container donation-page__content">
      <section className="donation-intro" aria-labelledby="donation-title">
        <div className="donation-intro__copy">
          <p className="donation-page__eyebrow">Give her a chance</p>
          <h2 id="donation-title">Give Her a Chance—Transform a Life Today</h2>
          <p>
            At Petal Girls School, we see the{" "}
            <strong>dreams in their eyes—young</strong>, determined girls who
            long for an education but face unimaginable hardships. Many come
            from families struggling to afford a meal, let alone school fees.
            Some have lost parents; others are fighting against traditions that
            do not believe in educating girls. Yet, despite it all, they hold on
            to hope.
          </p>
        </div>
        <img
          className="donation-intro__image"
          src={`${imageBaseUrl}/donate1.jpg`}
          alt="A student whose education is supported by the school community"
        />
      </section>

      <section
        className="donation-impact"
        aria-labelledby="donation-impact-title"
      >
        <div className="donation-impact__heading">
          <p className="donation-page__eyebrow">
            Your support makes a difference
          </p>
          <h2 id="donation-impact-title">But hope alone is not enough.</h2>
          <p>
            These girls need books, uniforms, safe classrooms, and teachers who
            believe in them. They need meals that keep them from learning on
            empty stomachs. They need <strong>you.</strong> With your support,
            we can:
          </p>
        </div>

        <ul className="donation-impact__list">
          {waysToHelp.map(({ icon, title, description }) => (
            <li className="donation-impact__item" key={title}>
              <span className="donation-impact__icon" aria-hidden="true">
                {icon}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="donation-appeal"
        aria-labelledby="donation-appeal-title"
      >
        <h2 id="donation-appeal-title">Donate now. Change a life forever.</h2>
        <p>
          Every donation, no matter the amount, gives a girl a chance to stay in
          school, dream bigger, and believe in herself.
        </p>
        <p>
          Today, you can be the reason a girl stays in school, writes her first
          exam, walks proudly in her uniform, and dares to believe in a future
          beyond poverty.
        </p>
        <p>
          For donations or partnerships, please reach out to us. Your kindness
          today will shape a girl’s tomorrow. Thank you for believing in them.
        </p>
        <a className="donation-appeal__contact" href="tel:+254723819205">
          Call us: +254 723 819 205
        </a>
      </section>
    </div>
  </div>
);

export default Donation;
