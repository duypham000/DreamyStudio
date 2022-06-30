import images from "../../assets/images";
import styles from "./gallery.module.scss";
import clsx from "clsx";

function Topic({ link, img, desc, main }) {
  return (
    <a href={link} className={styles.topic}>
      <img src={img} alt="" />
      <div className={styles.line}></div>
      <p className={clsx(styles.desc, styles.mainScr && main)}>{desc}</p>
    </a>
  );
}

function Gallery() {
  return (
    <section id="topic" className={styles.gallery}>
      <div
        className={styles.banner}
        style={{ backgroundImage: "url(" + images.bgVidBanner + ")" }}
      >
        <h2>Gallery</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque
          nisl, dignissim vel lacus eu, ultrices porttitor erat. Mauris
          ullamcorper rutrum felis, et dictum eros.
        </h3>
      </div>
      <div className={styles.topics}>
        <div className={styles.mainTopic}>
          <Topic
            link="#"
            img={images.cp1}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum rutrum velit vitae dapibus. Nunc congue imperdiet est luctus lobortis. Donec eu odio et ipsum."
          />
        </div>
        <div className={styles.topicList}>
          <Topic
            link="#"
            img={images.cp2}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Topic
            link="#"
            img={images.cp3}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Topic
            link="#"
            img={images.cp4}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
      {/* eslint-disable-next-line */}
      <a className={styles.moreBtn} href="#">
        More topic
      </a>
    </section>
  );
}

export default Gallery;
