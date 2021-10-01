import React from 'react';
import styles from '../../../css/main.module.css'
import EnjoySection from './enjoy_section';

function Enjoy({ sections }) {
  return (
    <section className={styles.enjoy}>
      <h1>특별한 즐길 거리를 찾아보세요</h1>
      <div className={styles.enjoy__container}>
        {sections.map(section => (
          <EnjoySection key={section.id} link={section.link} image={section.image} title={section.title} desc={section.desc}></EnjoySection>
        ))}
      </div>
    </section>
  )
}

export default Enjoy;