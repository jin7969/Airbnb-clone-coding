import React from 'react'
import styles from '../../../css/main.module.css'

function OptionSection({ image, desc }) {
  return (
    <a
      href="/#"
    >
      <img
        src={image}
        alt=""
        className={styles.option__image}
      />
      <div className={styles.option__description}>{desc}</div>
    </a>
  )
}

export default OptionSection
