import React from 'react'
import styles from '../../../css/main.module.css'

function ResSearch({ fixed }) {

  return (
    <div style={fixed
      ? {
        position: 'fixed',
        top: 0,
        backgroundColor: '#ffffff',
        transition: 'all 300ms ease',
        zIndex: 1
      }
      : {}}
      className={styles.resNav}>
      <div style={fixed ? { backgroundColor: '#f7f7f7' } : {}} className={styles.resSearch}>
        <i class="fas fa-search"></i>
        <span>어디로 여행가세요?</span>
      </div>
    </div>
  )
}

export default ResSearch
