import React, { useRef } from 'react'
import styles from './wish.module.css'

function Making({ modalType, toggleModal, onAdd }) {
  const inputRef = useRef();

  const Submit = event => {
    const name = inputRef.current.value;
    event.preventDefault();
    name && onAdd(name);
    toggleModal("");
  };

  return (
    <>
      {modalType &&
        <div className={styles.modalBack}>
          <div className={styles.overlay} onClick={() => toggleModal("")}></div>
          <div className={styles.making}>
            <div className={styles.header}>
              <div className={styles.close} onClick={() => toggleModal("")}>x</div>
              <div className={styles.title} >위시리스트 이름 정하기</div>
            </div>
            <form className={styles.input} onSubmit={(e) => e.preventDefault()}>
              <input ref={inputRef} type="text" placeholder="이름" />
              <div className={styles.text}>최대 50자</div>
            </form>
            <div className={styles.button} >
              <button onClick={Submit}>새로 만들기</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Making
