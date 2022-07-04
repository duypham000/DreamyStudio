import styles from "./home.module.scss";
import images from "../../assets/images";
import { useRef, useState } from "react";
import clsx from "clsx";

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

function NavBar({ status }) {
  return (
    <nav className={clsx(styles.navBar, status ? styles.active : "")}>
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
  const hamBtn = useRef();
  const [clicked, setClicked] = useState(false);
  return (
    <section
      className={styles.Home}
      id="home"
      style={{ backgroundImage: "url(" + images.lisaBg + ")" }}
    >
      <div className={styles.overlay}></div>
      <svg
        ref={hamBtn}
        className={clsx(styles.ham, styles.hamRotate, styles.ham8)}
        viewBox="0 0 100 100"
        width="80"
        onClick={() => {
          hamBtn.current.classList.toggle(styles.active);
          setClicked((prevState) => !prevState);
        }}
      >
        <path
          className={clsx(styles.line, styles.top)}
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className={clsx(styles.line, styles.middle)} d="m 30,50 h 40" />
        <path
          className={clsx(styles.line, styles.bottom)}
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
      <NavBar status={clicked} />
      <ContactBar />
      <Slider />
    </section>
  );
}

export default Home;
