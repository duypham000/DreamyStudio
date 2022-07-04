import styles from "./about.module.scss";
import images from "../../assets/images";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.image}>
        <img src={images.avt} alt="Avatar"></img>
      </div>
      <div className={styles.detail}>
        <h2>About us</h2>
        <p>
          Không có vạch đích trong hành trình kết nối sự YÊU THƯƠNG, Dreamy
          Wedding tự hào là thương hiệu Áo Cưới hàng đầu tại Sóc Sơn !
        </p>
        {/* eslint-disable-next-line */}
        <a href="https://www.facebook.com/DreamyWeddingStudio">
          Get to know us better
        </a>
      </div>
    </section>
  );
}

export default About;
