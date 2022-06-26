import images from "../../assets/images";
import styles from "./slider.module.scss";

function Slider() {
  return (
    <div className={styles.slider}>
      <img alt="logo" src={images.logo} />
      <h1>Deamy Studio</h1>
      <svg>
        <line x1="0" y1="0" x2="100%" y2="0" />
      </svg>
      <h2>Count Every Moment</h2>
      <p>
        Không có vạch đích trong hành trình kết nối sự yêu thương, Dreamy Weđing
        tự hào là thương hiệu áo cưới hàng đầu tại Sóc Sơn.
        <br /> Ước mơ mang tới Quý khách hàng những sản phẩm hoàn hảo nhất so
        với các nhà cung cấp cùng tầm giá. DREAMY STUDIO xin cám ơn Quý khách
        hàng đã đặt trọn niềm tin.
        <br /> Chúng tôi sẽ luôn nỗ lực hết sức để gìn giữ và xây dựng một
        thương hiệu DREAMY – TINH TẾ và SANG TRỌNG !
      </p>
    </div>
  );
}

export default Slider;
