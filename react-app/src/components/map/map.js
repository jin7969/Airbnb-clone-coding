import Navbar from '../main/navbar';
import styles from '../../css/map.module.css'
import Title from './title';
import View from './view';
import GoogleMap from './googleMap';
import Footer from '../main/footer';

function Map() {
  return (
    <>
      <Navbar />
      <div className={styles.viewAndMap}>
        <div className={styles.main__left}>
          <Title />
          <View />
        </div>
        <GoogleMap />
      </div>
      <Footer />
    </>
  )
}

export default Map
