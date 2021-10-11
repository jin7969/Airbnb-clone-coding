import React from "react";
import NavIcon from "./hosting/NavIcon";
import styles from "./navbar.module.css";
function Navbar({ res }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <i className="fab fa-airbnb"></i>
      </div>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.item}>투데이</li>
          <li className={styles.item}>메시지</li>
          <li className={styles.item}>달력</li>
          <li className={styles.item}>인사이드</li>
          <li className={styles.item}>
            메뉴<i className="fas fa-chevron-down"></i>
          </li>
        </ul>
      </nav>
      <div className={styles.user}>
        {res ? <i className="fas fa-bars"></i> : <NavIcon />}
      </div>
    </div>
  );
}

export default Navbar;
