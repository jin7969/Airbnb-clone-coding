import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../../../css/main.module.css'

function BasicHost() {
  return (
    <div className={styles.hosting__container}>
      <Link
        to="/host"
      >
        <img
          src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
          alt=""
          className={styles.hosting__image}
        />
        <div className={styles.hosting__description}>
          <div className={styles.hosting__title}>호스팅 시작하기</div>
          <div className={styles.hosting__subtitle}>
            숙소를 공유하여 부수입을 올리고 새로운<br />
            가능성을 만나세요.
          </div>
          <div className={styles.hosting__button}>자세히 알아보기</div>
        </div>
      </Link>
    </div>
  )
}

export default BasicHost