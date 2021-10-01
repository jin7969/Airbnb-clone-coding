import React from 'react'
import styles from '../../css/map.module.css'


function Title() {
  return (
    <div className={styles.main__information}>
      <div className={styles.main__title}>
        <h3>300개 이상의 숙소</h3>
        <div className={styles.main__area}>부산의 숙소</div>
      </div>
      <div className={styles.main__option}>
        <button>취소 수수료 없음</button>
        <button>숙소 유형</button>
        <button>요금</button>
        <button>즉시 예약</button>
        <button>필터 추가하기</button>
      </div>
      <div className={styles.main__fare}>
        여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수
        있습니다.
      </div>
      <div className={styles.main__restriction}>
        <div>
          예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.&nbsp;
        </div>
        <a
          href="https://www.airbnb.co.kr/help/topic/1418/%EC%A0%95%EB%B6%80%EC%9D%98-%EC%97%AC%ED%96%89-%EC%A0%9C%ED%95%9C-%EB%B0%8F-%EC%97%AC%ED%96%89-%EA%B2%BD%EB%B3%B4"
          target="blank"
        >자세히 알아보기</a>
      </div>
    </div>
  )
}

export default Title;
