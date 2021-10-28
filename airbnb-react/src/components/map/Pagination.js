import React from 'react'
import styles from '../../css/map.module.css'

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) { //주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자
    pageNumbers.push(i);
  }
  return (
    <section className={styles.page}>
      <div className={styles.page__turn_over}>
        <button className={styles.page__prev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <ul className={styles.pageItem}>
          {pageNumbers.map(number => (
            <li key={number} className={styles.pageLink}>
              <a href="#" onClick={() => paginate(number)} className={styles.pageNumber}>
                {number}
              </a>
            </li>
          ))}
        </ul>
        <button className={styles.page__next}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className={styles.page__sequence}>총 300개 이상의 숙소 중 1 ~20번째</div>
      <div className={styles.page__text}>
        여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
        있습니다.
      </div>
    </section>
  )
}

export default Pagination
