import React, { useState } from 'react'
import styles from '../../../css/main.module.css'
import ModalCalendar from './search_modal/modal_calendar'
import ModalGuest from './search_modal/modal_guest'
import ModalLocation from './search_modal/modal_location'

function Search({ type, modalType, searchRef }) {

  return (
    <div className={styles.search} ref={searchRef}>
      <div className={styles.search__container}>
        <div className={styles.search__location} onClick={() => modalType('location')}>
          <div className={styles.search__subject}>위치</div>
          <input
            type="text"
            className={styles.search__location__input}
            placeholder="어디로 여행가세요?"
          />
        </div>
      </div>
      <ModalLocation type={type === 'location'} />

      <div className={styles.search__line}></div>
      <div className={styles.search__checkIn} onClick={() => modalType('calendar')}>
        <div className={styles.search__subject}>체크인</div>
        <div className={styles.search__click}>날짜입력</div>
      </div>
      <div className={styles.search__line}></div>
      <div className={styles.search__checkOut} onClick={() => modalType('calendar')}>
        <div className={styles.search__subject}>체크아웃</div>
        <div className={styles.search__click}>날짜입력</div>
      </div>
      <ModalCalendar type={type === 'calendar'} />

      <div className={styles.search__line}></div>
      <div className={styles.search__box}>
        <div className={styles.box__personnel} onClick={() => modalType('guest')}>
          <div className={styles.search__subject}>인원</div>
          <div className={styles.search__click}>게스트 추가</div>
        </div>
        <div className={styles.box__button} onClick={() => modalType('location')}>
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
      <ModalGuest type={type === 'guest'} />
    </div>
  )
}

export default Search
