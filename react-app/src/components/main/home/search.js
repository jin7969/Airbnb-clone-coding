import React from 'react'
import styles from '../../../css/main.module.css'

function Search({ toggleModal, modal, searchRef }) {
  return (
    <div className={styles.search} ref={searchRef}>
      <div className={styles.search__location} onClick={() => toggleModal()}>
        <div className={styles.search__subject}>위치</div>
        <input
          type="text"
          className={styles.search__location__input}
          placeholder="어디로 여행가세요?"
        />
      </div>
      <div className={styles.search__line}></div>
      <div className={styles.search__checkIn}>
        <div className={styles.search__subject}>체크인</div>
        <div className={styles.search__click}>날짜입력</div>
      </div>
      <div className={styles.search__line}></div>
      <div className={styles.search__checkOut}>
        <div className={styles.search__subject}>체크아웃</div>
        <div className={styles.search__click}>날짜입력</div>
      </div>
      <div className={styles.search__line}></div>
      <div className={styles.search__box}>
        <div className={styles.box__personnel}>
          <div className={styles.search__subject}>인원</div>
          <div className={styles.search__click}>게스트 추가</div>
        </div>
        <div className={styles.box__button}>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: 'block',
              fill: 'none',
              height: '16px',
              width: '16px',
              stroke: 'currentcolor',
              strokeWidth: '4',
              overflow: 'visible'
            }}
          >
            <g fill="none">
              <path
                d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      {/* Modal */}
      {modal &&
        <div className={styles.location} >
          <div className={styles.location__container}>
            <div className={styles.location__text}>언제 어디로든 떠나는 여행</div>
            <div className={styles.location__button}>
              <div className={styles.button}>
                <div>유연한 검색</div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Search
