import styles from "./home.module.scss";
import images from "../../assets/images";

function Icon({ link, icon, detail }) {
  const detailElement = (
    <div className={styles.detail}>
      <p>{detail}</p>
    </div>
  );

  return (
    /* eslint-disable-next-line */
    <a href={link}>
      <i className={icon}></i>
      {detail ? detailElement : ""}
    </a>
  );
}

function ContactBar() {
  return (
    <div className={styles.contactBar}>
      <Icon link="#" icon="fa-brands fa-facebook-f" detail="Phạm Khánh Duy" />
      <Icon link="#" icon="fa-solid fa-phone" detail="0344848305" />
      <Icon
        link="#"
        icon="fa-solid fa-map"
        detail="Bắc Phú - Sóc Sơn - Hà Nội"
      />
      <Icon
        link="#"
        icon="fa-solid fa-envelope"
        detail="duypham05082002@gmail.com"
      />
    </div>
  );
}

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#photo">Photo</a>
        <a href="#topic">Topics</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        {/* eslint-disable-next-line */}
        <a href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
      </ul>
    </nav>
  );
}

function Slider() {
  return (
    <div className={styles.slider}>
      <img alt="logo" src={images.logo} />
      <h1>Deamy Studio</h1>
      <svg>
        <line x1="0" y1="0" x2="100%" y2="0" />
      </svg>
      <h2>Count Every Moment</h2>
      <p>
        Không có vạch đích trong hành trình kết nối sự yêu thương, Dreamy Weđing
        tự hào là thương hiệu áo cưới hàng đầu tại Sóc Sơn.
        <br /> Ước mơ mang tới Quý khách hàng những sản phẩm hoàn hảo nhất so
        với các nhà cung cấp cùng tầm giá. DREAMY STUDIO xin cám ơn Quý khách
        hàng đã đặt trọn niềm tin.
        <br /> Chúng tôi sẽ luôn nỗ lực hết sức để gìn giữ và xây dựng một
        thương hiệu DREAMY – TINH TẾ và SANG TRỌNG !
      </p>
    </div>
  );
}

function Home() {
  return (
    <section
      className={styles.Home}
      id="home"
      style={{ backgroundImage: "url(" + images.lisaBg + ")" }}
    >
      <div className={styles.overlay}></div>
      <NavBar />
      <Slider />
      <ContactBar />
    </section>
  );
}

export default Home;
export { NavBar, ContactBar };
