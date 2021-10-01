import styles from '../../../css/main.module.css'
import OptionSection from './option_section';

function Option({ options }) {
  return (
    <section className={styles.option}>
      <h1>어디에서나, 여행은 살아보는 거야!</h1>
      <div className={styles.option__container}>
        {options.map(option => (
          <OptionSection key={option.id} image={option.image} desc={option.desc} />
        ))}
      </div>
    </section>
  )
}

export default Option;