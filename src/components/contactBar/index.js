import { useEffect, useRef } from "react";
import styles from "./contactBar.module.scss";

function Icon({ link, icon, detail }) {
  const aRef = useRef();
  const dtRef = useRef();
  useEffect(() => {
    const ele = aRef.current;
    const handleHover = () => {
      console.log("hello");
    };
    ele.addEventListener("hover", handleHover);

    return ele.removeEventListener("hover", handleHover);
  }, []);

  const detailElement = (
    <div className={styles.detail} ref={dtRef}>
      <p>{detail}</p>
    </div>
  );

  return (
    /* eslint-disable-next-line */
    <a href={link} ref={aRef}>
      <i className={icon}></i>
      {detail ? detailElement : ""}
    </a>
  );
}

function ContactBar() {
  return (
    <div className={styles.contactBar}>
      <Icon link="#" icon="fa-brands fa-facebook-f" detail="Phạm Khánh Duy" />
      <Icon link="#" icon="fa-solid fa-phone" detail="0344848305" />
      <Icon
        link="#"
        icon="fa-solid fa-map"
        detail="Bắc Phú - Sóc Sơn - Hà Nội"
      />
      <Icon
        link="#"
        icon="fa-solid fa-envelope"
        detail="duypham05082002@gmail.com"
      />
    </div>
  );
}

export default ContactBar;
