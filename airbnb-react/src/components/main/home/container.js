import React from 'react'
import styles from '../../../css/main.module.css'

function Container({ responsive }) {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <div className={styles.title__text}>
          {responsive
            ? <span>에어비앤비가<br />여행지를 찾아드릴게요!</span>
            : <span>어디든 상관없이 떠나고 싶을 때 에어비앤비가 도와드립니다!</span>
          }
        </div>
        <button className={styles.title__button}><span>유연한 검색</span></button>
      </div>
    </div>
  )
}

export default Container
