import { useState, useEffect, useRef } from 'react';
import styles from '../../../css/main.module.css'
import Navbar from "../navbar"
import Search from "./search";
import Container from './container';
import HomeNavbar from './home_navbar';
import Quarantine from './quarantine';

function Home() {
  const [modal, setModal] = useState(false);
  const [fixed, setFixed] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    let handler = event => {
      if (!searchRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    let handleScroll = () => {
      if (window.scrollY > 80) {
        setFixed(true);
      } else {
        setFixed(false)
      }
    };
    document.addEventListener('scroll', handleScroll);
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener("mousedown", handler);
    }
  })

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <section className={styles.main} >
      {fixed
        ? <Navbar></Navbar>
        : null
      }
      <Quarantine />
      <HomeNavbar />
      <Search toggleModal={toggleModal} modal={modal} searchRef={searchRef} />
      <Container />
    </section >
  )
}

export default Home
