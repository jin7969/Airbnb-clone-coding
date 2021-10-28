import React from 'react'
import styles from './search_modal.module.css'

function Category({ item, plus, minus }) {
  return (
    <div className={styles.category}>
      <div className={styles.title}>
        <div className={styles.mainTitle}>{item.main}</div>
        <div className={styles.subTitle}>{item.sub}</div>
      </div>
      <div className={styles.count}>
        <button className={styles.minus} onClick={() => minus(item)}>
          <i className="fas fa-minus"></i>
        </button>
        <span className={styles.number}>{item.count}</span>
        <button className={styles.plus} onClick={() => plus(item)}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default Category
