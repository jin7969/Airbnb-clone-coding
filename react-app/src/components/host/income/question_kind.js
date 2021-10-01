import React from 'react'
import styles from '../../../css/host.module.css'

function QuestionKind() {
  return (
    <div className={styles.income__question}>
      <h2>어떤 종류의 숙소인가요?</h2>
      <div className={styles.question__choice}>
        <select name="" id="">
          <option value="">공간 전체</option>
          <option value="">개인실</option>
          <option value="">다인실</option>
        </select>
      </div>
    </div>
  )
}

export default QuestionKind
