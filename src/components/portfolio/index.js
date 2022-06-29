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
      <h3>The best of 2022</h3>
      <h4>After Wedding, Engagement, Love Story, Wedding</h4>
      {/* eslint-disable-next-line */}
      <a href="#">More photos</a>
    </section>
  );
}

export default Portfolio;
