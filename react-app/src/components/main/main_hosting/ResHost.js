import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../../css/main.module.css'

function ResHost() {
  return (
    <div className={styles.resHost}>
      <Link
        to="/host"
      >
        <img
          src="https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=320"
          alt=""
          className={styles.resHost__image}
        />
        <div className={styles.hosting__description}>
          <div className={styles.hosting__title}>호스팅 시작하기</div>
          <div className={styles.hosting__subtitle}>
            숙소를 공유하여 부수입을 올리고 새로운 가능성을 만나세요.
          </div>
          <div className={styles.hosting__button}>자세히 알아보기</div>
        </div>
      </Link>
    </div>
  )
}

export default ResHost
