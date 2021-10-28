import React from 'react'
import styles from '../../../css/host.module.css'

function Method({ modal, toggleModal }) {
  return (
    <>
      <div className={styles.income__method}>
        <button onClick={toggleModal}>에어비앤비가 예상 수입을 산정하는 방법</button>
      </div>
      {modal && (
        <div className={styles.modalBack}>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.modal}>
            <div className={styles.modal__button} onClick={toggleModal}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                style={{ fill: 'none', width: '16px', stroke: 'currentcolor', strokeWidth: '3', overflow: 'visible' }}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
            </div>
            <div className={styles.modal__desc}>
              <h2>에어비앤비가 예상 수입을 산정하는 방법</h2>
              <p>예상 수입은 몇 가지 간단한 가정과 계산을 통해 산정됩니다.</p>
              <ul>
                <li>공간 전체 숙소의 경우 게스트 4명, 개인실의 경우 2명, 다인실의 경우 1명이 숙박하는 것을 기준으로 합니다. 선택 항목은 드롭다운 메뉴에서 언제든 변경할 수 있습니다.</li>
                <br />
                <li>에어비앤비는 숙소가 위치한 지역의 지난 12개월간 데이터를 바탕으로 1박 요금(비용, 수수료, 세금 적용 전) 중간값을 파악합니다.</li>
                <br />
                <li>이 수치에 총 숙박일수를 곱해 월별 예상 수입을 계산합니다. 예상 호스팅 일수는 해당 지역 다른 숙소의 호스팅 빈도를 기준으로 합니다.</li>
              </ul>
              모든 금액은 추정치이며, 실제 호스팅 수입은 숙소의 예약 가능 여부, 요금, 수락률 및 취소율, 법적 제한, 숙소가 있는 지역의 수요 등 여러 요인에 따라 달라질 수 있습니다.
              <br /> 또한 호스팅 가능 여부는 현지 법규에 따라 제한될 수 있습니다.
              <a href="/#">자세히 알아보기</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Method
