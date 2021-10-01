import React from 'react'
import { useEffect, useState } from 'react';
import styles from '../../css/map.module.css'
import ViewRest from './viewRest'
import dummy from './data.json'
import Pagination from './Pagination';

function View() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      setPosts(dummy.title);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  }
  const indexOfLastPost = currentPage * postsPerPage; // 1 * 3 =              3
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 3 - 3 =         0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // (0, 3)
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={styles.main__view}>
      <div className={styles.main__first__line}></div>
      {
        currentPosts.map(d => (
          <ViewRest key={d.id} i={d.id} host={d.host} h3={d.h3} h2={d.h2}
            option1={d.option1} option2={d.option2} option3={d.option3} option4={d.option4}
            num={d.num} review={d.review}
          />
        ))
      }
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}

export default View
