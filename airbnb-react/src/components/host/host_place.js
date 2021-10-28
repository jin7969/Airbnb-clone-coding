import React, { useRef } from 'react'
import styles from '../../css/host.module.css'


const sections = [
  {
    id: 0,
    image: "https://a0.muscache.com/im/pictures/e7fd2596-a03c-43a0-acc9-c8f19ade63b9.jpg?im_w=480",
    desc: "스튜디오 호스팅 덕에 새로운 삶을 사는 느낌이에요. 좋은 인연과 잊을 수 없는 추억은 덤이죠.",
    titleImg: "https://a0.muscache.com/im/pictures/42c538ef-af17-43f6-baff-cef946645a5f.jpg?im_q=highq&im_w=240",
    title: "밀라노의 호스트"
  },
  {
    id: 1,
    image: "https://a0.muscache.com/im/pictures/86dfe10f-cc9e-46bf-b69f-b60a71523f81.jpg?im_w=480",
    desc: "집을 숙소로 호스팅하면서 자영업자가 되어 경제적 자유에 한 걸음 더 가까워질 수 있었어요.",
    titleImg: "https://a0.muscache.com/im/pictures/65f177e1-c8ad-4f56-8f3c-db26242a9b75.jpg?im_q=highq&im_w=240",
    title: "애틀랜타의 호스트"
  },
  {
    id: 2,
    image: "https://a0.muscache.com/im/pictures/b21ec45b-8bac-4f8a-89b1-e967a69018b2.jpg?im_w=480",
    desc: "파스타 만들기 체험을 호스팅함으로써 문화 보존에 기여할 수 있습니다.",
    titleImg: "https://a0.muscache.com/im/pictures/b9e07317-ec4d-466a-8be4-64321176b060.jpg?im_q=highq&im_w=240",
    title: "팔롬바라사비나의 호스트"
  },
  {
    id: 3,
    image: "https://a0.muscache.com/im/pictures/20a9b238-f685-4041-9538-e3c5e5430d46.jpg?im_w=480",
    desc: "에어비앤비 덕분에 제가 제일 좋아하는 일을 업으로 삼을 수 있게 되었어요. 바로 집에서 게스트를 맞이하고 돌보는 일이죠.",
    titleImg: "https://a0.muscache.com/im/pictures/32ce32d2-4aaa-46a7-9fc2-010e74a2379b.jpg?im_q=highq&im_w=240",
    title: "치앙마이의 호스트"
  },
  {
    id: 4,
    image: "https://a0.muscache.com/im/pictures/27ab0b1d-a5b7-40a6-a78d-3cfb851aea4e.jpg?im_w=480",
    desc: "베두인 텐트 호스팅을 통해 세계 각지에서 온 분들을 만날 수 있었습니다.",
    titleImg: "https://a0.muscache.com/im/pictures/88d7bd3b-9bff-4b46-8dcb-573e17b5e9d5.jpg?im_q=highq&im_w=240",
    title: "와디럼의 호스트"
  },
  {
    id: 5,
    image: "https://a0.muscache.com/im/pictures/fbfee215-d5e7-4e99-88ba-1a50101eb69c.jpg?im_w=480",
    desc: "게스트가 소중한 사람들과 자연 속에서 교감할 수 있도록 친환경 숙소를 호스팅하는 게 참 보람 있어요.",
    titleImg: "https://a0.muscache.com/im/pictures/3a04f3f8-8b0f-4f99-8730-6a5b8fa697c4.jpg?im_q=highq&im_w=240",
    title: "파라치의 호스트"
  }
]

const Section = ({ image, desc, titleImg, title }) => {

  return (
    <div className={styles.place__section}>
      <div className={styles.place__image}>
        <img
          src={image}
          alt=""
        />
      </div>
      <div className={styles.place__title}>
        <div className={styles.place__description}>{desc}</div>
        <img
          src={titleImg}
          alt=""
        />
        <div className={styles.place__text}>{title}</div>
      </div>
    </div>
  )
}

function HostPlace() {
  const placeRef = useRef();
  let curPos = 1;
  let postion = 0;
  const IMAGE_WIDTH = 482;
  function prev() {
    if (curPos > 0) {
      postion += IMAGE_WIDTH;
      placeRef.current.style.transform = `translateX(${postion}px)`;
      curPos = curPos - 1;
    }
  }

  function next() {
    if (curPos < 5) {
      postion -= IMAGE_WIDTH;
      placeRef.current.style.transform = `translateX(${postion}px)`;
      curPos = curPos + 1;
    }
  }

  return (
    <section className={styles.place}>
      <h1>언제 어디서든<br />호스팅하실 수 있습니다</h1>
      <div className={styles.place__container} ref={placeRef}>
        {
          sections.map(section => (
            <Section
              key={section.id}
              image={section.image}
              desc={section.desc}
              titleImg={section.titleImg}
              title={section.title}
            />
          ))
        }
      </div>
      <div className={styles.place__button}>
        <i className="fas fa-chevron-left prev" onClick={prev}></i>
        <i className="fas fa-chevron-right next" onClick={next}></i>
      </div>
    </section>
  )
}
export default HostPlace;