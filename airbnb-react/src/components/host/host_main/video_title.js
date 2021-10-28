import React from 'react'
import styles from '../../../css/host.module.css'

function VideoTitle() {
  return (
    <div className={styles.main__video__description} >
      < img
        className={styles.main__video__image}
        src="https://a0.muscache.com/im/pictures/cac9415a-acfb-4c92-a6d0-770e948741b1.jpg?im_q=highq&im_w=480"
        alt=""
      />
      <div className={styles.main__video__text} >필라델피아의 호스트</div>
    </div >
  )
}

export default VideoTitle
