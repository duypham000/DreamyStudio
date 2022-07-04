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
      <Icon
        link="https://www.facebook.com/DreamyWeddingStudio/"
        icon="fa-brands fa-facebook-f"
      />
      <Icon link="0963650595" icon="fa-solid fa-phone" />
      <Icon
        link="https://www.google.com/maps/dir/?api=1&destination=21.254521784059%2C105.84826755628"
        icon="fa-solid fa-map"
      />
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
        Chúng tôi kỳ vọng đáp ứng nhu cầu và lợi ích tối đa của Quý khách hàng.
        Với phương châm: "HỆ THỐNG ỔN ĐỊNH HƠN - CHẤT LƯỢNG TỐT HƠN". Ước mơ
        mang tới Quý khách hàng những sản phẩm hoàn hảo nhất so với các nhà cung
        cấp cùng tầm giá. DREAMY STUDIO xin cám ơn Quý khách hàng đã đặt trọn
        niềm tin.
      </p>
    </footer>
  );
}

export default Footer;
