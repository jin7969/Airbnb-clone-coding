import React from 'react'
import styles from '../../css/host.module.css'

const data = [
  {
    id: 1,
    image: "https://a0.muscache.com/im/pictures/4e53901b-370f-4bdd-ae31-6d70b724915b.jpg?im_q=highq&im_w=720",
    title: "에어비앤비의",
    sub: "호스트 지원 방법 알아보기"
  },
  {
    id: 2,
    image: "https://a0.muscache.com/im/pictures/e6d90ec2-8b98-4c51-88c6-65fceea04d38.jpg?im_q=highq&im_w=720",
    title: "슈퍼호스트에게",
    sub: "문의하기"
  },
  {
    id: 3,
    image: "https://a0.muscache.com/im/pictures/6ec073e4-1389-4212-aa5a-199fa6a26046.jpg?im_q=highq&im_w=720",
    title: "체험",
    sub: "호스팅하기"
  }
]

function Section({ image, title, sub }) {
  return (
    <div className={styles.data__section}>
      <a
        href="/#"
        target="_blank"
      >
        <img
          src={image}
          alt=""
        />
        <div className={styles.data__title}>
          {title}<br />{sub}
          <i className="fas fa-chevron-right"></i>
        </div>
      </a>
    </div>
  )
}

function HostData() {
  return (
    <section className={styles.data}>
      <h1>성공적인 호스팅에<br />유용한 자료</h1>
      <div className={styles.data__container}>
        {
          data.map(d => (
            <Section key={d.id} image={d.image} title={d.title} sub={d.sub} />
          ))
        }
      </div>
    </section>
  )
}

export default HostData
