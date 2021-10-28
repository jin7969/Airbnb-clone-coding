import styles from '../../../css/main.module.css'
import CitySection from './city_section';

function LookAround({ citys }) {
  return (
    <section className={styles.lookAround}>
      <h1>가까운 여행지 둘러보기</h1>
      <div className={styles.lookAround__city}>
        {citys.map(city => (
          <CitySection key={city.id} image={city.image} location={city.location} distance={city.distance} page={city.page}></CitySection>
        ))}
      </div>
    </section>
  )
}

export default LookAround;