import React from 'react'
import styles from '../../css/map.module.css'
import dummy from './data.json'
import ViewSlider from './viewSlider'

function ViewRest({ i, host, h3, h2, option1, option2, option3, option4, num, review }) {
  return (
    <div className={styles.main__rest}>
      <div className={styles.main__section}>
        <div className={styles.view__image}>
          <ViewSlider key={dummy.imgData[i].id} image1={dummy.imgData[i].image1} image2={dummy.imgData[i].image2} image3={dummy.imgData[i].image3} />
          {host &&
            <div className={styles.image__super_host}>슈퍼호스트</div>
          }
        </div>
        <div className={styles.view__description}>
          <div className={styles.view__titleAndHeart}>
            <div className={styles.view__title}>
              <h3>{h3}</h3>
              <h2>{h2}</h2>
            </div>
            <button className={styles.view__heart}>
              <i className="far fa-heart"></i>
            </button>
          </div>
          <div className={styles.view__line}></div>
          <div className={styles.view__option}>
            <div className={styles.view__option__first}>
              <span>{option1}</span><span> . </span
              ><span>{option2}</span><span> . </span><span>{option3}</span
              ><span> . </span><span>{option4}</span>
            </div>
            <div className={styles.view__option__second}>
              <span>에어컨</span><span> . </span><span>주방</span
              ><span> . </span><span>무선인터넷</span><span> . </span
              ><span>헤어드라이어</span>
            </div>
          </div>
          <div className={styles.view__review}>
            <i className="fas fa-star"></i>
            <span style={{ fontWeight: "600" }}>{num}</span>
            <span style={{ color: "#717171" }}>&nbsp;({review})</span>
          </div>
        </div>
      </div>
      <div className={styles.section__underline}></div>
    </div>
  )
}

export default ViewRest
