import React from 'react'
import styles from './search_modal.module.css'

function ModalGuest({ type }) {
  return (
    <>
      {type &&
        <div className={styles.guest}>
          <h1>인원</h1>
        </div>
      }
    </>
  )
}

export default ModalGuest
