import React from 'react'
import styles from './search_modal.module.css'

function ModalLocation({ type }) {
  return (
    <>
      {type &&
        <div className={styles.location} >
          <div className={styles.location__container}>
            <div className={styles.location__text}>언제 어디로든 떠나는 여행</div>
            <div className={styles.location__button}>
              <div className={styles.button}>
                <div>유연한 검색</div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      }
    </>

  )
}

export default ModalLocation
