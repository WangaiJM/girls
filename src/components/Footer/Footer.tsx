import "./footer.scss";

const Footer = () => (
  <footer className="site-footer">
    <div className="container site-footer__content">
      <p className="site-footer__rights">
        &copy; {new Date().getFullYear()} Petal Girls School. All rights reserved.
      </p>
      <address className="site-footer__contact">
        <h2>Petal Girls School</h2>
        <p>P.O. Box 659 - 20117 Naivasha</p>
        <a href="tel:+254723819205">0723 819 205</a>
      </address>
    </div>
  </footer>
);

export default Footer;
