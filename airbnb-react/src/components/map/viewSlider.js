import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ViewSlider({ image1, image2, image3 }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
    </Slider>
  )
}

export default ViewSlider
