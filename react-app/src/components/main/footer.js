import styles from '../../css/main.module.css'
import { useMediaQuery } from 'react-responsive';
import ResFooter from './ResFooter';

function Footer() {
  const responsive = useMediaQuery({
    query: "(max-width:1110px)"
  });

  return (
    <>
      {responsive
        ? <ResFooter />
        : <section className={styles.contact}>
          <div className={styles.contact__section}>
            <div className={styles.contact__menu}>
              <h3>소개</h3>
              <ul>
                <li><a href="/#">에어비앤비 이용 방법</a></li>
                <li><a href="/#">뉴스룸</a></li>
                <li><a href="/#">에어비앤비 2021</a></li>
                <li><a href="/#">투자자 정보</a></li>
                <li><a href="/#">에어비앤비 플러스</a></li>
                <li><a href="/#">에어비앤비 Luxe</a></li>
                <li><a href="/#">호텔투나잇</a></li>
                <li><a href="/#">에어비앤비 비즈니스 프로그램</a></li>
                <li><a href="/#">호스트 분들이 있기에 가능합니다</a></li>
                <li><a href="/#">채용정보</a></li>
                <li><a href="/#">창립자 편지</a></li>
              </ul>
            </div>
            <div className={styles.contact__menu}>
              <h3>커뮤니티</h3>
              <ul>
                <li><a href="/#">다양성 및 소속감</a></li>
                <li><a href="/#">접근성</a></li>
                <li><a href="/#">에어비앤비 어소시에이트</a></li>
                <li><a href="/#">아프간 난민 호스팅하기</a></li>
                <li><a href="/#">게스트 추천</a></li>
                <li><a href="/#">Airbnb.org</a></li>
              </ul>
            </div>
            <div className={styles.contact__menu}>
              <h3>호스팅하기</h3>
              <ul>
                <li><a href="/#">숙소 호스팅</a></li>
                <li><a href="/#">온라인 체험 호스팅하기</a></li>
                <li><a href="/#">체험 호스팅하기</a></li>
                <li><a href="/#">책임감 있는 호스팅</a></li>
                <li><a href="/#">자료 센터</a></li>
                <li><a href="/#">커뮤니티 센터</a></li>
              </ul>
            </div>
            <div className={styles.contact__menu}>
              <h3>에어비앤비 지원</h3>
              <ul>
                <li><a href="/#">에어비앤비의 코로나19 대응 방안</a></li>
                <li><a href="/#">도움말 센터</a></li>
                <li><a href="/#">예약 취소 옵션</a></li>
                <li><a href="/#">에어비앤비 이웃 민원 지원</a></li>
                <li><a href="/#">신뢰와 안전</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.contact__link}>
            <ul>
              <li>© 2021 Airbnb, Inc.</li>
              <li>.</li>
              <li><a href="/#">개인정보 처리방침</a></li>
              <li>.</li>
              <li><a href="/#">이용약관</a></li>
              <li>.</li>
              <li><a href="/#">사이트맵</a></li>
              <li>.</li>
              <li><a href="/#">한국의 변경된 환불 정책</a></li>
              <li>.</li>
              <li><a href="/#">회사 세부정보</a></li>
            </ul>
            <div className={styles.contact__settingAndIcon}>
              <div className={styles.contact__setting}>
                <div className={styles.setting__language}>
                  <i className={`${styles.fas} ${styles.faglobe}`}></i>
                  <span>한국어(KR)</span>
                </div>
                <div className={styles.setting__money}>
                  <span>\</span>
                  <span>KRW</span>
                </div>
              </div>
              <div className={styles.contact__icon}>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <svg
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="false"
                  aria-label="인스타그램으로 이동하기"
                  focusable="false"
                  style={{
                    height: '18px',
                    width: '18px',
                    display: 'block',
                    fill: 'currentColor'
                  }}
                >
                  <path
                    d="m23.09.91c-.61-.61-1.33-.91-2.17-.91h-17.84c-.85 0-1.57.3-2.17.91s-.91 1.33-.91 2.17v17.84c0 .85.3 1.57.91 2.17s1.33.91 2.17.91h17.84c.85 0 1.57-.3 2.17-.91s.91-1.33.91-2.17v-17.84c0-.85-.3-1.57-.91-2.17zm-14.48 7.74c.94-.91 2.08-1.37 3.4-1.37 1.33 0 2.47.46 3.41 1.37s1.41 2.01 1.41 3.3-.47 2.39-1.41 3.3-2.08 1.37-3.41 1.37c-1.32 0-2.46-.46-3.4-1.37s-1.41-2.01-1.41-3.3.47-2.39 1.41-3.3zm12.66 11.63c0 .27-.09.5-.28.68a.92.92 0 0 1 -.67.28h-16.7a.93.93 0 0 1 -.68-.28.92.92 0 0 1 -.27-.68v-10.13h2.2a6.74 6.74 0 0 0 -.31 2.05c0 2 .73 3.71 2.19 5.12s3.21 2.12 5.27 2.12a7.5 7.5 0 0 0 3.75-.97 7.29 7.29 0 0 0 2.72-2.63 6.93 6.93 0 0 0 1-3.63c0-.71-.11-1.39-.31-2.05h2.11v10.12zm0-13.95c0 .3-.11.56-.31.77a1.05 1.05 0 0 1 -.77.31h-2.72c-.3 0-.56-.11-.77-.31a1.05 1.05 0 0 1 -.31-.77v-2.58c0-.29.11-.54.31-.76s.47-.32.77-.32h2.72c.3 0 .56.11.77.32s.31.47.31.76z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  role="img"
                  aria-hidden="false"
                  aria-label="네이버 블로그로 이동하기"
                  focusable="false"
                  style={{
                    height: '18px',
                    width: '18px',
                    display: 'block',
                    fill: 'currentColor'
                  }}
                >
                  <path
                    d="m984 1024h-944c-22.1 0-40-17.9-40-40v-944c0-22.1 17.9-40 40-40h944c22.1 0 40 17.9 40 40v944c0 22.1-17.9 40-40 40z"
                    fill="#00c73c"
                  ></path>
                  <path
                    d="m757 203.2h-490.4c-70.4 0-127.5 57.1-127.5 127.5v303.5c0 70.7 57.3 127.9 127.9 127.9h173.8l58.7 101.6c5.4 9.3 18.9 9.3 24.2 0l58.7-101.6h174.2c70.6 0 128.5-57.8 128.5-128.5v-302.4c0-70.7-57.3-128-128.1-128z"
                    fill="#fff"
                  ></path>
                  <g fill="#ff812c">
                    <path
                      d="m390.7 495.6c0 38.7-28 68.5-62.1 68.5-17.4 0-30.1-6-38.7-15.8v12.2h-38.9v-173.1h38.9v55.5c8.6-9.9 21.3-15.8 38.7-15.8 34 0 62.1 29.8 62.1 68.5zm-36.4 0c0-21.1-14-34.3-33.4-34.3s-33.4 13.2-33.4 34.3 14 34.3 33.4 34.3c19.3 0 33.4-13.2 33.4-34.3z"
                    ></path>
                    <path
                      d="m477.6 495.6c0-38.7 30.6-68.5 68.8-68.5s68.8 29.9 68.8 68.5c0 38.7-30.6 68.5-68.8 68.5s-68.8-29.8-68.8-68.5zm101.1 0c0-19.9-14-33.2-32.3-33.2s-32.3 13.2-32.3 33.2c0 19.9 14 33.2 32.3 33.2 18.2 0 32.3-13.2 32.3-33.2z"
                    ></path>
                    <path
                      d="m704.6 616.1c34.5 0 68.5-18.4 68.5-62.1v-123.3h-37.9v13.2c-8.6-10.6-21-16.9-37.9-16.9-36.9 0-63.9 30.1-63.9 66 0 35.8 27 65.9 63.9 65.9 16.9 0 29.3-6.2 37.9-16.9v12c0 18.4-11.2 27.8-29.3 27.8h-1.3zm-.7-90.5c-19.9 0-34-13.2-34-32.6s14-32.6 34-32.6c19.9 0 34 13.2 34 32.6s-14.1 32.6-34 32.6z"
                    ></path>
                    <path
                      d="m394.3 382.7v35.1c13.4 2.6 21.3 11.8 21.3 27.4v115.3h38.9v-115.3c0-40.3-28.6-59.4-60.2-62.5z"
                    ></path>
                  </g>
                </svg>
                <svg
                  enableBackground="new 0 0 1024 1024"
                  viewBox="0 0 1024 1024"
                  role="img"
                  aria-hidden="false"
                  aria-label="네이버 포스트로 이동하기"
                  focusable="false"
                  style={{
                    height: '18px',
                    width: '18px',
                    display: 'block',
                    fill: 'currentColor'
                  }}
                >
                  <path
                    d="m984 1024h-944c-22.1 0-40-17.9-40-40v-944c0-22.1 17.9-40 40-40h944c22.1 0 40 17.9 40 40v944c0 22.1-17.9 40-40 40z"
                    fill="#fff"
                  ></path>
                  <g fill="#00c73c">
                    <path d="m0 198h1024v7h-1024z"></path>
                    <path d="m0 405h1024v7h-1024z"></path>
                    <path d="m0 612h1024v7h-1024z"></path>
                    <path d="m0 819h1024v7h-1024z"></path>
                  </g>
                  <path
                    d="m307 537 188.2 324.1c7.5 12.9 26.1 12.9 33.6 0l188.2-324.1z"
                    fill="#f4e49d"
                  ></path>
                  <path d="m307 0h410v537h-410z" fill="#00e831"></path>
                  <path d="m392 0h240v537h-240z" fill="#00c73c"></path>
                  <path
                    d="m392 148.5v240h240v-240zm188 182h-47.8l-41.2-62.8v62.8h-47v-124h45.8l42.2 62.4v-62.4h48z"
                    fill="#fff"
                  ></path>
                  <path d="m632 0h85v537h-85z" fill="#00a32a"></path>
                  <path
                    d="m528.8 861.1 188.2-324.1h-85l-119.5 333.7c6.3-.1 12.6-3.3 16.3-9.6z"
                    fill="#e0c141"
                  ></path>
                  <path
                    d="m448.8 781.2 46.4 79.9c7.5 12.9 26.1 12.9 33.6 0l46.4-79.9z"
                    fill="#2d2d2d"
                  ></path>
                </svg>
              </div >
            </div >
          </div >
        </section >
      }
    </>
  )
}

export default Footer;