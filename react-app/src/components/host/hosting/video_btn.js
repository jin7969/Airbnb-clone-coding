import React from 'react'
import styles from '../../../css/host.module.css'

function VideoBtn({ handleBtn, playBtn }) {
  return (
    <button className={styles.hosting__play__button} onClick={handleBtn}>
      {playBtn
        ? <i className="fas fa-pause mainPause"></i>
        : <i className="fas fa-play mainPlay"></i>
      }
    </button>
  )
}

export default VideoBtn
