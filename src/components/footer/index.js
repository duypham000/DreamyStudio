import styles from "./footer.module.scss";
import images from "../../assets/images";

function Icon({ link, icon }) {
  return (
    /* eslint-disable-next-line */
    <a href={link}>
      <i className={icon}></i>
    </a>
  );
}

function ContactBar() {
  return (
    <div className={styles.contactBar}>
      <Icon link="#" icon="fa-brands fa-facebook-f" />
      <Icon link="#" icon="fa-solid fa-phone" />
      <Icon link="#" icon="fa-solid fa-map" />
      <Icon link="#" icon="fa-solid fa-envelope" />
    </div>
  );
}

function Footer() {
  return (
    <footer
      id="footer"
      className={styles.footer}
      style={{ backgroundImage: "url(" + images.footerBG + ")" }}
    >
      <nav className={styles.navBar}>
        <ul>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#photo">Photo</a>
          <a href="#topic">Topics</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </ul>
      </nav>
      <ContactBar />

      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit
        amet ante dui. In hac habitasse platea dictumst. Suspendisse volutpat,
        mi vitae vulputate maximus, nunc arcu sagittis purus, vitae congue
      </p>
    </footer>
  );
}

export default Footer;
