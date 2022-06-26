import styles from "./contactBar.module.scss";

function Icon({ link, icon, detail }) {
  const detailElement = (
    <div className={styles.detail}>
      <p>{detail}</p>
    </div>
  );
  return (
    /* eslint-disable-next-line */
    <a href={link}>
      <i className={icon}></i>
      {detail ? detailElement : ""}
    </a>
  );
}

function ContactBar() {
  return (
    <div className={styles.contactBar}>
      <Icon link="#" icon="fa-brands fa-facebook-f" detail="Phạm Khánh Duy" />
      <Icon link="#" icon="fa-solid fa-phone" />
      <Icon link="#" icon="fa-solid fa-map" />
      <Icon link="#" icon="fa-solid fa-envelope" />
    </div>
  );
}

export default ContactBar;
