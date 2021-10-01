import { Link } from 'react-router-dom';
import styles from '../../../css/main.module.css'

function CitySection({ image, location, distance, page }) {
  return (
    <div className={styles.city__child}>
      <Link to={page}>
        <img
          src={image}
          alt=""
        />
        <div className={styles.child__text}>
          <div className={styles.child__location}>{location}</div>
          <div className={styles.child__distance}>{distance}</div>
        </div>
      </Link>
    </div>
  )
}

export default CitySection