import React from 'react'
import styles from '../../css/host.module.css'
import { Link } from 'react-router-dom';

function HostNavbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/main"><i className="fab fa-airbnb"></i></Link>
      </div>
      <div className={styles.hostingBtn}>호스팅 시작하기</div>
    </div>
  )
}

export default HostNavbar;
