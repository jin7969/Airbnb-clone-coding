import React from 'react'
import { useEffect, useState } from 'react';
import styles from '../../css/map.module.css'
import ViewRest from './viewRest'
import dummy from './data.json'
import Pagination from './Pagination';
import Making from './wish_list/Making';
import List from './wish_list/List';

function View() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [modal, setModal] = useState("");
  const [list, setList] = useState([]);
  const [wishImg, setWishImg] = useState("");

  const toggleModal = (type) => {
    setModal(type);
  };

  const handleAdd = name => {
    setList(list => [...list, { id: Date.now(), name, image: wishImg }])
  }

  useEffect(() => {
    const fetchPosts = () => {
      setPosts(dummy.title);
    };
    fetchPosts();
  }, []);

  if (modal) {
    document.body.classList.add("activeModal");
  } else {
    document.body.classList.remove("activeModal");
  }

  const indexOfLastPost = currentPage * postsPerPage; // 1 * 3 =              3
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 3 - 3 =         0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // (0, 3)
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={styles.main__view}>
      <Making modalType={modal === "none"} toggleModal={toggleModal} onAdd={handleAdd} />
      <List modalType={modal === "list"} toggleModal={toggleModal} list={list} />
      <div className={styles.main__first__line}></div>
      {
        currentPosts.map(d => (
          <ViewRest key={d.id} i={d.id} host={d.host} h3={d.h3} h2={d.h2}
            option1={d.option1} option2={d.option2} option3={d.option3} option4={d.option4}
            num={d.num} review={d.review} toggleModal={toggleModal} list={list.length} wishImg={setWishImg}
          />
        ))
      }
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}

export default View
