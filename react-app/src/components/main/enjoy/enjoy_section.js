import React from 'react'
import styles from '../../../css/main.module.css'

function EnjoySection({ link, image, title, desc }) {
  return (
    <div className={styles.enjoy__section}>
      <a
        href={link}
        target="blank"
      >
        <img
          src={image}
          alt=""
          className={styles.enjoy__image}
        />
        <div className={styles.enjoy__title}>{title}</div>
        <div className={styles.enjoy__description}>
          {desc}
        </div>
      </a>
    </div>
  )
}

export default EnjoySection
