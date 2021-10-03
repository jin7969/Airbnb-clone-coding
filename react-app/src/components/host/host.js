import HostMain from "./host_main/host_main";
import HostPlace from "./host_place";
import HostIncome from "./income/host_income";
import HostData from "./host_data";
import HostHosting from "./hosting/host_hosting";
import Footer from "../main/footer";
import styles from '../../css/host.module.css'
import HostNavbar from "./host_navbar";
import { useState, useEffect } from 'react';


function Host() {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 620 && window.scrollY < 3950) {
        setFixed(true);
      } else {
        setFixed(false)
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [fixed]);

  return (
    <div className={styles.hostPage}>
      {fixed
        ? <HostNavbar />
        : null
      }
      <HostMain />
      <HostPlace />
      <HostIncome />
      <HostData />
      <HostHosting />
      <Footer />
    </div>
  )
}

export default Host;