import "./facilities.scss";

const imageBaseUrl = "https://petalgirlsschool.ac.ke/images";

const facilitySections = [
  {
    title: "Academic Facilities",
    items: [
      "8 dedicated science laboratories",
      "Information and Communication Technology (ICT) labs",
      "Classrooms with interactive Promethean Boards",
    ],
    image: `${imageBaseUrl}/lab_8.jpg`,
    imageAlt: "Science laboratory facilities at Petal Girls School",
  },
  {
    title: "Sports Facilities",
    items: ["Shaded outdoor play areas", "Art, Music and Drama room"],
    image: `${imageBaseUrl}/games_7.jpg`,
    imageAlt: "Students taking part in school sports and activities",
  },
];

const Facilities = () => (
  <div className="facilities-page">
    <div
      className="facilities-page__banner"
      style={{ backgroundImage: `url("${imageBaseUrl}/class_4.jpg")` }}
      role="img"
      aria-label="Learning at Petal Girls School"
    />

    <div className="container facilities-page__content">
      {facilitySections.map(({ title, items, image, imageAlt }, index) => (
        <section
          className={`facility-section${index % 2 === 1 ? " facility-section--image-first" : ""}`}
          key={title}
          aria-labelledby={`facility-${index}`}
        >
          <div className="facility-section__copy">
            <p className="facilities-page__eyebrow">Our school</p>
            <h2 id={`facility-${index}`}>{title}</h2>
            <p>
              Our students have access to facilities that support learning,
              creativity, and wellbeing:
            </p>
            <ul className="facility-section__list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <img className="facility-section__image" src={image} alt={imageAlt} />
        </section>
      ))}
    </div>
  </div>
);

export default Facilities;
