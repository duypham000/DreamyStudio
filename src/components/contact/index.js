import images from "../../assets/images";
import styles from "./contact.module.scss";
import clsx from "clsx";

function Input({ label, id, area }) {
  return (
    <div className={styles.inptGroup}>
      <label htmlFor={id}>{label}:</label>
      {area ? (
        <textarea
          type="text"
          className={clsx(styles.inpt, styles.txtarea)}
          id={id}
        />
      ) : (
        <input type="text" className={styles.inpt} id={id} />
      )}
    </div>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className={styles.contact}
      style={{ backgroundImage: "url(" + images.contactBG + ")" }}
    >
      <div className={styles.overlay}></div>
      <h2>Contact me</h2>
      <h3>get in touch</h3>
      <div className={styles.formContain}>
        <img src={images.cp7} alt="contact" />
        <form className={styles.contactForm}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex
            urna, ornare vel cursus vel, fermentum sit amet quam. Aliquam ut
            porta ligula. Maecenas porttitor.
          </p>
          <Input label="Tên" id="name" />
          <Input label="Số điện thoại" id="sbj" />
          <Input label="Lời nhắn" id="mss" area />
          <button type="submit" className={styles.btnSubmit}>
            Gửi ngay
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
