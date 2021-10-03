import React, { useState } from 'react'
import ListItem from './ListItem'
import styles from './wish.module.css'

function List({ modalType, toggleModal, list }) {

  return (
    <>
      {modalType &&
        <div className={styles.modalBack}>
          <div className={styles.overlay} onClick={() => toggleModal("")}></div>
          <div className={styles.list}>
            <div className={styles.header}>
              <div className={styles.close} onClick={() => toggleModal("")}>x</div>
              <div className={styles.title}>위시리스트</div>
            </div>
            <div className={styles.listItem}>
              <div className={styles.item} onClick={() => toggleModal("none")}>
                <img src="https://a0.muscache.com/im/pictures/2cf775f5-3b30-4806-8572-977a74b6834e.jpg" alt="" />
                <div className={styles.name}>새로운 위시리스트 만들기</div>
              </div>
              {
                list.map(item => (
                  <ListItem key={item.id} item={item} />
                ))
              }
            </div>
          </div>
        </div>
      }
    </>

  )
}

export default List
