import React from "react";
import styles from "./today.module.css";

function Today() {
  return (
    <div className={styles.today}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>투데이</h1>
          <button>숙소 등록 완료하기</button>
        </div>
        <div className={styles.subTitle}>
          숙소 등록 절차가 거의 완료되었습니다!숙소 페이지에 누락된 세부정보 몇
          가지를 입력해주세요.
        </div>
      </div>
    </div>
  );
}

export default Today;
