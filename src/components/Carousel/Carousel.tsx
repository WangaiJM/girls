import "./carousel.scss";
import { useEffect, useState } from "react";
import agriImage from "../../assets/images/agri (5).jpg";
import gamesImage from "../../assets/images/games (6).jpg";
import labImage from "../../assets/images/lab (5).jpg";
import labSecondImage from "../../assets/images/lab (2).jpg";
import staffImage from "../../assets/images/staff (3).jpg";

const slides = [
  { src: staffImage, alt: "Petal Girls School staff" },
  { src: agriImage, alt: "Students learning through agriculture" },
  { src: labImage, alt: "Students working in the science laboratory" },
  { src: gamesImage, alt: "Students taking part in school games" },
  { src: labSecondImage, alt: "Science learning at Petal Girls School" },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const timerId = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timerId);
  }, []);

  const showPrevious = () => {
    setIndex(
      (currentIndex) => (currentIndex - 1 + slides.length) % slides.length,
    );
  };

  const showNext = () => {
    setIndex((currentIndex) => (currentIndex + 1) % slides.length);
  };

  return (
    <section className="carousel" aria-label="School highlights">
      <div
        className="carousel__images"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <img key={slide.src} src={slide.src} alt={slide.alt} />
        ))}
      </div>
      <button
        className="carousel__control carousel__control--previous"
        type="button"
        onClick={showPrevious}
        aria-label="Show previous image"
      >
        &#10094;
      </button>
      <button
        className="carousel__control carousel__control--next"
        type="button"
        onClick={showNext}
        aria-label="Show next image"
      >
        &#10095;
      </button>
      <a
        className="carousel__college-link"
        href="https://petalladiesvtc.ac.ke/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Petal Ladies Vocational Training Centre website (opens in a new tab)"
      >
        Visit Our College
        <span aria-hidden="true"> ↗</span>
      </a>
    </section>
  );
};

export default Carousel;
