import React from 'react'
import styles from '../../../css/host.module.css'

function HostingTitle() {
  return (
    <div className={styles.hosting__right}>
      <h2>에어비앤비에서<br />호스팅을 시작해보세요</h2>
      <div className={styles.hosting__subtitle}>
        에어비앤비 호스트가 되어보세요. 에어비앤비가<br />모든
        단계에서도와드립니다.
      </div>
      <button className={styles.hosting__button}>시작하기</button>
    </div>
  )
}

export default HostingTitle
