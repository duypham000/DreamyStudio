import images from "../../assets/images";
import styles from "./portfolio.module.scss";
function Portfolio() {
  return (
    <section
      id="portfolio"
      className={styles.portfolio}
      style={{ backgroundImage: "url(" + images.bgImgBanner + ")" }}
    >
      <h2>Portfolio</h2>
      <h3>DREAMY SHINING 2022</h3>
      <h4>
        Nhẹ nhàng,sang trọng và tinh tế nhưng vẫn không kém phần lộng lẫy, nổi
        bật
      </h4>
      {/* eslint-disable-next-line */}
      <a href="https://www.facebook.com/DreamyWeddingStudio/photos/?ref=page_internal">
        More photos
      </a>
    </section>
  );
}

export default Portfolio;
