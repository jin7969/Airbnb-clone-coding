import React from 'react'
import styles from '../../../css/host.module.css'
import VideoBtn from './video_btn'
import VideoTitle from './video_title'

function MainVideo({ playBtn, handleBtn, videoRef }) {
  return (
    <div className={styles.main__right} >
      < video
        ref={videoRef}
        className={styles.main__video}
        autoPlay
        onEnded={() => handleBtn()}
        crossOrigin="anonymous"
        muted
        playsInline
        preload="auto"
        aria-label="필라델피아의 호스트 첼시님이 미소를 지으며 문을 엽니다. 뭄바이에서 호스팅하는 소라야님이 미소를 지으며 옆에 있는 다른 사람과 함께 현관문을 엽니다. 요하네스버그의 호스트 모하메드님이 미소를 지으며 문을 엽니다. 멕시코시티의 호스트 마리아님이 고개를 끄덕이고 미소를 지으며 식물을 옮깁니다."
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
      >
        <source
          src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4?imformat=h265"
          type="video/mp4; codecs=hevc"
        />
        <source
          src="https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4"
          type="video/mp4"
        />
      </video >
      <div className={styles.main__video__title} >
        <VideoBtn playBtn={playBtn} handleBtn={handleBtn} />
        <VideoTitle />
      </div >
    </div >
  )
}

export default MainVideo

