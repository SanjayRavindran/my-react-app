import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNav() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meetings With react js</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetings</Link>
          </li>
          <li>
            <Link to="/new-meetup">New</Link>
          </li>
          <li>
            <Link to="/favorites">Favs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
