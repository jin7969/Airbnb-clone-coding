import React from 'react'
import styles from './wish.module.css'

function ListItem({ item }) {
  return (
    <div className={styles.item}>
      <img src={item.image} alt="" />
      <div className={styles.name}>{item.name}</div>
    </div>
  )
}

export default ListItem
