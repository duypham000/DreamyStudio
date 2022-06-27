import styles from "./home.module.scss";
import images from "../../assets/images";

function Home({ children }) {
  return (
    <section
      className={styles.Home}
      id="home"
      style={{ backgroundImage: "url(" + images.lisaBg + ")" }}
    >
      <div className={styles.overlay}></div>
      {children}
    </section>
  );
}

export default Home;
