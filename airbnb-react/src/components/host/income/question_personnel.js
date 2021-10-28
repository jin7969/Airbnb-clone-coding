import React from 'react'
import styles from '../../../css/host.module.css'

function QuestionPersonnel() {
  return (
    <div className={styles.income__question}>
      <h2>숙박 인원은 몇 명인가요?</h2>
      <div className={styles.question__choice}>
        <select name="" id="">
          <option value="">게스트1명</option>
          <option value="">게스트2명</option>
          <option value="">게스트3명</option>
          <option value="">게스트4명</option>
          <option value="">게스트5명</option>
          <option value="">게스트6명</option>
          <option value="">게스트7명</option>
          <option value="">게스트8명</option>
          <option value="">게스트9명</option>
          <option value="">게스트10명</option>
        </select>
      </div>
    </div>
  )
}

export default QuestionPersonnel
