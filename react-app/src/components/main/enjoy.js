import React from 'react';
import styles from '../../css/main.module.css'
const section = [
  {
    id: 1,
    link: "https://www.airbnb.co.kr/s/experiences?location_search=NEARBY",
    image: "https://a0.muscache.com/im/pictures/56dc3b0e-10dc-4410-bacd-fb6293b19264.jpg?im_w=480",
    title: "체험",
    desc: "가까운 곳에서 즐길 수 있는 잊지 못할 체험을 찾아보세요."
  },
  {
    id: 2,
    link: "https://www.airbnb.co.kr/s/experiences/online",
    image: "https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=240",
    title: "온라인 체험",
    desc: "호스트와 실기간으로 소통하면서 액티비티를 즐겨보세요."
  },
  {
    id: 3,
    link: "https://www.airbnb.co.kr/s/all?refinement_paths%5B%5D=%2Fplaylists%2F46390&last_search_session_id=b09a3275-b57d-4833-8090-758b36870958&search_type=section_navigation",
    image: "https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480",
    title: "추천 컬렉션: 여행 본능을 깨우는 체험",
    desc: "온라인 체험으로 집에서 랜선 여행을 즐기세요."
  }
]

function Copy({ link, image, title, desc }) {
  return (
    <div className={styles.enjoy__section}>
      <a
        href={link}
        target="blank"
      >
        <img
          src={image}
          alt=""
          className={styles.enjoy__image}
        />
        <div className={styles.enjoy__title}>{title}</div>
        <div className={styles.enjoy__description}>
          {desc}
        </div>
      </a>
    </div>
  )
};

function Enjoy() {
  return (
    <section className={styles.enjoy}>
      <h1>특별한 즐길 거리를 찾아보세요</h1>
      <div className={styles.enjoy__container}>
        {section.map(option => (
          <Copy key={option.id} link={option.link} image={option.image} title={option.title} desc={option.desc}></Copy>
        ))}
      </div>
    </section>
  )
}

export default Enjoy;