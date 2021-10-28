import React from 'react'
import styles from '../../css/map.module.css'


function GoogleMap() {
  return (
    <section className={styles.main__right}>
      <div className={styles.main__map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208748.11451131193!2d128.93137232280162!3d35.16436897703632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568eb6de823cd35%3A0x35d8cb74247108a7!2z67aA7IKw6rSR7Jet7Iuc!5e0!3m2!1sko!2skr!4v1631469941334!5m2!1sko!2skr"
          loading="lazy"
          style={{ width: '679px', height: '641px', border: '0' }}
        ></iframe>
      </div>
    </section>
  )
}

export default GoogleMap
