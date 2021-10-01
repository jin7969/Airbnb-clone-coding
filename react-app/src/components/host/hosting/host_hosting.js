import React from 'react'
import { useRef, useState } from 'react'
import styles from '../../../css/host.module.css'
import HostingTitle from './hosting_title';
import HostingVideo from './hosting_video';

function HostHosting() {
  const videoRef = useRef();
  const [playBtn, setPlayBtn] = useState(true);
  const handleBtn = () => {
    setPlayBtn(!playBtn);
    playBtn ? videoRef.current.pause() : videoRef.current.play();
  };

  return (
    <section className={styles.hosting}>
      <HostingVideo videoRef={videoRef} playBtn={playBtn} handleBtn={handleBtn} />
      <HostingTitle />
    </section>
  )
}

export default HostHosting
