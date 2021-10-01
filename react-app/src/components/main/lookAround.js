import { Link } from 'react-router-dom';
import styles from '../../css/main.module.css'

const cityChild = [
  {
    id: 1,
    image: "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=240",
    location: "서울", distance: "차로 5시간 거리",
    page: "/#"
  },
  {
    id: 2,
    image: "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240",
    location: "부산", distance: "차로 30분 거리",
    page: "/map"
  },
  {
    id: 3,
    image: "https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240",
    location: "양양군", distance: "차로 5시간 거리",
    page: "/#"
  },
  {
    id: 4,
    image: "https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240",
    location: "속초시", distance: "차로 5.5시간 거리",
    page: "/#"
  },
  {
    id: 5,
    image: "https://a0.muscache.com/im/pictures/20356d40-a45f-4680-a9d0-5bb0a3836e4d.jpg?im_q=medq&im_w=240",
    location: "대구", distance: "차로 1.5시간 거리",
    page: "/#"
  },
  {
    id: 6,
    image: "https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240",
    location: "제주도(Jeju", distance: "차로 6시간 거리",
    page: "/#"
  },
  {
    id: 7,
    image: "https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240",
    location: "완주군", distance: "차로 3.5시간 거리",
    page: "/#"
  },
  {
    id: 8,
    image: "https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240",
    location: "전주시", distance: "차로 3.5시간 거리",
    page: "/#"
  }
]

function City({ image, location, distance, page }) {
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

function LookAround() {
  return (
    <section className={styles.lookAround}>
      <h1>가까운 여행지 둘러보기</h1>
      <div className={styles.lookAround__city}>
        {cityChild.map(child => (
          <City key={child.id} image={child.image} location={child.location} distance={child.distance} page={child.page}></City>
        ))}
      </div>
    </section>
  )
}

export default LookAround;