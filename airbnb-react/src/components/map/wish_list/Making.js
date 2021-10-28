import React, { useRef } from 'react'
import styles from './wish.module.css'

function Making({ modalType, toggleModal, onAdd }) {
  const inputRef = useRef();
  const buttonRef = useRef();

  const Submit = event => {
    const name = inputRef.current.value;
    event.preventDefault();
    name && onAdd(name);
    toggleModal("");
  };

  const changeColor = () => {
    const name = inputRef.current.value;
    if (name) {
      buttonRef.current.style.backgroundColor = "#000000"
    } else {
      buttonRef.current.style.backgroundColor = "rgb(221, 221, 221)"
    }
  }

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
            <form className={styles.input} onSubmit={(e) => e.preventDefault()} >
              <input ref={inputRef} type="text" placeholder="이름" onChange={changeColor} />
              <div className={styles.text}>최대 50자</div>
            </form>
            <div className={styles.button} >
              <button onClick={Submit} ref={buttonRef}>새로 만들기</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Making
