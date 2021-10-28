import React, { useState } from 'react'
import styles from '../../../css/host.module.css'
import QuestionKind from './question_kind';
import QuestionPersonnel from './question_personnel';
import QuestionWhere from './question_where';
import Method from './method'
import IncomeCal from './income_cal';

function HostIncome() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("activeModal");
  } else {
    document.body.classList.remove("activeModal");
  }

  return (
    <section className={styles.income}>
      <div className={styles.income__setting}>
        <QuestionKind />
        <QuestionPersonnel />
        <QuestionWhere />
        <IncomeCal />
      </div>
      <Method modal={modal} toggleModal={toggleModal} />
      <div className={styles.income__raising}>
        <button>수입 올리기</button>
      </div>
    </section>
  )
}

export default HostIncome
