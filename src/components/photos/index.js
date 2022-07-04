import styles from "./photos.module.scss";
import images from "../../assets/images";

function Photos() {
  return (
    <section id="photo" className={styles.photos}>
      <div className={styles.imgCp}>
        <img src={images.cp1} alt="anh cap doi"></img>
      </div>
      <div className={styles.imgCp}>
        <img src={images.cp5} alt="anh cap doi"></img>
      </div>
      <div className={styles.imgCp}>
        <img src={images.cp3} alt="anh cap doi"></img>
      </div>
      <div className={styles.imgCp}>
        <img src={images.cp4} alt="anh cap doi"></img>
      </div>
      <div className={styles.imgCp}>
        <img src={images.cp2} alt="anh cap doi"></img>
      </div>
      <div className={styles.imgCp}>
        <img src={images.cp6} alt="anh cap doi"></img>
      </div>
      <div className={styles.imgCp}>
        <img src={images.cp7} alt="anh cap doi"></img>
      </div>
    </section>
  );
}

export default Photos;
