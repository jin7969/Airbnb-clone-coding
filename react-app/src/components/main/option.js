import styles from '../../css/main.module.css'

const op = [
  {
    id: 1,
    image: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480",
    desc: "자연생활을 만끽할 수 있는 숙소"
  },
  {
    id: 2,
    image: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480",
    desc: "독특한 공간"
  },
  {
    id: 3,
    image: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480",
    desc: "집 전체"
  },
  {
    id: 4,
    image: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480",
    desc: "반려동물 동반 가능"
  }
]

function Copy({ image, desc }) {
  return (
    <a
      href="/#"
    >
      <img
        src={image}
        alt=""
        className={styles.option__image}
      />
      <div className={styles.option__description}>{desc}</div>
    </a>
  )
}

function Option() {
  return (
    <section className={styles.option}>
      <h1>어디에서나, 여행은 살아보는 거야!</h1>
      <div className={styles.option__container}>
        {op.map(option => (
          <Copy key={option.id} image={option.image} desc={option.desc}></Copy>
        ))}
      </div>
    </section>
  )
}

export default Option;