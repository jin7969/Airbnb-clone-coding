import styles from '../../../css/host.module.css'
import { useRef, useState } from 'react'
import MainVideo from './main_video';
import MainTitle from './main_title';

const HostMain = () => {

  const videoRef = useRef();
  const [playBtn, setPlayBtn] = useState(true);

  const handleBtn = () => {
    console.log("btn")
    setPlayBtn(!playBtn);
    playBtn ? videoRef.current.pause() : videoRef.current.play();
  };

  return (
    <section className={styles.main}>
      <MainTitle />
      <MainVideo playBtn={playBtn} handleBtn={handleBtn} videoRef={videoRef} />
    </section >
  )
}

export default HostMain;
