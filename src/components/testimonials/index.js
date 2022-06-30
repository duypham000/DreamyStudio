import styles from "./testimonial.module.scss";
import images from "../../assets/images";

function Tes({ img, name, detail }) {
  return (
    <div className={styles.tes}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{detail}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>The Testimonials</h2>
      <h3>What they say</h3>
      <div className={styles.list}>
        <Tes
          img={images.cp4}
          name="Duy Pham"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat ullamcorper elit et efficitur. Sed dapibus orci eu justo faucibus facilisis. Curabitur rhoncus scelerisque vulputate. Donec ut cursus ante. Vestibulum a fermentum leo, id mollis mauris. Nunc vitae pellentesque arcu. Sed nisi purus, scelerisque condimentum odio gravida, dignissim blandit lorem."
        />
        <Tes
          img={images.cp5}
          name="Sang Le"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat ullamcorper elit et efficitur. Sed dapibus orci eu justo faucibus facilisis. Curabitur rhoncus scelerisque vulputate. Donec ut cursus ante. Vestibulum a fermentum leo, id mollis mauris. Nunc vitae pellentesque arcu. Sed nisi purus, scelerisque condimentum odio gravida, dignissim blandit lorem."
        />
        <Tes
          img={images.cp6}
          name="Khanh An"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat ullamcorper elit et efficitur. Sed dapibus orci eu justo faucibus facilisis. Curabitur rhoncus scelerisque vulputate. Donec ut cursus ante. Vestibulum a fermentum leo, id mollis mauris. Nunc vitae pellentesque arcu. Sed nisi purus, scelerisque condimentum odio gravida, dignissim blandit lorem."
        />
      </div>
      {/* eslint-disable-next-line */}
      <a href="#" className={styles.btnMore}>
        Read more
      </a>
    </section>
  );
}

export default Testimonials;
