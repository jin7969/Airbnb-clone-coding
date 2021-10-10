import React from "react";
import Container from "./Container";
import styles from "./hosting.module.css";

function HostingTip() {
  return (
    <div className={styles.hosting}>
      <div className={styles.hostingTip}>
        <h1>호스팅 관련 팁과 업데이트</h1>
        <Container />
      </div>
    </div>
  );
}

export default HostingTip;
