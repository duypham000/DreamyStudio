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
          Với những mẫu thiết kế sang trọng, những dụng cụ chuyên nghiệp, quy
          trình làm việc hiệu quả, chúng tôi hân hạnh mang đến những bức ảnh
          khiến khách hàng hơn cả hài lòng
        </h3>
      </div>
      <div className={styles.topics}>
        <div className={styles.mainTopic}>
          <Topic
            link="#"
            img={images.cp1}
            desc="Mẫu thiết kế sáng trọng, ngọt ngào với tone màu trắng."
          />
        </div>
        <div className={styles.topicList}>
          <Topic
            link="#"
            img={images.cp2}
            desc="Sự kết hợp đen trắng đầy vẻ thanh lịch."
          />
          <Topic
            link="#"
            img={images.cp3}
            desc="Bộ ảnh cưới mang đậm khí chất mông cổ."
          />
          <Topic
            link="#"
            img={images.cp4}
            desc="Xu hướng chụp ảnh cưới tối giản."
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
