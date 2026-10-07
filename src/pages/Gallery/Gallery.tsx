import "./gallery.scss";

const imageBaseUrl = "https://petalgirlsschool.ac.ke/images";

const galleryImages = [
  { fileName: "agri_1.jpg", alt: "Students taking part in agriculture" },
  { fileName: "cheers_1.jpg", alt: "Students celebrating together" },
  {
    fileName: "lab_10.jpg",
    alt: "Students learning in the science laboratory",
  },
  { fileName: "class_10.jpg", alt: "Students learning in a classroom" },
  { fileName: "agri_10.jpg", alt: "School agriculture activity" },
  {
    fileName: "cheers_2.jpg",
    alt: "Petal Girls School community celebration",
  },
  { fileName: "cheers_3.jpg", alt: "Students sharing a joyful moment" },
  { fileName: "class_11.jpg", alt: "A classroom at Petal Girls School" },
  { fileName: "class_8.jpg", alt: "Students working in class" },
  {
    fileName: "community_1.jpg",
    alt: "Petal Girls School community gathering",
  },
  { fileName: "community_2.jpg", alt: "School community activity" },
  {
    fileName: "community_3.jpg",
    alt: "Students and community members together",
  },
  { fileName: "community_4.jpg", alt: "Petal Girls School community event" },
  { fileName: "class_6.jpg", alt: "Learning at Petal Girls School" },
  { fileName: "cake_logo.jpg", alt: "Petal Girls School celebration cake" },
].map((image) => ({
  ...image,
  src: `${imageBaseUrl}/${encodeURI(image.fileName)}`,
}));

const Gallery = () => (
  <div className="gallery-page">
    <div className="container gallery-page__content">
      <header className="gallery-page__heading">
        <p className="gallery-page__eyebrow">Our community in pictures</p>
        <h2>Life at Petal Girls School</h2>
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
