import React, { useState } from 'react'
import styles from '../../../css/main.module.css'
import ModalCalendar from './search_modal/modal_calendar'
import ModalGuest from './search_modal/modal_guest'
import ModalLocation from './search_modal/modal_location'

function Search({ type, modalType, searchRef }) {
  const [guest] = useState(true);
  const [category, setCategory] = useState([
    {
      id: 1,
      main: "성인",
      sub: "만 13세 이상",
      count: 0
    },
    {
      id: 2,
      main: "어린이",
      sub: "만 2~12세",
      count: 0
    },
    {
      id: 3,
      main: "유아",
      sub: "만 2세 미만",
      count: 0
    }
  ]);

  const handlePlus = item => {
    setCategory(category =>
      category.map(i => {
        if (item.id === i.id) {
          return { ...item, count: item.count + 1 };
        }
        return i
      })
    )
  }

  const handleMinus = item => {
    setCategory(category =>
      category.map(i => {
        if (item.id === i.id && item.count > 0) {
          return { ...item, count: item.count - 1 };
        }
        return i
      })
    )
  }

  return (
    <div className={styles.search} ref={searchRef}>
      <div className={styles.search__location} onClick={() => modalType('location')}>
        <div className={styles.search__subject}>위치</div>
        <input
          type="text"
          className={styles.search__location__input}
          placeholder="어디로 여행가세요?"
        />
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
          {!guest
            ? <div className={styles.search__guest}>게스트 추가</div>
            : <div className={styles.totalCount}>게스트 {category.reduce((acc, cur) => { return acc += cur.count }, 0)}명</div>
          }
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
      <ModalGuest type={type === 'guest'} category={category} plus={handlePlus} minus={handleMinus} />
    </div>
  )
}

export default Search
