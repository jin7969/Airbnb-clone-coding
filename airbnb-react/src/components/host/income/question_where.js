import React from 'react'
import styles from '../../../css/host.module.css'

function QuestionWhere() {
  return (
    <div className={styles.income__question}>
      <h2>숙소 위치는 어디인가요?</h2>
      <div className={styles.question__choice}>
        <span>Busan</span>
      </div>
    </div>
  )
}

export default QuestionWhere
