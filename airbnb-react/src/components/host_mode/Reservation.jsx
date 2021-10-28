import React from "react";
import styles from "./reservation.module.css";

function Reservation() {
  return (
    <div className={styles.reservation}>
      <div className={styles.image}>
        <div className={styles.title}>
          <h1>예약</h1>
          <div className={styles.subTitle}>
            게스트가 숙소를 예약하면
            <br />
            여기에 표시됩니다.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
