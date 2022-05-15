import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.left_header}>
        <img
          src={require("../assets/facebook.png")}
          className={styles.header_logo}
          alt="facebook-logo"
        />
        <div className={styles.header_input}>
          <img src={require("../assets/search.png")} alt="search-img" />
          <input type="text" placeholder="Searching on Facebook" />
        </div>
      </div>

      <div className={styles.middle_header}>
        <div className="header-home">
          <img src={require("../assets/home.png")} alt="home-img" />
        </div>
        <div className="header-watch">
          <img src={require("../assets/watch.png")} alt="watch-img" />
        </div>
        <div className="header-store">
          <img src={require("../assets/store.png")} alt="store-img" />
        </div>
        <div className="header-people">
          <img src={require("../assets/people.png")} alt="people-img" />
        </div>
        <div className="header-console">
          <img src={require("../assets/console.png")} alt="console-img" />
        </div>
      </div>

      <div className={styles.right_header}>
        <div className="header-settings">
          <img src={require("../assets/setting.png")} alt="setting-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
