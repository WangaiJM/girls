import "./gallery.scss";
import agricultureImage from "../../assets/images/agri_1.jpg";
import agricultureFeatureImage from "../../assets/images/agri_10.jpg";
import cakeImage from "../../assets/images/cake_logo.jpg";
import classroomImage from "../../assets/images/class_6.jpg";
import classroomFeatureImage from "../../assets/images/class_8.jpg";
import classroomImageTen from "../../assets/images/class_10.jpg";
import classroomImageEleven from "../../assets/images/class_11.jpg";
import celebrationImage from "../../assets/images/cheers_1.jpg";
import celebrationImageTwo from "../../assets/images/cheers_2.jpg";
import celebrationImageThree from "../../assets/images/cheers_3.jpg";
import communityImage from "../../assets/images/community_1.jpg";
import communityImageTwo from "../../assets/images/community_2.jpg";
import communityImageThree from "../../assets/images/community_3.jpg";
import communityImageFour from "../../assets/images/community_4.jpg";
import laboratoryImage from "../../assets/images/lab_10.jpg";

const galleryImages = [
  {
    fileName: "agri_1.jpg",
    src: agricultureImage,
    alt: "Students taking part in agriculture",
  },
  {
    fileName: "cheers_1.jpg",
    src: celebrationImage,
    alt: "Students celebrating together",
  },
  {
    fileName: "lab_10.jpg",
    src: laboratoryImage,
    alt: "Students learning in the science laboratory",
  },
  {
    fileName: "class_10.jpg",
    src: classroomImageTen,
    alt: "Students learning in a classroom",
  },
  {
    fileName: "agri_10.jpg",
    src: agricultureFeatureImage,
    alt: "School agriculture activity",
  },
  {
    fileName: "cheers_2.jpg",
    src: celebrationImageTwo,
    alt: "Petal Girls Senior School community celebration",
  },
  {
    fileName: "cheers_3.jpg",
    src: celebrationImageThree,
    alt: "Students sharing a joyful moment",
  },
  {
    fileName: "class_11.jpg",
    src: classroomImageEleven,
    alt: "A classroom at Petal Girls Senior School",
  },
  {
    fileName: "class_8.jpg",
    src: classroomFeatureImage,
    alt: "Students working in class",
  },
  {
    fileName: "community_1.jpg",
    src: communityImage,
    alt: "Petal Girls Senior School community gathering",
  },
  {
    fileName: "community_2.jpg",
    src: communityImageTwo,
    alt: "School community activity",
  },
  {
    fileName: "community_3.jpg",
    src: communityImageThree,
    alt: "Students and community members together",
  },
  {
    fileName: "community_4.jpg",
    src: communityImageFour,
    alt: "Petal Girls Senior School community event",
  },
  {
    fileName: "class_6.jpg",
    src: classroomImage,
    alt: "Learning at Petal Girls Senior School",
  },
  {
    fileName: "cake_logo.jpg",
    src: cakeImage,
    alt: "Petal Girls Senior School celebration cake",
  },
];

const Gallery = () => (
  <div className="gallery-page">
    <div className="container gallery-page__content">
      <header className="gallery-page__heading">
        <p className="gallery-page__eyebrow">Our community in pictures</p>
        <h2>Life at Petal Girls Senior School</h2>
        <p>
          Explore moments from learning, school activities, and our community.
          Select a photo to open its full-size version.
        </p>
      </header>

      <div className="gallery-grid">
        {galleryImages.map(({ fileName, src, alt }) => (
          <a
            className="gallery-card"
            href={src}
            key={fileName}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open full-size image: ${alt}`}
          >
            <img src={src} alt={alt} loading="lazy" decoding="async" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
