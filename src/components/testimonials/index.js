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
          img={images.cp5}
          name="Do Hang"
          detail="Em đã sử dụng dịch vụ của DREAMY STUDIO và em cảm thấy trên cả ưng ý ạ ! Em xin cảm ơn ekip chụp cực kỳ có tâm ạ, nhất là cậu em phụ ánh sáng cực kỳ vui tính."
        />
        <Tes
          img={images.cp3}
          name="Do Hang"
          detail="Chụp ảnh có tâm, Make đẹp. Thợ rất nhiệt tình và tỉ mỉ đến từng chi tiết, rất cảm ơn ekip đã đồng hành cùng vợ chồng chúng tôi trong suốt tour chụp ảnh dài này."
        />
        <Tes
          img={images.cp6}
          name="Khanh An"
          detail="Chúng tôi rất may mắn khi đã chọn đúng studio có tâm như Dreamy, cách tổ chức chuyên nghiệp, thao tác gọn gàng, dàn nhân viên vui tính thân thiện."
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
