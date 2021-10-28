import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../../css/host.module.css'

function MainTitle() {
  return (
    <div className={styles.main__left}>
      <div className={styles.main__logo}>
        <Link to="/main"><i className="fab fa-airbnb"></i></Link>
      </div>
      <div className={styles.main__title}>
        <h1>에어비앤비의<br />핵심을 이루는<br />호스팅</h1>
        <button className={styles.main__button}>호스팅 시작하기</button>
      </div>
      <div className={styles.main__arrow}>
        < i className="fas fa-chevron-down"></i>
      </div >
    </div >
  )
}

export default MainTitle
