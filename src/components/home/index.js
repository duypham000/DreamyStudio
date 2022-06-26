import styles from "./home.module.scss";

function Home() {
  return (
    <section>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Photo</li>
          <li>Video</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </nav>

      <div>
        <div>
          <img
            alt="logo"
            src="https://github.com/duypham000/DreamyStudio/blob/main/src/assets/images/Logo.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
