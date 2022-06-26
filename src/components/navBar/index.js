import styles from "./navBar.module.scss";
function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#photo">Photo</a>
        <a href="#video">Video</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        {/* eslint-disable-next-line */}
        <a href="#">
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
      </ul>
    </nav>
  );
}

export default NavBar;
