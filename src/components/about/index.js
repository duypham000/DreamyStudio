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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        {/* eslint-disable-next-line */}
        <a href="#">Get to know us better</a>
      </div>
    </section>
  );
}

export default About;
