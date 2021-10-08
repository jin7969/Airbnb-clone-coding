import { useState, useEffect, useRef } from 'react';
import styles from '../../../css/main.module.css'
import Navbar from "../navbar"
import Search from "./search";
import Container from './container';
import HomeNavbar from './home_navbar';
import Quarantine from './quarantine';
import ResSearch from './ResSearch';

function Home({ responsive }) {
  const [fixed, setFixed] = useState(false);
  const [type, setType] = useState("");
  const searchRef = useRef();

  useEffect(() => {
    let handler = event => {
      if (!searchRef.current.contains(event.target)) {
        setType("");
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
  }, [])

  const modalType = (type) => {
    setType(type)
  }

  return (
    <section className={styles.main} >
      {fixed
        ? <Navbar></Navbar>
        : null
      }
      <Quarantine />
      {responsive &&
        <ResSearch fixed={fixed} />
      }
      <HomeNavbar />
      <Search type={type} modalType={modalType} searchRef={searchRef} />
      <Container responsive={responsive} />
    </section >
  )
}

export default Home
