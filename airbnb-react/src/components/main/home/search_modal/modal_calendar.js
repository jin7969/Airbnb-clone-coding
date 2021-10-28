import React from 'react'
import styles from './search_modal.module.css'

function ModalCalendar({ type }) {
  return (
    <>
      {type &&
        <div className={styles.calendar}>
          <h1>달력</h1>
        </div>
      }
    </>
  )
}

export default ModalCalendar
