import React from 'react'
import styles from '../../../css/host.module.css'
import VideoBtn from './video_btn'


function HostingVideo({ playBtn, handleBtn, videoRef }) {
  return (
    <div className={styles.hosting__left}>
      <video
        ref={videoRef}
        className={styles.hosting__video}
        style={{ objectFit: "cover" }}
        autoPlay
        onEnded={handleBtn}
        crossOrigin="anonymous"
        muted
        playsInline
        preload="none"
        aria-label="세 명의 호스트가 게스트가 도착하기 전에 숙소를 준비합니다. 첫 번째 호스트인 한 여성이 갓 구운 빵을 내놓습니다. 두 번째 호스트인 남성은 게스트를 위한 환영 카드를 적고 있습니다. 세 번째 호스트인 여성은 레몬이 담긴 그릇을 테이블 위에 놓습니다."
      >
        <source
          src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4?imformat=h265"
          type="video/mp4; codecs=hevc"
        />
        <source
          src="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"
          type="video/mp4"
        />
      </video>
      <VideoBtn playBtn={playBtn} handleBtn={handleBtn} />
    </div>
  )
}

export default HostingVideo
