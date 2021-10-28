import React from "react";
import styles from "./hosting.module.css";
import Section from "./Section";

const items = [
  {
    id: 1,
    image:
      "https://a0.muscache.com/im/pictures/fff5a5e8-3ab3-4970-a5fc-c51e301a9acb.jpg?im_w=480",
    title: "호스팅 대금을 수령하는 방법",
  },
  {
    id: 2,
    image:
      "https://a0.muscache.com/im/pictures/1caeb016-a2ad-4c00-86a3-4cafc77431e0.jpg?im_w=480",
    title: "멋진 숙소 설명 작성하기",
  },
  {
    id: 3,
    image:
      "https://a0.muscache.com/im/pictures/57d04174-24ab-4a42-a1d7-989d5b1dda47.jpg?im_w=480",
    title: "요금 책정 전략 수립",
  },
  {
    id: 4,
    image:
      "https://a0.muscache.com/im/pictures/c8c24577-9079-4af8-b64b-200feb855d33.jpg?im_w=480",
    title: "가이드북을 통해 게스트에게 유용한 현지 정보 알려주기",
  },
];

function Container() {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <Section key={item.id} image={item.image} title={item.title} />
      ))}
    </div>
  );
}

export default Container;
