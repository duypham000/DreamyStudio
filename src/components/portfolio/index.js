import images from "../../assets/images";
import styles from "./portfolio.module.scss";
function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div
        className={styles.banner}
        style={{ "background-image": "url(" + images.bgBanner + ")" }}
      >
        <h2>Portfolio</h2>
        <h3>The best of 2022</h3>
        <h4>After Wedding, Engagement, Love Story, Wedding</h4>
        {/* eslint-disable-next-line */}
        <a href="#">More photos</a>
      </div>
      <div className={styles.listPhotos}>
        <div className={styles.imgCp}>
          <img src={images.cp1} alt="anh cap doi"></img>
        </div>
        <div className={styles.imgCp}>
          <img src={images.cp2} alt="anh cap doi"></img>
        </div>
        <div className={styles.imgCp}>
          <img src={images.cp3} alt="anh cap doi"></img>
        </div>
        <div className={styles.imgCp}>
          <img src={images.cp4} alt="anh cap doi"></img>
        </div>
        <div className={styles.imgCp}>
          <img src={images.cp5} alt="anh cap doi"></img>
        </div>
        <div className={styles.imgCp}>
          <img src={images.cp6} alt="anh cap doi"></img>
        </div>
        <div className={styles.imgCp}>
          <img src={images.cp7} alt="anh cap doi"></img>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
