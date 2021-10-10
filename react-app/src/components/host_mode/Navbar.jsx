import React from "react";
import styles from "./navbar.module.css";
function Navbar() {
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
        <i className="far fa-bell"></i>
        <i className="fas fa-user"></i>
      </div>
    </div>
  );
}

export default Navbar;
